import { ref, readonly } from 'vue'

// Global state untuk loading
const hasInitialLoaded = ref(false)
const isGlobalLoading = ref(true)
const isFirstVisit = ref(false)

export function useGlobalLoading() {
  // Check if this is first visit (client-side only)
  if (process.client) {
    const hasVisited = localStorage.getItem('beranibicara-visited')
    if (!hasVisited) {
      isFirstVisit.value = true
      localStorage.setItem('beranibicara-visited', 'true')
    }
  }

  const setInitialLoadComplete = () => {
    hasInitialLoaded.value = true
    isGlobalLoading.value = false
  }

  const shouldShowLoading = () => {
    // Show loading hanya pada first visit dan belum selesai loading
    return isFirstVisit.value && !hasInitialLoaded.value && isGlobalLoading.value
  }

  return {
    hasInitialLoaded: readonly(hasInitialLoaded),
    isGlobalLoading: readonly(isGlobalLoading),
    isFirstVisit: readonly(isFirstVisit),
    setInitialLoadComplete,
    shouldShowLoading
  }
}
