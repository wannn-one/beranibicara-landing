<template>
    <div class="bg-white dark:bg-gray-900 py-16 sm:py-24 min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent">
            {{ content.features.badge }}
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            {{ content.features.title }}
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {{ content.features.description }}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            
            <div 
              v-for="feature in content.features.items" 
              :key="feature.id"
              class="relative pl-16"
            >
              <dt class="text-base font-semibold leading-7 text-gray-900 dark:text-white transition-colors duration-300">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-[#36A395]">
                  <i :class="`pi ${feature.icon} text-white text-xl`"></i>
                </div>
                {{ feature.title }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {{ feature.description }}
              </dd>
            </div>
  
          </dl>
        </div>
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