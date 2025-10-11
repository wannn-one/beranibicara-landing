<template>
  <div 
    v-if="isLoading" 
    class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50"
    style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%);"
  >
    <div class="text-center" style="text-align: center;">
      <!-- Logo dengan animasi -->
      <div class="mb-8" style="margin-bottom: 2rem;">
        <img 
          src="/LogoKotakBuatDepan.png" 
          alt="Berani Bicara" 
          class="h-24 w-24 mx-auto animate-bounce"
          style="height: 6rem; width: 6rem; margin: 0 auto; animation: bounce 1s infinite;"
        >
      </div>
      
      <!-- Brand Name dengan gradient -->
      <h1 class="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent"
          style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem; background: linear-gradient(90deg, #2563eb 0%, #36A395 100%); -webkit-background-clip: text; background-clip: text; color: transparent;">
        Berani Bicara
      </h1>
      
      <!-- Loading Animation -->
      <div class="flex justify-center mb-4" style="display: flex; justify-content: center; margin-bottom: 1rem;">
        <div class="flex space-x-2" style="display: flex; gap: 0.5rem;">
          <div class="w-3 h-3 bg-gradient-to-r from-blue-600 to-[#36A395] rounded-full animate-pulse" 
               style="width: 0.75rem; height: 0.75rem; background: linear-gradient(90deg, #2563eb 0%, #36A395 100%); border-radius: 50%; animation: pulse-delay 1.5s infinite;"></div>
          <div class="w-3 h-3 bg-gradient-to-r from-blue-600 to-[#36A395] rounded-full animate-pulse" 
               style="width: 0.75rem; height: 0.75rem; background: linear-gradient(90deg, #2563eb 0%, #36A395 100%); border-radius: 50%; animation: pulse-delay 1.5s infinite 0.2s;"></div>
          <div class="w-3 h-3 bg-gradient-to-r from-blue-600 to-[#36A395] rounded-full animate-pulse" 
               style="width: 0.75rem; height: 0.75rem; background: linear-gradient(90deg, #2563eb 0%, #36A395 100%); border-radius: 50%; animation: pulse-delay 1.5s infinite 0.4s;"></div>
        </div>
      </div>
      
      <!-- Loading Text -->
      <p class="loading-text text-gray-600 text-lg" style="color: #4b5563; font-size: 1.125rem; margin-bottom: 1rem;">Memuat aplikasi...</p>
      
      <!-- Progress Bar -->
      <div class="mt-6 w-64 mx-auto" style="margin-top: 1.5rem; width: 16rem; margin-left: auto; margin-right: auto;">
        <div class="w-full bg-gray-200 rounded-full h-2" style="width: 100%; background-color: #e5e7eb; border-radius: 9999px; height: 0.5rem;">
          <div 
            class="bg-gradient-to-r from-blue-600 to-[#36A395] h-2 rounded-full transition-all duration-300 ease-out"
            :style="{ width: progress + '%' }"
            style="background: linear-gradient(90deg, #2563eb 0%, #36A395 100%); height: 0.5rem; border-radius: 9999px; transition: all 0.3s ease-out;"
          ></div>
        </div>
        <p class="text-sm text-gray-500 mt-2" style="font-size: 0.875rem; color: #6b7280; margin-top: 0.5rem;">{{ progress }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadingContent } from '~/data/loading.js'

const isLoading = ref(true)
const progress = ref(0)

const emit = defineEmits(['loading-complete'])

onMounted(async () => {
  const startTime = Date.now()
  const minDuration = loadingContent.config.minDuration
  
        // Track loading tasks from data
        const loadingTasks = loadingContent.tasks
  
  let currentProgress = 0
  
  for (const task of loadingTasks) {
    // Update loading text
    const loadingText = document.querySelector('.loading-text')
    if (loadingText) {
      loadingText.textContent = task.name
    }
    
    // Wait for actual resources
    await Promise.all([
      // Wait for images to load
      new Promise(resolve => {
        const img = new Image()
        img.onload = resolve
        img.onerror = resolve // Continue even if image fails
        img.src = '/LogoKotakBuatDepan.png'
      }),
      
      // Wait for fonts to load
      document.fonts ? document.fonts.ready : Promise.resolve(),
      
      // Wait for CSS to be fully loaded
      new Promise(resolve => {
        const checkCSS = () => {
          // Check if Tailwind CSS is loaded by testing a known class
          const testEl = document.createElement('div')
          testEl.className = 'hidden'
          testEl.style.position = 'absolute'
          testEl.style.top = '-9999px'
          document.body.appendChild(testEl)
          
          const isHidden = window.getComputedStyle(testEl).display === 'none'
          document.body.removeChild(testEl)
          
          if (isHidden) {
            resolve()
          } else {
            // CSS not ready yet, check again
            setTimeout(checkCSS, 50)
          }
        }
        
        // Start checking immediately
        checkCSS()
      }),
      
      // Wait for all stylesheets to load
      new Promise(resolve => {
        const stylesheets = Array.from(document.styleSheets)
        const promises = stylesheets.map(sheet => {
          return new Promise(sheetResolve => {
            if (sheet.href) {
              // External stylesheet
              const link = document.querySelector(`link[href="${sheet.href}"]`)
              if (link) {
                if (link.sheet && link.sheet.cssRules) {
                  sheetResolve()
                } else {
                  link.addEventListener('load', sheetResolve, { once: true })
                  link.addEventListener('error', sheetResolve, { once: true })
                }
              } else {
                sheetResolve()
              }
            } else {
              // Inline stylesheet
              sheetResolve()
            }
          })
        })
        
        Promise.all(promises).then(resolve)
      }),
      
      // Wait for DOM to be fully ready
      new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve()
        } else {
          window.addEventListener('load', resolve, { once: true })
        }
      }),
      
      // Minimum time per task for smooth UX
      new Promise(resolve => setTimeout(resolve, 200 + Math.random() * 300))
    ])
    
    // Update progress
    currentProgress += task.weight
    progress.value = Math.min(currentProgress, 100)
    
    // Small delay between tasks
    await new Promise(resolve => setTimeout(resolve, loadingContent.config.taskDelay))
  }
  
  // Ensure minimum duration
  const elapsed = Date.now() - startTime
  const remainingTime = Math.max(0, minDuration - elapsed)
  
  if (remainingTime > 0) {
    await new Promise(resolve => setTimeout(resolve, remainingTime))
  }
  
  // Final completion
  progress.value = 100
  await new Promise(resolve => setTimeout(resolve, loadingContent.config.completionDelay))
  
  isLoading.value = false
  emit('loading-complete')
})
</script>

<style scoped>
/* Critical CSS inline untuk mencegah FOUC */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0,-30px,0);
  }
  70% {
    transform: translate3d(0,-15px,0);
  }
  90% {
    transform: translate3d(0,-4px,0);
  }
}

@keyframes pulse-delay {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Fallback untuk browser yang tidak support CSS variables */
.loading-container {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  z-index: 9999 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: linear-gradient(135deg, #f9fafb 0%, #eff6ff 100%) !important;
}
</style>
