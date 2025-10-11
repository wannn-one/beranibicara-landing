// Data untuk loading screen
export const loadingContent = {
  // Loading tasks dengan bobot untuk progress
  tasks: [
    { name: 'Memuat aset...', weight: 20 },
    { name: 'Menginisialisasi komponen...', weight: 30 },
    { name: 'Memuat font...', weight: 25 },
    { name: 'Menyiapkan aplikasi...', weight: 25 }
  ],
  
  // Konfigurasi loading
  config: {
    minDuration: 1500, // Minimum duration untuk UX yang baik
    taskDelay: 100, // Delay antar task
    completionDelay: 300 // Delay setelah completion
  },
  
  // Pesan loading
  messages: {
    initializing: 'Menginisialisasi...',
    loading: 'Memuat...',
    completing: 'Menyelesaikan...',
    ready: 'Siap!'
  }
}

export default loadingContent
