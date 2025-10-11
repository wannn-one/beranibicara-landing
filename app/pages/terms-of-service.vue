<template>
  <div>
    <Navbar />
    <div>
      <div class="bg-white dark:bg-gray-900 px-6 py-16 lg:px-8 min-h-screen transition-colors duration-300">
        <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
            {{ content.termsOfService.title }}
          </h1>
          <p class="mt-6 text-xl leading-8">
            {{ content.termsOfService.description }}
          </p>
          
          <div class="mt-10 max-w-2xl">
            <!-- Dynamic content sections -->
            <div v-for="section in content.termsOfService.sections" :key="section.title">
              <h2 class="text-gray-900 dark:text-white font-bold text-xl mt-8 mb-4 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
                {{ section.title }}
              </h2>
              
              <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                {{ section.description }}
              </p>
              
              <ul v-if="section.items" class="space-y-2 mb-8">
                <li v-for="item in section.items" :key="item" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  {{ item }}
                </li>
              </ul>
              
              <ul v-if="section.contact" class="space-y-2 mb-8">
                <li class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  Email: <a :href="`mailto:${section.contact.email}`" class="text-blue-600 hover:text-blue-700 transition-colors duration-200">{{ section.contact.email }}</a>
                </li>
              </ul>
            </div>
            
            <p class="mt-8 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              {{ content.termsOfService.lastUpdated }}
            </p>

            <!-- Back to Home Button -->
            <div class="mt-12 text-center">
              <NuxtLink 
                to="/"
                class="bg-gradient-to-r from-blue-600 to-[#36A395] hover:from-blue-700 hover:to-[#2d8a7a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                {{ content.termsOfService.backToHome }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import { getLegalContentByLanguage } from '~/data/legal-content.js'

const { currentLanguage, initializeLanguage } = useLanguage()
const content = computed(() => getLegalContentByLanguage(currentLanguage.value))

onMounted(() => {
  initializeLanguage()
})

// Set page meta with dynamic content
useHead(() => ({
  title: `${content.value.termsOfService.title} - Berani Bicara`,
  meta: [
    { name: 'description', content: content.value.termsOfService.description }
  ]
}))
</script>
