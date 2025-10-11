// Data untuk theme configuration
export const themeContent = {
  // Theme modes
  modes: {
    light: {
      name: 'Light',
      displayName: 'Mode Terang',
      icon: 'sun'
    },
    dark: {
      name: 'Dark', 
      displayName: 'Mode Gelap',
      icon: 'moon'
    },
    system: {
      name: 'System',
      displayName: 'Ikuti Sistem',
      icon: 'computer'
    }
  },
  
  // Color palette
  colors: {
    primary: {
      main: '#36A395',
      hover: '#2d8a7a',
      light: '#4db3a5',
      dark: '#1f6b5f'
    },
    secondary: {
      main: '#3b82f6',
      hover: '#2563eb',
      light: '#60a5fa',
      dark: '#1d4ed8'
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712'
    }
  },
  
  // Gradients
  gradients: {
    primary: 'from-blue-600 to-[#36A395]',
    primaryHover: 'hover:from-blue-700 hover:to-[#2d8a7a]',
    background: {
      light: 'from-gray-50 to-blue-50',
      dark: 'from-gray-900 to-gray-800'
    }
  },
  
  // Transitions
  transitions: {
    colors: 'transition-colors duration-300',
    all: 'transition-all duration-200',
    transform: 'transition-transform duration-200'
  }
}

export default themeContent
