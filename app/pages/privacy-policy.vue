<template>
  <div>
    <Navbar />
    <div>
      <div class="bg-white dark:bg-gray-900 px-6 py-16 lg:px-8 min-h-screen transition-colors duration-300">
        <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
            {{ content.privacyPolicy.title }}
          </h1>
          <p class="mt-6 text-xl leading-8">
            {{ content.privacyPolicy.description }}
          </p>
          
          <div class="mt-10 max-w-2xl">
            <!-- Dynamic content sections -->
            <div v-for="section in content.privacyPolicy.sections" :key="section.title">
              <h2 class="text-gray-900 dark:text-white font-bold text-xl mt-8 mb-4 bg-gradient-to-r from-blue-600 to-[#36A395] bg-clip-text transition-colors duration-300">
                {{ section.title }}
              </h2>
              
              <!-- Section with subsections -->
              <div v-if="section.subsections">
                <div v-for="subsection in section.subsections" :key="subsection.title" class="mb-6">
                  <h3 class="text-gray-800 dark:text-gray-200 font-semibold text-lg mt-6 mb-3 transition-colors duration-300">
                    {{ subsection.title }}
                  </h3>
                  <ul class="space-y-2 mb-6">
                    <li v-for="item in subsection.items" :key="item" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Section with description and items -->
              <div v-else-if="section.description">
                <p class="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  {{ section.description }}
                </p>
                <ul v-if="section.items" class="space-y-2 mb-8">
                  <li v-for="item in section.items" :key="typeof item === 'string' ? item : item.service" class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    <span v-if="typeof item === 'string'">{{ item }}</span>
                    <span v-else>
                      <span class="text-gray-900 dark:text-white font-semibold transition-colors duration-300">{{ item.service }}</span>: {{ item.purpose }}
                    </span>
                  </li>
                </ul>
                <p v-if="section.note" class="text-gray-700 dark:text-gray-300 mb-8 transition-colors duration-300">
                  {{ section.note }}
                </p>
                <ul v-if="section.contact" class="space-y-2 mb-8">
                  <li class="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                    Email: <a :href="`mailto:${section.contact.email}`" class="text-blue-600 hover:text-blue-700 transition-colors duration-200">{{ section.contact.email }}</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <p class="mt-8 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              {{ content.privacyPolicy.lastUpdated }}
            </p>

            <!-- Back to Home Button -->
            <div class="mt-12 text-center">
              <NuxtLink 
                to="/"
                class="bg-gradient-to-r from-blue-600 to-[#36A395] hover:from-blue-700 hover:to-[#2d8a7a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                {{ content.privacyPolicy.backToHome }}
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
  title: `${content.value.privacyPolicy.title} - Berani Bicara`,
  meta: [
    { name: 'description', content: content.value.privacyPolicy.description }
  ]
}))
</script>

