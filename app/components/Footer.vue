<template>
    <footer class="bg-gray-900 dark:bg-gray-950 transition-colors duration-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <img class="h-9" :src="content.footer.logo" alt="Berani Bicara App">
            <p class="text-sm leading-6 text-gray-300">
              {{ content.footer.description }}
            </p>
            <div class="flex space-x-6">
              <a 
                v-for="social in content.footer.social" 
                :key="social.name"
                :href="social.href" 
                class="text-gray-500 hover:text-gray-400 transition-colors duration-200"
              >
                <span class="sr-only">{{ social.name }}</span>
                <!-- Dynamic icon berdasarkan social.icon dari content.js -->
                <i :class="`pi ${social.icon} text-xl`"></i>
              </a>
            </div>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Navigasi</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in content.footer.navigation.main" :key="item.name">
                    <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in content.footer.navigation.legal" :key="item.name">
                    <a 
                      :href="item.href" 
                      class="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {{ item.name }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p class="text-xs leading-5 text-gray-400">
            &copy; {{ new Date().getFullYear() }} {{ content.footer.copyright }}
          </p>
        </div>
      </div>
    </footer>
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