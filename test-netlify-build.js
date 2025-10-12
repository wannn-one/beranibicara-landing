#!/usr/bin/env node

/**
 * Test Netlify build locally untuk debug 404 issues
 * Berdasarkan: https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125
 */

import { execSync } from 'child_process'
import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

console.log('🔍 Testing Netlify Build Configuration...\n')

try {
  // Test 1: Check Nuxt generate command
  console.log('📦 Running npm run generate...')
  execSync('npm run generate', { stdio: 'inherit' })
  
  // Test 2: Check output directory
  console.log('\n📁 Checking generated files...')
  const distDir = 'dist'
  
  if (!existsSync(distDir)) {
    console.log('❌ dist/ directory not found!')
    console.log('💡 This is likely why you get 404 on Netlify')
    process.exit(1)
  }
  
  console.log('✅ dist/ directory exists')
  
  // Test 3: Check for index.html
  const indexPath = join(distDir, 'index.html')
  if (existsSync(indexPath)) {
    console.log('✅ index.html found')
  } else {
    console.log('❌ index.html NOT found - this will cause 404!')
    process.exit(1)
  }
  
  // Test 4: Check for other pages
  const pages = ['privacy-policy', 'terms-of-service']
  pages.forEach(page => {
    const pagePath = join(distDir, page, 'index.html')
    const altPagePath = join(distDir, `${page}.html`)
    
    if (existsSync(pagePath)) {
      console.log(`✅ ${page}/index.html found`)
    } else if (existsSync(altPagePath)) {
      console.log(`✅ ${page}.html found`)
    } else {
      console.log(`⚠️  ${page} page not found - may cause 404 for that route`)
    }
  })
  
  // Test 5: Check _redirects file
  const redirectsPath = join(distDir, '_redirects')
  if (existsSync(redirectsPath)) {
    console.log('✅ _redirects file copied to dist/')
  } else {
    console.log('⚠️  _redirects file not found in dist/ - SPA routing may not work')
  }
  
  // Test 6: List all files in dist
  console.log('\n📋 Files in dist/ directory:')
  function listFiles(dir, prefix = '') {
    const files = readdirSync(dir)
    files.forEach(file => {
      const filePath = join(dir, file)
      const stat = statSync(filePath)
      if (stat.isDirectory()) {
        console.log(`${prefix}📁 ${file}/`)
        listFiles(filePath, prefix + '  ')
      } else {
        console.log(`${prefix}📄 ${file}`)
      }
    })
  }
  listFiles(distDir)
  
  console.log('\n🎉 Build test completed!')
  console.log('\n📋 Next steps:')
  console.log('1. If all files are present, push to Git')
  console.log('2. Netlify will use: npm run generate')
  console.log('3. Netlify will publish: dist/ directory')
  console.log('\n💡 If you still get 404 after deploy:')
  console.log('- Check Netlify deploy logs')
  console.log('- Use Netlify Deploy File Browser to verify files')
  console.log('- Ensure _redirects file is in the root of published directory')
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message)
  console.log('\n💡 Common fixes:')
  console.log('- Run: npm install')
  console.log('- Check nuxt.config.ts for errors')
  console.log('- Ensure all dependencies are installed')
  process.exit(1)
}
