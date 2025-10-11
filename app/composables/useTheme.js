import { ref, readonly, watch, onMounted } from 'vue'

// Global state untuk theme
const isDark = ref(false)
const theme = ref('system') // 'light', 'dark', 'system'

export function useTheme() {
  // Check system preference
  const getSystemTheme = () => {
    if (process.client) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'light'
  }

  // Apply theme to document
  const applyTheme = (themeMode) => {
    if (process.client) {
      const root = document.documentElement
      
      if (themeMode === 'dark') {
        root.classList.add('dark')
        isDark.value = true
      } else {
        root.classList.remove('dark')
        isDark.value = false
      }
    }
  }

  // Set theme
  const setTheme = (newTheme) => {
    theme.value = newTheme
    
    if (process.client) {
      localStorage.setItem('theme', newTheme)
      
      if (newTheme === 'system') {
        const systemTheme = getSystemTheme()
        applyTheme(systemTheme)
      } else {
        applyTheme(newTheme)
      }
    }
  }

  // Toggle between light and dark (skip system)
  const toggleTheme = () => {
    if (theme.value === 'light') {
      setTheme('dark')
    } else if (theme.value === 'dark') {
      setTheme('light')
    } else {
      // If system, toggle to opposite of current system preference
      const systemTheme = getSystemTheme()
      setTheme(systemTheme === 'dark' ? 'light' : 'dark')
    }
  }

  // Initialize theme
  const initTheme = () => {
    if (process.client) {
      // Get saved theme or default to system
      const savedTheme = localStorage.getItem('theme') || 'system'
      theme.value = savedTheme
      
      // Apply theme immediately to prevent hydration mismatch
      if (savedTheme === 'system') {
        const systemTheme = getSystemTheme()
        applyTheme(systemTheme)
        
        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleSystemThemeChange = (e) => {
          if (theme.value === 'system') {
            applyTheme(e.matches ? 'dark' : 'light')
          }
        }
        
        mediaQuery.addEventListener('change', handleSystemThemeChange)
        
        // Cleanup function
        return () => {
          mediaQuery.removeEventListener('change', handleSystemThemeChange)
        }
      } else {
        applyTheme(savedTheme)
      }
    } else {
      // Server-side: set default values to prevent hydration mismatch
      theme.value = 'system'
      isDark.value = false
    }
  }

  // Get theme display name
  const getThemeDisplayName = () => {
    switch (theme.value) {
      case 'light': return 'Terang'
      case 'dark': return 'Gelap'
      case 'system': return 'Sistem'
      default: return 'Sistem'
    }
  }

  // Get next theme in cycle
  const getNextTheme = () => {
    switch (theme.value) {
      case 'light': return 'dark'
      case 'dark': return 'system'
      case 'system': return 'light'
      default: return 'light'
    }
  }

  // Cycle through all themes
  const cycleTheme = () => {
    const nextTheme = getNextTheme()
    setTheme(nextTheme)
  }

  return {
    isDark: readonly(isDark),
    theme: readonly(theme),
    setTheme,
    toggleTheme,
    cycleTheme,
    initTheme,
    getThemeDisplayName,
    getSystemTheme
  }
}
