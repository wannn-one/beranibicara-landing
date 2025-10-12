// Data konten untuk website Berani Bicara
export const siteContent = {
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
      { name: 'Beranda', href: '#hero', target: 'hero' },
      { name: 'Fitur', href: '#features', target: 'features' },
      { name: 'Cara Kerja', href: '#how-it-works', target: 'how-it-works' },
      { name: 'Testimoni', href: '#testimonials', target: 'testimonials' },
      { name: 'FAQ', href: '#faq', target: 'faq' },
      { name: 'Kontak', href: '#footer', target: 'footer' }
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
    image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
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
        icon: 'pi-instagram' // Menggunakan PrimeIcons Instagram icon yang asli
      }
    ]
  },

  // Theme Configuration
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

export default siteContent
