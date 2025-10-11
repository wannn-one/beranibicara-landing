import { ref, computed } from 'vue'

// Available languages
const LANGUAGES = {
  id: {
    code: 'id',
    name: 'Bahasa Indonesia',
    flag: '🇮🇩'
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸'
  }
}

// Reactive language state
const currentLanguage = ref('id') // Default to Indonesian

export const useLanguage = () => {
  // Get current language info
  const language = computed(() => LANGUAGES[currentLanguage.value])
  
  // Get available languages
  const availableLanguages = computed(() => Object.values(LANGUAGES))
  
  // Toggle between languages
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'id' ? 'en' : 'id'
    
    // Save to localStorage
    if (process.client) {
      localStorage.setItem('beranibicara-language', currentLanguage.value)
    }
  }
  
  // Set specific language
  const setLanguage = (langCode) => {
    if (LANGUAGES[langCode]) {
      currentLanguage.value = langCode
      
      // Save to localStorage
      if (process.client) {
        localStorage.setItem('beranibicara-language', langCode)
      }
    }
  }
  
  // Initialize language from localStorage
  const initializeLanguage = () => {
    if (process.client) {
      const savedLanguage = localStorage.getItem('beranibicara-language')
      if (savedLanguage && LANGUAGES[savedLanguage]) {
        currentLanguage.value = savedLanguage
      }
    }
  }
  
  // Get display name for current language
  const getLanguageDisplayName = (lang) => {
    return LANGUAGES[lang]?.name || 'Unknown'
  }
  
  return {
    currentLanguage: computed(() => currentLanguage.value),
    language,
    availableLanguages,
    toggleLanguage,
    setLanguage,
    initializeLanguage,
    getLanguageDisplayName,
    LANGUAGES
  }
}
