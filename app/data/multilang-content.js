// Multi-language content for Berani Bicara website
export const multiLangContent = {
  id: {
    // Meta dan SEO
    meta: {
      title: 'Berani Bicara - Platform Pelaporan Perundungan yang Aman',
      description: 'Platform pelaporan perundungan yang aman, anonim, dan terhubung langsung dengan pihak sekolah untuk penanganan yang cepat dan tepat.',
      keywords: 'berani bicara, pelaporan perundungan, bullying, sekolah, aman, anonim',
      ogImage: 'https://beranibicara.site/og-image.png',
      url: 'https://beranibicara.site'
    },

    // Hero Section
    hero: {
      title: {
        main: 'Jangan Diam. Saatnya',
        highlight: 'Berani Bicara.'
      },
      description: 'Platform pelaporan perundungan yang aman, anonim, dan terhubung langsung dengan pihak sekolah untuk penanganan yang cepat dan tepat.',
      downloadLinks: [
        {
          name: 'Google Play',
          url: '#',
          image: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
          alt: 'Dapatkan di Google Play'
        },
        {
          name: 'App Store',
          url: '#',
          image: '/LogoKotakBuatDepan.png',
          alt: 'Unduh di App Store'
        }
      ]
    },

    // Navigation
    navigation: {
      brand: 'Berani Bicara',
      logo: '/LogoKotakBuatDepan.png',
      ctaText: 'Download App',
      menuItems: [
        { name: 'Beranda', href: '/', target: 'hero' },
        { name: 'Fitur', href: '/', target: 'features' },
        { name: 'Cara Kerja', href: '/', target: 'how-it-works' },
        { name: 'Testimoni', href: '/', target: 'testimonials' },
        { name: 'FAQ', href: '/', target: 'faq' },
        { name: 'Kontak', href: '/', target: 'footer' }
      ]
    },

    // Features Section
    features: {
      badge: 'Fitur Unggulan',
      title: 'Semua yang Kamu Butuhkan untuk Melawan Perundungan',
      description: 'Aplikasi "Berani Bicara" dirancang dengan fitur-fitur yang memastikan setiap laporan aman, mudah dilacak, dan ditindaklanjuti.',
      items: [
        {
          id: 1,
          title: 'Lapor Tanpa Takut',
          description: 'Laporkan insiden secara anonim atau dengan identitas. Kerahasiaan dan keamanan data pelapor adalah prioritas utama kami.',
          icon: 'pi-shield'
        },
        {
          id: 2,
          title: 'Kawal Laporanmu',
          description: 'Lihat status progres penanganan laporanmu secara transparan. Tidak ada lagi laporan yang hilang tanpa kabar.',
          icon: 'pi-search'
        },
        {
          id: 3,
          title: 'Jadi Lebih Paham, Jadi Lebih Kuat',
          description: 'Dapatkan akses ke artikel, video, dan konten edukatif untuk membekali dirimu dalam menghadapi dan mencegah perundungan.',
          icon: 'pi-book'
        },
        {
          id: 4,
          title: 'Terhubung dengan Pihak Tepat',
          description: 'Laporanmu akan langsung diterima oleh guru atau admin sekolah yang berwenang, memastikan penanganan yang cepat dan efisien.',
          icon: 'pi-users'
        }
      ]
    },

     // How It Works Section
     howItWorks: {
       badge: 'Proses Mudah',
       title: 'Bagaimana Cara Kerjanya?',
       description: 'Kami merancang alur pelaporan yang sederhana dan intuitif. Hanya butuh beberapa langkah untuk membuat suaramu didengar.',
       image: '/demo-app.gif', // GIF demo aplikasi
       imageAlt: 'Demo aplikasi Berani Bicara - cara melaporkan insiden perundungan',
       steps: [
         {
           number: 1,
           title: 'Tulis Laporanmu.',
           description: 'Ceritakan insiden yang kamu alami atau saksikan dengan detail. Kamu bisa melampirkan bukti jika ada. Pilih opsi anonim jika kamu merasa lebih nyaman.'
         },
         {
           number: 2,
           title: 'Laporan Diproses.',
           description: 'Laporan akan diterima secara rahasia dan diverifikasi oleh pihak sekolah (guru atau admin) yang telah ditunjuk dan dipercaya.'
         },
         {
           number: 3,
           title: 'Dapatkan Penanganan.',
           description: 'Pihak sekolah akan menindaklanjuti laporanmu. Kamu bisa melihat progres penanganan langsung dari aplikasi.'
         }
       ]
     },

     // Testimonials Section
     testimonials: {
       badge: 'Testimoni',
       title: 'Apa Kata Mereka yang Telah Bersuara?',
       items: [
         {
           id: 1,
           quote: 'Awalnya aku takut banget mau lapor, tapi lewat aplikasi ini aku bisa cerita tanpa harus nunjukin nama. Rasanya lega banget dan masalahku akhirnya ditangani sekolah. Terima kasih Berani Bicara.',
           author: 'Budi S.',
           role: 'Siswa Kelas 8'
         },
         {
           id: 2,
           quote: 'Sebagai guru, aplikasi ini sangat membantu kami untuk mengetahui masalah yang terjadi di sekolah. Laporannya detail dan kami bisa langsung menindaklanjuti. Sangat efektif!',
           author: 'Ibu Sarah',
           role: 'Guru BK'
         },
         {
           id: 3,
           quote: 'Anak saya jadi lebih berani untuk bercerita tentang masalah di sekolah. Aplikasi ini memberikan rasa aman untuk berbicara. Terima kasih sudah membuat platform yang sangat dibutuhkan ini.',
           author: 'Pak Joko',
           role: 'Orang Tua Siswa'
         }
       ]
     },

     // FAQ Section
     faq: {
       title: 'Pertanyaan yang Sering Diajukan',
       description: 'Punya pertanyaan lain? Hubungi kami melalui email di',
       email: 'dukungan@beranibicara.app',
       items: [
         {
           id: 1,
           question: 'Apakah laporan saya benar-benar anonim?',
           answer: 'Ya, sistem kami dirancang untuk melindungi identitas pelapor. Jika Anda memilih opsi anonim, tidak ada informasi pribadi yang akan tersimpan atau dibagikan kepada pihak manapun.'
         },
         {
           id: 2,
           question: 'Berapa lama waktu yang dibutuhkan untuk menangani laporan?',
           answer: 'Setiap laporan akan ditanggapi dalam waktu maksimal 24 jam. Untuk kasus yang memerlukan investigasi lebih lanjut, proses penanganan bisa memakan waktu 3-7 hari kerja.'
         },
         {
           id: 3,
           question: 'Siapa saja yang bisa mengakses laporan saya?',
           answer: 'Hanya guru BK dan admin sekolah yang telah terverifikasi yang dapat mengakses laporan. Mereka terikat oleh kode etik untuk menjaga kerahasiaan informasi.'
         },
         {
           id: 4,
           question: 'Bagaimana jika saya ingin menarik laporan?',
           answer: 'Anda dapat menghubungi admin melalui fitur chat dalam aplikasi atau email untuk meminta penarikan laporan, selama proses investigasi belum dimulai.'
         },
         {
           id: 5,
           question: 'Apakah aplikasi ini gratis?',
           answer: 'Ya, aplikasi Berani Bicara sepenuhnya gratis untuk digunakan oleh siswa, guru, dan orang tua. Misi kami adalah menciptakan lingkungan sekolah yang aman untuk semua.'
         },
         {
           id: 6,
           question: 'Bagaimana cara mengunduh aplikasinya?',
           answer: 'Aplikasi akan segera tersedia di Google Play Store dan App Store. Saat ini kami sedang dalam tahap final pengembangan dan review.'
         }
       ]
     },

     // Footer Section
     footer: {
       logo: '/LogoKotakBuatDepan.png',
       description: 'Platform pelaporan perundungan yang aman dan anonim untuk menciptakan lingkungan sekolah yang lebih baik.',
       copyright: 'Berani Bicara. Semua Hak Cipta Dilindungi.',
       navigation: {
         main: [
           { name: 'Fitur', href: '#features' },
           { name: 'Testimoni', href: '#testimonials' },
           { name: 'FAQ', href: '#faq' }
         ],
         legal: [
           { name: 'Kebijakan Privasi', href: '/privacy-policy' },
           { name: 'Syarat & Ketentuan', href: '/terms-of-service' }
         ]
       },
       social: [
         {
           name: 'Instagram',
           href: '#',
           icon: 'pi-instagram'
         }
       ]
     }
  },

  en: {
    // Meta and SEO
    meta: {
      title: 'Berani Bicara - Safe Bullying Report Platform',
      description: 'A safe, anonymous bullying report platform directly connected to school authorities for fast and appropriate handling.',
      keywords: 'berani bicara, bullying report, bullying, school, safe, anonymous',
      ogImage: 'https://beranibicara.site/og-image.png',
      url: 'https://beranibicara.site'
    },

    // Hero Section
    hero: {
      title: {
        main: "Don't Stay Silent. It's Time to",
        highlight: 'Speak Up.'
      },
      description: 'A safe, anonymous bullying report platform directly connected to school authorities for fast and appropriate handling.',
      downloadLinks: [
        {
          name: 'Google Play',
          url: '#',
          image: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png',
          alt: 'Get it on Google Play'
        },
        {
          name: 'App Store',
          url: '#',
          image: '/LogoKotakBuatDepan.png',
          alt: 'Download on the App Store'
        }
      ]
    },

    // Navigation
    navigation: {
      brand: 'Berani Bicara',
      logo: '/LogoKotakBuatDepan.png',
      ctaText: 'Download App',
      menuItems: [
        { name: 'Home', href: '/', target: 'hero' },
        { name: 'Features', href: '/', target: 'features' },
        { name: 'How It Works', href: '/', target: 'how-it-works' },
        { name: 'Testimonials', href: '/', target: 'testimonials' },
        { name: 'FAQ', href: '/', target: 'faq' },
        { name: 'Contact', href: '/', target: 'footer' }
      ]
    },

    // Features Section
    features: {
      badge: 'Key Features',
      title: 'Everything You Need to Fight Bullying',
      description: 'The "Berani Bicara" app is designed with features that ensure every report is safe, easily tracked, and followed up.',
      items: [
        {
          id: 1,
          title: 'Report Without Fear',
          description: 'Report incidents anonymously or with identity. The confidentiality and security of reporter data is our top priority.',
          icon: 'pi-shield'
        },
        {
          id: 2,
          title: 'Track Your Report',
          description: 'View the progress status of your report handling transparently. No more reports disappearing without news.',
          icon: 'pi-search'
        },
        {
          id: 3,
          title: 'Learn More, Become Stronger',
          description: 'Get access to articles, videos, and educational content to equip yourself in facing and preventing bullying.',
          icon: 'pi-book'
        },
        {
          id: 4,
          title: 'Connect with the Right People',
          description: 'Your report will be directly received by authorized teachers or school admins, ensuring fast and efficient handling.',
          icon: 'pi-users'
        }
      ]
    },

     // How It Works Section
     howItWorks: {
       badge: 'Simple Process',
       title: 'How Does It Work?',
       description: 'We designed a simple and intuitive reporting flow. Just a few steps to make your voice heard.',
       image: '/demo-app.gif', // GIF demo aplikasi
       imageAlt: 'Berani Bicara app demo - how to report bullying incidents',
       steps: [
         {
           number: 1,
           title: 'Write Your Report.',
           description: 'Tell us about the incident you experienced or witnessed in detail. You can attach evidence if available. Choose anonymous option if you feel more comfortable.'
         },
         {
           number: 2,
           title: 'Report Gets Processed.',
           description: 'The report will be received confidentially and verified by designated and trusted school personnel (teachers or admins).'
         },
         {
           number: 3,
           title: 'Get Proper Handling.',
           description: 'School authorities will follow up on your report. You can see the handling progress directly from the app.'
         }
       ]
     },

     // Testimonials Section
     testimonials: {
       badge: 'Testimonials',
       title: 'What Do Those Who Have Spoken Up Say?',
       items: [
         {
           id: 1,
           quote: 'At first I was really scared to report, but through this app I could tell my story without showing my name. I felt so relieved and my problem was finally handled by the school. Thank you Berani Bicara.',
           author: 'Budi S.',
           role: '8th Grade Student'
         },
         {
           id: 2,
           quote: 'As a teacher, this app really helps us to know the problems that occur at school. The reports are detailed and we can immediately follow up. Very effective!',
           author: 'Mrs. Sarah',
           role: 'Counseling Teacher'
         },
         {
           id: 3,
           quote: 'My child has become braver to talk about problems at school. This app provides a sense of security to speak up. Thank you for creating this much-needed platform.',
           author: 'Mr. Joko',
           role: 'Parent'
         }
       ]
     },

     // FAQ Section
     faq: {
       title: 'Frequently Asked Questions',
       description: 'Have other questions? Contact us via email at',
       email: 'support@beranibicara.app',
       items: [
         {
           id: 1,
           question: 'Is my report really anonymous?',
           answer: 'Yes, our system is designed to protect the identity of reporters. If you choose the anonymous option, no personal information will be stored or shared with any party.'
         },
         {
           id: 2,
           question: 'How long does it take to handle a report?',
           answer: 'Every report will be responded to within a maximum of 24 hours. For cases requiring further investigation, the handling process may take 3-7 working days.'
         },
         {
           id: 3,
           question: 'Who can access my report?',
           answer: 'Only verified counseling teachers and school admins can access reports. They are bound by a code of ethics to maintain the confidentiality of information.'
         },
         {
           id: 4,
           question: 'What if I want to withdraw my report?',
           answer: 'You can contact the admin through the chat feature in the app or email to request report withdrawal, as long as the investigation process has not started.'
         },
         {
           id: 5,
           question: 'Is this app free?',
           answer: 'Yes, the Berani Bicara app is completely free to use by students, teachers, and parents. Our mission is to create a safe school environment for everyone.'
         },
         {
           id: 6,
           question: 'How do I download the app?',
           answer: 'The app will soon be available on Google Play Store and App Store. We are currently in the final stages of development and review.'
         }
       ]
     },

     // Footer Section
     footer: {
       logo: '/LogoKotakBuatDepan.png',
       description: 'A safe and anonymous bullying report platform to create a better school environment.',
       copyright: 'Berani Bicara. All Rights Reserved.',
       navigation: {
         main: [
           { name: 'Features', href: '#features' },
           { name: 'Testimonials', href: '#testimonials' },
           { name: 'FAQ', href: '#faq' }
         ],
         legal: [
           { name: 'Privacy Policy', href: '/privacy-policy' },
           { name: 'Terms of Service', href: '/terms-of-service' }
         ]
       },
       social: [
         {
           name: 'Instagram',
           href: '#',
           icon: 'pi-instagram'
         }
       ]
     }
  },

  // Theme Configuration (same for both languages)
  theme: {
    colors: {
      primary: '#36A395',
      primaryHover: '#2d8a7a',
      secondary: '#3b82f6',
      secondaryHover: '#2563eb'
    },
    gradients: {
      primary: 'from-blue-600 to-[#36A395]',
      primaryHover: 'hover:from-blue-700 hover:to-[#2d8a7a]'
    }
  }
}

// Helper function to get content by language
export const getContentByLanguage = (language = 'id') => {
  return {
    ...multiLangContent[language],
    theme: multiLangContent.theme
  }
}

export default multiLangContent
