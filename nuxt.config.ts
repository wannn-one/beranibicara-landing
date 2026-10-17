import tailwindcss from '@tailwindcss/vite'
import { multiLangContent } from './app/data/multilang-content.js'

const siteMeta = multiLangContent.id.meta

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-12',
  devtools: { enabled: true },
  
  // Static Site Generation untuk Netlify
  ssr: false,

  // Performance and Caching Optimizations
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: [
        '/',
        '/privacy-policy', 
        '/terms-of-service',
        '/data-deletion'
      ]
    }
  },

  // App Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#36A395' },
        { name: 'msapplication-TileColor', content: '#36A395' },
        
        // Open Graph / Social Media
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Berani Bicara' },
        { property: 'og:title', content: siteMeta.title },
        { property: 'og:description', content: siteMeta.description },
        { property: 'og:image', content: siteMeta.ogImage },
        { property: 'og:image:secure_url', content: siteMeta.ogImage },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: siteMeta.title },
        { property: 'og:url', content: siteMeta.url },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteMeta.title },
        { name: 'twitter:description', content: siteMeta.description },
        { name: 'twitter:image', content: siteMeta.ogImage },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ]
    },
    // Page transitions
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },

  // CSS Configuration
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],

  // Vite Configuration
  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            tailwind: ['tailwindcss']
          }
        }
      }
    }
  },

  // Experimental Features for better performance
  experimental: {
    payloadExtraction: false,
    viewTransition: true
  },

  // Build optimizations
  build: {
    transpile: []
  }
})
