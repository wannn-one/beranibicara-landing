<template>
    <div class="bg-gray-50 dark:bg-gray-800 overflow-hidden py-16 sm:py-24 min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <h2 class="text-base font-semibold leading-7 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent">
                {{ content.howItWorks.badge }}
              </h2>
              <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
                {{ content.howItWorks.title }}
              </p>
              <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {{ content.howItWorks.description }}
              </p>
              <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none transition-colors duration-300">
                
                <div 
                  v-for="step in content.howItWorks.steps" 
                  :key="step.number"
                  class="relative pl-9"
                >
                  <dt class="inline font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                    <div class="absolute left-1 top-1 h-5 w-5 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent">
                      <span class="font-bold">{{ step.number }}.</span>
                    </div>
                    {{ step.title }}
                  </dt>
                  <dd class="inline ml-1">{{ step.description }}</dd>
                </div>
  
              </dl>
            </div>
          </div>
          
          <img 
            :src="content.howItWorks.image" 
            :alt="content.howItWorks.imageAlt || 'App demo'" 
            class="w-[12rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[12rem] md:w-[14rem] lg:w-[18rem] ml-auto" 
            loading="lazy"
            style="max-width: 100%; height: auto;"
          />
  
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