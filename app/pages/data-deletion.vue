<template>
  <div>
    <Navbar />
    <div>
      <div class="bg-white dark:bg-gray-900 px-6 py-16 lg:px-8 min-h-screen transition-colors duration-300">
        <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
            {{ content.title }}
          </h1>
          <p class="mt-6 text-xl leading-8">
            {{ content.description }}
          </p>
          
          <div class="mt-10 max-w-2xl">
            <!-- Dynamic content sections -->
            <div v-for="section in content.sections" :key="section.title">
              <h2 class="text-gray-900 dark:text-white font-bold text-xl mt-8 mb-4 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
                {{ section.title }}
              </h2>
              
              <!-- Section with methods (for deletion methods) -->
              <div v-if="section.methods">
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
                <div v-for="(method, index) in section.methods" :key="index" class="mb-8">
                  <h3 class="text-gray-800 dark:text-gray-200 font-semibold text-lg mt-6 mb-3 transition-colors duration-300">
                    {{ method.title }}
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                    {{ method.description }}
                  </p>
                  <ol class="space-y-2 mb-4">
                    <li v-for="step in method.steps" :key="step" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {{ step }}
                    </li>
                  </ol>
                  <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                    <strong>Catatan:</strong> {{ method.note }}
                  </p>
                </div>
              </div>
              
              <!-- Section with dataTypes (for data deletion info) -->
              <div v-else-if="section.dataTypes">
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
                <div v-for="dataType in section.dataTypes" :key="dataType.category" class="mb-6">
                  <h3 class="text-gray-800 dark:text-gray-200 font-semibold text-lg mt-6 mb-3 transition-colors duration-300">
                    {{ dataType.category }}
                  </h3>
                  <ul class="space-y-2 mb-6">
                    <li v-for="item in dataType.items" :key="item" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Section with warnings -->
              <div v-else-if="section.warnings">
                <div v-for="warning in section.warnings" :key="warning.title" class="mb-6">
                  <h3 class="text-gray-800 dark:text-gray-200 font-semibold text-lg mt-6 mb-3 transition-colors duration-300">
                    {{ warning.title }}
                  </h3>
                  <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                    {{ warning.description }}
                  </p>
                </div>
              </div>
              
              <!-- Section with alternatives -->
              <div v-else-if="section.alternatives">
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
                <ul class="space-y-2 mb-8">
                  <li v-for="alternative in section.alternatives" :key="alternative.title" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <span class="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{{ alternative.title }}</span>: {{ alternative.description }}
                  </li>
                </ul>
              </div>
              
              <!-- Section with contact info -->
              <div v-else-if="section.contact">
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
                <ul class="space-y-2 mb-8">
                  <li class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Email: <a :href="`mailto:${section.contact.email}?subject=${encodeURIComponent(section.contact.subject)}`" class="text-blue-600 hover:text-blue-700 transition-colors duration-200">{{ section.contact.email }}</a>
                  </li>
                  <li class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Response Time: {{ section.contact.responseTime }}
                  </li>
                </ul>
              </div>
              
              <!-- Default section with description -->
              <div v-else>
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
              </div>
            </div>
            
            <p class="mt-8 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              {{ content.lastUpdated }}
            </p>

            <!-- Back to Home Button -->
            <div class="mt-12 text-center">
              <NuxtLink 
                to="/"
                class="bg-gradient-to-r from-blue-600 to-[#36A395] hover:from-blue-700 hover:to-[#2d8a7a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                {{ content.backToHome }}
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

// Get content based on current language
const content = computed(() => {
  const legalContent = getLegalContentByLanguage(currentLanguage.value)
  return legalContent.accountDeletion
})

onMounted(() => {
  initializeLanguage()
})

// Set page meta with dynamic content
useHead(() => ({
  title: `${content.value.title} - Berani Bicara`,
  meta: [
    { name: 'description', content: content.value.description }
  ]
}))
</script>