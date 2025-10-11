<template>
    <div class="bg-white dark:bg-gray-900 py-16 sm:py-24 min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <h2 class="text-lg font-semibold leading-8 tracking-tight bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent">
            {{ content.testimonials.badge }}
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl transition-colors duration-300">
            {{ content.testimonials.title }}
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-7xl sm:mt-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div 
              v-for="testimonial in content.testimonials.items" 
              :key="testimonial.id"
              class="flex flex-col h-full"
            >
              <figure class="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 text-sm leading-6 h-full flex flex-col justify-between transition-colors duration-300">
                <blockquote class="text-gray-900 dark:text-gray-100 flex-grow transition-colors duration-300">
                  <p>"{{ testimonial.quote }}"</p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <div class="h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-[#36A395]"></div>
                  <div>
                    <div class="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      {{ testimonial.author }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      {{ testimonial.role }}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
  
          </div>
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