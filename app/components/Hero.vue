<template>
    <div class="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-center px-4 py-16 sm:py-24 min-h-screen flex flex-col justify-center transition-colors duration-300">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
        <span class="block">{{ content.hero.title.main }}</span>
        <span class="block bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent">{{ content.hero.title.highlight }}</span>
      </h1>
      <p class="mt-8 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-gray-500 dark:text-gray-300 leading-relaxed transition-colors duration-300">
        {{ content.hero.description }}
      </p>
      <div class="mt-12 flex justify-center space-x-6">
        <a 
          v-for="link in content.hero.downloadLinks" 
          :key="link.name"
          :href="link.url" 
          class="inline-block"
        >
          <img 
            class="h-14 sm:h-16 lg:h-18" 
            :src="link.image" 
            :alt="link.alt"
          >
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
import { computed, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { getContentByLanguage } from '~/data/multilang-content.js'

// Language management
const { currentLanguage, initializeLanguage } = useLanguage()

// Get content based on current language
const content = computed(() => getContentByLanguage(currentLanguage.value))

// Initialize language on mount
onMounted(() => {
  initializeLanguage()
})
  </script>
  
  <style scoped>
  /* CSS khusus untuk komponen ini bisa ditambahkan di sini jika perlu */
  </style>