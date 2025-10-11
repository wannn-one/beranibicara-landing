# 🌟 Berani Bicara - Landing Page

**Landing page** untuk aplikasi Berani Bicara - Platform pelaporan perundungan yang aman, anonim, dan terhubung langsung dengan pihak sekolah untuk penanganan yang cepat dan tepat.

> **📱 Aplikasi Mobile:** Untuk source code aplikasi mobile utama, silakan cek repository [beranibicara-app](https://github.com/wannn-one/beranibicara)

> **ℹ️ Catatan:** Repository ini hanya berisi landing page/website promosi. Aplikasi mobile yang sebenarnya berada di repository terpisah.

## 📖 Tentang Project

Repository ini berisi **landing page/website promosi** untuk aplikasi Berani Bicara. Landing page ini berfungsi untuk:

- 🌐 **Promosi aplikasi** - Memperkenalkan fitur dan manfaat
- 📱 **Download links** - Mengarahkan ke app store
- 📋 **Informasi lengkap** - FAQ, cara kerja, testimoni
- 📄 **Legal pages** - Privacy policy & terms of service
- 🎬 **Demo visual** - Showcase aplikasi dengan GIF

### 🔗 Repository Terkait
- **📱 Mobile App:** [beranibicara-app](https://github.com/wannn-one/beranibicara) - Source code aplikasi mobile utama
- **🌐 Landing Page:** Repository ini - Website promosi dan informasi
<!-- - **📊 Admin Dashboard:** [beranibicara-admin](https://github.com/your-username/beranibicara-admin) - Panel admin sekolah (jika ada) -->

## ✨ Landing Page Features

- 🌍 **Multi-language Support** - Bahasa Indonesia & English
- 🌙 **Dark Mode** - Light, Dark, dan System theme
- 📱 **Responsive Design** - Mobile-first approach
- ⚡ **Performance Optimized** - 90+ Lighthouse score
- 🔒 **Security Headers** - OWASP recommended headers
- 🎬 **GIF Demo Support** - Interactive app demonstrations
- 🚀 **SEO Optimized** - Dynamic meta tags & structured data
- ♿ **Accessibility** - WCAG 2.1 compliant

## 🛠️ Tech Stack

- **Framework:** [Nuxt 4](https://nuxt.com/) - Vue.js framework
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Icons:** [PrimeIcons](https://primevue.org/icons/) - Icon library
- **Deployment:** [Netlify](https://netlify.com/) - Static hosting
- **Language:** TypeScript - Type safety

## 📋 Landing Page Structure

```
beranibicara-landing/          # 🌐 Landing page repository
├── app/
│   ├── components/            # Landing page components
│   │   ├── Navbar.vue        # Navigation with theme/language toggle
│   │   ├── Hero.vue          # Hero section with download links
│   │   ├── Features.vue      # App features showcase
│   │   ├── HowItWorks.vue    # Process explanation with GIF demo
│   │   ├── Testimonials.vue  # User testimonials
│   │   ├── Faq.vue           # Frequently asked questions
│   │   └── Footer.vue        # Footer with contact info
│   ├── composables/          # Vue composables
│   │   ├── useTheme.js       # Theme management (light/dark/system)
│   │   └── useLanguage.js    # Language switching (ID/EN)
│   ├── data/                 # Content and configuration
│   │   ├── multilang-content.js  # Multi-language landing page content
│   │   └── legal-content.js      # Privacy policy & terms content
│   ├── pages/                # Landing page routes
│   │   ├── index.vue         # Main landing page
│   │   ├── privacy-policy.vue    # Privacy policy page
│   │   └── terms-of-service.vue  # Terms of service page
│   └── assets/css/           # Global styles
├── public/                   # Static assets
│   ├── _redirects           # Netlify SPA redirects
│   ├── demo-app.gif         # App demo video (add your GIF here)
│   └── favicon/             # Favicon files
├── netlify.toml             # Netlify deployment configuration
├── NETLIFY_DEPLOYMENT.md    # Deployment guide
└── nuxt.config.ts           # Nuxt configuration for landing page
```

### 🔄 Ecosystem Overview

```
Berani Bicara Ecosystem:

📱 Mobile App (beranibicara-app)
   ├── Flutter/React Native source code
   ├── User authentication & profiles
   ├── Report submission system
   ├── Real-time notifications
   └── Chat with school authorities

🌐 Landing Page (this repository)
   ├── App promotion & information
   ├── Download links to app stores
   ├── Feature demonstrations
   └── Legal pages

📊 Admin Dashboard (beranibicara-admin)
   ├── School admin panel
   ├── Report management
   ├── User management
   └── Analytics & reporting
```

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x or higher
- npm, pnpm, yarn, or bun

### Installation

```bash
# Clone repository
git clone <repository-url>
cd beranibicara-landing

# Install dependencies
npm install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Build for Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Automatic Deployment:**
   ```bash
   git push origin main
   ```
   - Connect repository to Netlify
   - Auto-deploy on every push

2. **Manual Deployment:**
   ```bash
   npm run build
   # Upload .output/public folder to Netlify
   ```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.output/public`
- Node version: 18.x

See [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md) for detailed deployment guide.

## 🎨 Customization

### Adding Content

1. **Multi-language content:** Edit `app/data/multilang-content.js`
2. **Legal pages:** Edit `app/data/legal-content.js`
3. **Theme colors:** Update `nuxt.config.ts` and Tailwind classes

### Adding GIF Demo

1. Add your demo GIF to `public/demo-app.gif`
2. The GIF will automatically appear in "How It Works" section
3. Recommended specs:
   - Resolution: 1200x800px
   - Duration: 10-15 seconds
   - File size: < 3MB

### Theme Customization

```javascript
// In components, use theme-aware classes:
class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

## 🌍 Multi-language Support

### Supported Languages
- 🇮🇩 **Bahasa Indonesia** (default)
- 🇺🇸 **English**

### Adding New Language

1. Add language data to `multilang-content.js`:
   ```javascript
   export const multiLangContent = {
     id: { /* Indonesian content */ },
     en: { /* English content */ },
     es: { /* Spanish content */ } // New language
   }
   ```

2. Update language options in `useLanguage.js`:
   ```javascript
   const languages = {
     id: { name: 'Bahasa Indonesia', flag: '🇮🇩' },
     en: { name: 'English', flag: '🇺🇸' },
     es: { name: 'Español', flag: '🇪🇸' } // New language
   }
   ```

## 🎯 Performance

### Optimization Features
- ✅ Image optimization
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Gzip compression
- ✅ Asset caching
- ✅ Lazy loading

### Expected Metrics
- **Lighthouse Score:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Security

### Implemented Security Headers
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- 📧 Email: ikhwanulabiyu@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/wannn-one/beranibicara-landing/issues)

## 🙏 Acknowledgments

- [Nuxt.js](https://nuxt.com/) - The Vue.js framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PrimeIcons](https://primevue.org/icons/) - Icon library
- [Netlify](https://netlify.com/) - Deployment platform

---

**Made with ❤️ for safer schools and braver voices.**
