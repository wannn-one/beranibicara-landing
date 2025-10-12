<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
    <!-- Header Section -->
    <div class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <div class="flex justify-center mb-4">
            <div class="p-3 bg-red-100 dark:bg-red-900/30 rounded-full">
              <i class="pi pi-trash text-2xl text-red-600 dark:text-red-400"></i>
            </div>
          </div>
          <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {{ content.title }}
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {{ content.description }}
          </p>
          <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
            {{ content.lastUpdated }}
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content Area -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Deletion Methods Section -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i class="pi pi-cog text-blue-600 dark:text-blue-400 mr-3"></i>
              {{ content.sections[0].title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              {{ content.sections[0].description }}
            </p>

            <div class="space-y-8">
              <div v-for="(method, index) in content.sections[0].methods" :key="index" 
                   class="border border-gray-200 dark:border-gray-600 rounded-lg p-6 transition-colors duration-300">
                <div class="flex items-start mb-4">
                  <div class="flex-shrink-0 mr-4">
                    <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span class="text-blue-600 dark:text-blue-400 font-bold">{{ index + 1 }}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {{ method.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                      {{ method.description }}
                    </p>
                  </div>
                </div>

                <ol class="space-y-3 mb-4">
                  <li v-for="(step, stepIndex) in method.steps" :key="stepIndex" 
                      class="flex items-start">
                    <span class="flex-shrink-0 w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-300 mr-3 mt-0.5">
                      {{ stepIndex + 1 }}
                    </span>
                    <span class="text-gray-700 dark:text-gray-300">{{ step }}</span>
                  </li>
                </ol>

                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div class="flex items-start">
                    <i class="pi pi-info-circle text-blue-600 dark:text-blue-400 mr-2 mt-0.5"></i>
                    <p class="text-blue-800 dark:text-blue-200 text-sm">
                      {{ method.note }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Data Types Section -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i class="pi pi-database text-red-600 dark:text-red-400 mr-3"></i>
              {{ content.sections[1].title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              {{ content.sections[1].description }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="(dataType, index) in content.sections[1].dataTypes" :key="index"
                   class="border border-gray-200 dark:border-gray-600 rounded-lg p-6 transition-colors duration-300">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <i class="pi pi-folder text-gray-500 dark:text-gray-400 mr-2"></i>
                  {{ dataType.category }}
                </h3>
                <ul class="space-y-2">
                  <li v-for="(item, itemIndex) in dataType.items" :key="itemIndex"
                      class="flex items-start text-sm text-gray-600 dark:text-gray-300">
                    <i class="pi pi-check text-green-500 mr-2 mt-0.5 text-xs"></i>
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Important Warnings Section -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i class="pi pi-exclamation-triangle text-yellow-600 dark:text-yellow-400 mr-3"></i>
              {{ content.sections[2].title }}
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(warning, index) in content.sections[2].warnings" :key="index"
                   class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 transition-colors duration-300">
                <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center">
                  <i class="pi pi-exclamation-circle mr-2"></i>
                  {{ warning.title }}
                </h3>
                <p class="text-yellow-700 dark:text-yellow-300 text-sm">
                  {{ warning.description }}
                </p>
              </div>
            </div>
          </div>

          <!-- Alternatives Section -->
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i class="pi pi-lightbulb text-green-600 dark:text-green-400 mr-3"></i>
              {{ content.sections[3].title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8">
              {{ content.sections[3].description }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="(alternative, index) in content.sections[3].alternatives" :key="index"
                   class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 transition-colors duration-300">
                <h3 class="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
                  {{ alternative.title }}
                </h3>
                <p class="text-green-700 dark:text-green-300 text-sm">
                  {{ alternative.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-8 space-y-6">
            <!-- Quick Actions -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="pi pi-bolt text-blue-600 dark:text-blue-400 mr-2"></i>
                {{ uiContent.dataDeletion.quickActions }}
              </h3>
              <div class="space-y-3">
                <a :href="`mailto:${content.sections[4].contact.email}?subject=${encodeURIComponent(content.sections[4].contact.subject)}`"
                   class="flex items-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200">
                  <i class="pi pi-envelope mr-2"></i>
                  {{ uiContent.dataDeletion.sendDeletionEmail }}
                </a>
                <NuxtLink to="/"
                         class="flex items-center w-full px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
                  <i class="pi pi-home mr-2"></i>
                  {{ content.backToHome }}
                </NuxtLink>
              </div>
            </div>

            <!-- Contact Information -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="pi pi-phone text-green-600 dark:text-green-400 mr-2"></i>
                {{ content.sections[4].title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {{ content.sections[4].description }}
              </p>
              <div class="space-y-3">
                <div class="flex items-center text-sm">
                  <i class="pi pi-envelope text-gray-400 mr-2"></i>
                  <span class="text-gray-600 dark:text-gray-300">{{ content.sections[4].contact.email }}</span>
                </div>
                <div class="flex items-center text-sm">
                  <i class="pi pi-clock text-gray-400 mr-2"></i>
                  <span class="text-gray-600 dark:text-gray-300">{{ content.sections[4].contact.responseTime }}</span>
                </div>
              </div>
            </div>

            <!-- Legal Links -->
            <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-300">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <i class="pi pi-file-text text-purple-600 dark:text-purple-400 mr-2"></i>
                {{ uiContent.dataDeletion.legalDocuments }}
              </h3>
              <div class="space-y-2">
                <NuxtLink to="/privacy-policy"
                         class="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm transition-colors duration-200">
                  <i class="pi pi-shield mr-2"></i>
                  {{ uiContent.dataDeletion.privacyPolicy }}
                </NuxtLink>
                <NuxtLink to="/terms-of-service"
                         class="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm transition-colors duration-200">
                  <i class="pi pi-file mr-2"></i>
                  {{ uiContent.dataDeletion.termsOfService }}
                </NuxtLink>
              </div>
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
import { getContentByLanguage } from '~/data/multilang-content.js'

// Language management
const { currentLanguage, initializeLanguage } = useLanguage()

// Get content based on current language
const content = computed(() => {
  const legalContent = getLegalContentByLanguage(currentLanguage.value)
  return legalContent.accountDeletion
})

// Get UI content for multi-language support
const uiContent = computed(() => getContentByLanguage(currentLanguage.value))

// SEO Meta - Dynamic based on language
const seoMeta = computed(() => {
  const isIndonesian = currentLanguage.value === 'id'
  return {
    title: isIndonesian ? 'Penghapusan Akun & Data - BeraniBicara' : 'Account & Data Deletion - BeraniBicara',
    description: isIndonesian 
      ? 'Pelajari cara menghapus akun dan data Anda dari aplikasi BeraniBicara. Kami menyediakan panduan lengkap untuk penghapusan akun yang aman dan permanen.'
      : 'Learn how to delete your account and data from the BeraniBicara app. We provide a complete guide for safe and permanent account deletion.',
    keywords: isIndonesian
      ? 'hapus akun, penghapusan data, privasi, BeraniBicara, GDPR, data deletion'
      : 'delete account, data deletion, privacy, BeraniBicara, GDPR, account removal'
  }
})

useHead(() => ({
  title: seoMeta.value.title,
  meta: [
    { name: 'description', content: seoMeta.value.description },
    { name: 'keywords', content: seoMeta.value.keywords },
    { property: 'og:title', content: seoMeta.value.title },
    { property: 'og:description', content: seoMeta.value.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: seoMeta.value.title },
    { name: 'twitter:description', content: seoMeta.value.description }
  ]
}))

// Initialize language on mount
onMounted(() => {
  initializeLanguage()
})
</script>