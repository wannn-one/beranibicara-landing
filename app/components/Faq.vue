<template>
    <div class="bg-gray-50 dark:bg-gray-800 min-h-screen flex flex-col justify-center transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div class="mx-auto max-w-4xl">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white text-center transition-colors duration-300">
            {{ content.faq.title }}
          </h2>
          <p class="mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300 text-center mx-auto transition-colors duration-300">
            {{ content.faq.description }} 
            <a 
              :href="`mailto:${content.faq.email}`" 
              class="font-semibold bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text text-transparent hover:from-blue-700 hover:to-[#2d8a7a]"
            >
              {{ content.faq.email }}
            </a>
          </p>
          
          <div class="mt-16 space-y-4">
            
            <div 
              v-for="faqItem in content.faq.items" 
              :key="faqItem.id"
              class="border border-gray-200 dark:border-gray-700 rounded-lg transition-colors duration-300"
            >
              <button 
                class="flex w-full items-start justify-between text-left p-6" 
                @click="toggleFaq(faqItem.id)"
              >
                <span class="text-base font-semibold leading-7 text-gray-900 dark:text-white transition-colors duration-300">
                  {{ faqItem.question }}
                </span>
                <span class="ml-6 flex h-7 items-center">
                  <svg 
                    :class="{ 'rotate-45': openFaq === faqItem.id }" 
                    class="h-6 w-6 transform transition-transform duration-200 text-gray-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </button>
              <div v-show="openFaq === faqItem.id" class="px-6 pb-6">
                <p class="text-base leading-7 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {{ faqItem.answer }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue'
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
const openFaq = ref(null)

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id
}
</script>