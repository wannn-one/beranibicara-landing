# 🚀 Netlify Deployment Guide - Berani Bicara Landing Page

## 📋 Pre-Deployment Checklist

### ✅ Files yang Sudah Disiapkan:
- [x] `netlify.toml` - Konfigurasi Netlify
- [x] `public/_redirects` - SPA routing rules
- [x] `nuxt.config.ts` - Updated dengan preset Netlify
- [x] Multi-language support (ID/EN)
- [x] Dark mode support
- [x] Responsive design
- [x] SEO optimization

## 🛠️ Langkah-Langkah Deploy

### **Method 1: Git Integration (Recommended)**

1. **Push ke GitHub/GitLab:**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect ke Netlify:**
   - Login ke [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub/GitLab
   - Select repository `beranibicara-landing`

3. **Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.output/public`
   - **Node version:** 18.x (auto-detected dari netlify.toml)

4. **Deploy:**
   - Click "Deploy site"
   - Wait for build to complete (~2-3 minutes)

### **Method 2: Manual Upload**

1. **Build Locally:**
   ```bash
   npm run build
   ```

2. **Upload Folder:**
   - Drag & drop `.output/public` folder ke Netlify dashboard
   - Or zip `.output/public` dan upload

## 🔧 Environment Variables (Optional)

Jika ada environment variables, set di Netlify dashboard:

```
Site Settings → Environment Variables → Add Variable
```

**Contoh variables yang mungkin diperlukan:**
```
NODE_ENV=production
NUXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
```

## 🌐 Custom Domain Setup

### **Netlify Subdomain (Free):**
- Site Settings → Domain Management → Options → Edit site name
- Change dari `random-name-123456` ke `beranibicara`
- URL jadi: `https://beranibicara.netlify.app`

### **Custom Domain (Optional):**
1. Site Settings → Domain Management → Add custom domain
2. Add domain: `beranibicara.app`
3. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

## 🔒 SSL Certificate

- **Automatic:** Netlify provides free SSL via Let's Encrypt
- **Custom:** Upload your own certificate (Pro plan)

## ⚡ Performance Optimizations

### **Already Configured:**
- [x] Gzip compression
- [x] Asset minification  
- [x] Image optimization
- [x] Cache headers
- [x] Security headers

### **Additional Optimizations:**
- **Form handling:** Netlify Forms (if needed)
- **Analytics:** Netlify Analytics (optional)
- **Functions:** Netlify Functions (if needed)

## 📊 Monitoring & Analytics

### **Built-in Monitoring:**
- Deploy logs
- Function logs (if used)
- Bandwidth usage
- Form submissions (if used)

### **Third-party Analytics:**
- Google Analytics (add to nuxt.config.ts)
- Plausible Analytics
- Fathom Analytics

## 🐛 Troubleshooting

### **Common Issues:**

1. **Build Fails:**
   ```bash
   # Check Node version
   node --version  # Should be 18.x
   
   # Clear cache
   rm -rf node_modules .nuxt .output
   npm install
   npm run build
   ```

2. **404 on Refresh:**
   - Check `_redirects` file exists in `public/`
   - Verify `netlify.toml` redirect rules

3. **Assets Not Loading:**
   - Check build output in `.output/public`
   - Verify asset paths are relative

4. **Dark Mode Issues:**
   - Check if theme persistence works
   - Verify localStorage access

## 🚀 Post-Deployment

### **Test Checklist:**
- [ ] Homepage loads correctly
- [ ] All sections scroll properly
- [ ] Language toggle works (ID/EN)
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] Privacy Policy page
- [ ] Terms of Service page
- [ ] All links work
- [ ] GIF demo loads (when added)

### **Performance Check:**
- [ ] Google PageSpeed Insights
- [ ] GTmetrix
- [ ] WebPageTest
- [ ] Lighthouse audit

## 📱 Mobile Testing

Test on different devices:
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop (Chrome, Firefox, Safari)

## 🔄 Continuous Deployment

**Auto-deploy on Git push:**
- Any push to `main` branch triggers new deployment
- Preview deployments for pull requests
- Branch deployments for feature branches

## 💡 Tips & Best Practices

1. **Branch Strategy:**
   - `main` → Production
   - `develop` → Staging
   - `feature/*` → Preview deployments

2. **Performance:**
   - Monitor Core Web Vitals
   - Optimize images before upload
   - Use WebP format for images

3. **SEO:**
   - Submit sitemap to Google Search Console
   - Set up Google Analytics
   - Monitor search performance

4. **Security:**
   - Enable security headers (already configured)
   - Regular dependency updates
   - Monitor for vulnerabilities

---

## 🎉 Ready to Deploy!

Your Berani Bicara landing page is ready for Netlify deployment with:
- ✅ Optimized build configuration
- ✅ SPA routing support
- ✅ Security headers
- ✅ Performance optimizations
- ✅ Multi-language support
- ✅ Dark mode support

**Estimated build time:** 2-3 minutes
**Expected performance:** 90+ Lighthouse score
