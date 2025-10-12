<template>
    <nav class="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <NuxtLink 
                to="/" 
                class="flex items-center hover:opacity-80 transition-opacity duration-200"
                @click="scrollToTop"
              >
                <img class="h-8 w-auto" :src="content.navigation.logo" :alt="content.navigation.brand">
                <span class="ml-2 text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {{ content.navigation.brand }}
                </span>
              </NuxtLink>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                v-for="item in content.navigation.menuItems" 
                :key="item.name"
                :href="item.href" 
                @click="handleMenuClick(item.target, item.href, $event)"
                class="border-transparent text-gray-500 dark:text-gray-300 hover:border-[#36A395] hover:text-[#36A395] dark:hover:text-[#36A395] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
              >
                {{ item.name }}
              </a>
              
              <!-- Legal Dropdown -->
              <div class="inline-flex relative" @mouseleave="handleLegalDropdownLeave">
                <button
                  @mouseenter="handleLegalDropdownEnter"
                  @click="legalDropdownOpen = !legalDropdownOpen"
                  class="border-transparent text-gray-500 dark:text-gray-300 hover:border-[#36A395] hover:text-[#36A395] dark:hover:text-[#36A395] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200"
                >
                  {{ content.navigation.legalMenu.title }}
                  <i class="pi pi-chevron-down ml-1 text-xs transition-transform duration-200" :class="{ 'rotate-180': legalDropdownOpen }"></i>
                </button>
                
                <!-- Dropdown Menu -->
                <div 
                  v-show="legalDropdownOpen"
                  @mouseenter="handleLegalDropdownEnter"
                  class="absolute top-full left-0 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 transition-all duration-200"
                >
                  <NuxtLink 
                    v-for="item in content.navigation.legalMenu.items"
                    :key="item.name"
                    :to="item.href"
                    @click="legalDropdownOpen = false"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#36A395] transition-colors duration-200"
                  >
                    <i :class="`pi ${item.icon} mr-2`"></i>
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          
          <div class="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <!-- Language Toggle Button -->
            <button
              @click="toggleLanguage"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 flex items-center space-x-1"
              :title="`Switch to ${currentLanguage === 'id' ? 'English' : 'Bahasa Indonesia'}`"
            >
              <span class="text-sm">{{ language.flag }}</span>
              <span class="text-xs font-medium">{{ currentLanguage.toUpperCase() }}</span>
            </button>
            
            <!-- Theme Toggle Button -->
            <button
              @click="cycleTheme"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              :title="getThemeDisplayName(theme)"
            >
              <!-- Light Mode Icon -->
              <i v-if="theme === 'light'" class="pi pi-sun text-lg"></i>
              <!-- Dark Mode Icon -->
              <i v-else-if="theme === 'dark'" class="pi pi-moon text-lg"></i>
              <!-- System Mode Icon -->
              <i v-else class="pi pi-desktop text-lg"></i>
            </button>
            
            <NuxtLink 
              to="/"
              class="bg-gradient-to-r from-blue-600 to-[#36A395] hover:from-blue-700 hover:to-[#2d8a7a] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 shadow-lg"
            >
              {{ content.navigation.ctaText }}
            </NuxtLink>
          </div>
          
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Language Toggle Button (Mobile) -->
            <button
              @click="toggleLanguage"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 mr-2 flex items-center space-x-1"
              :title="`Switch to ${currentLanguage === 'id' ? 'English' : 'Bahasa Indonesia'}`"
            >
              <span class="text-sm">{{ language.flag }}</span>
              <span class="text-xs font-medium">{{ currentLanguage.toUpperCase() }}</span>
            </button>
            
            <!-- Theme Toggle Button (Mobile) -->
            <button
              @click="cycleTheme"
              class="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 mr-2"
              :title="getThemeDisplayName(theme)"
            >
              <!-- Light Mode Icon -->
              <i v-if="theme === 'light'" class="pi pi-sun text-lg"></i>
              <!-- Dark Mode Icon -->
              <i v-else-if="theme === 'dark'" class="pi pi-moon text-lg"></i>
              <!-- System Mode Icon -->
              <i v-else class="pi pi-desktop text-lg"></i>
            </button>
            
            <button 
              type="button" 
              class="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#36A395] transition-all duration-200" 
              @click="mobileMenuOpen = !mobileMenuOpen; if (!mobileMenuOpen) mobileLegalDropdownOpen = false"
            >
              <span class="sr-only">{{ mobileMenuOpen ? 'Close menu' : 'Open menu' }}</span>
              <i v-if="!mobileMenuOpen" class="pi pi-bars text-xl"></i>
              <i v-else class="pi pi-times text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div class="sm:hidden" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }">
        <div class="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <a 
            v-for="item in content.navigation.menuItems" 
            :key="item.name"
            :href="item.href" 
            @click="handleMobileMenuClick(item.target, item.href, $event)"
            class="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-[#36A395] hover:text-[#36A395] dark:hover:text-[#36A395] block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-200"
          >
            {{ item.name }}
          </a>
          
          <!-- Mobile Legal Section -->
          <div>
            <button
              @click="mobileLegalDropdownOpen = !mobileLegalDropdownOpen"
              class="w-full text-left border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-[#36A395] hover:text-[#36A395] dark:hover:text-[#36A395] flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-200"
            >
              <span>{{ content.navigation.legalMenu.title }}</span>
              <i class="pi pi-chevron-down text-xs transition-transform duration-200" :class="{ 'rotate-180': mobileLegalDropdownOpen }"></i>
            </button>
            
            <!-- Mobile Legal Dropdown Items -->
            <div v-show="mobileLegalDropdownOpen" class="transition-all duration-200">
              <NuxtLink 
                v-for="item in content.navigation.legalMenu.items"
                :key="item.name"
                :to="item.href"
                @click="mobileMenuOpen = false; mobileLegalDropdownOpen = false"
                class="border-transparent text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-[#36A395] hover:text-[#36A395] dark:hover:text-[#36A395] block pl-6 pr-4 py-2 border-l-4 text-base font-medium transition-all duration-200"
              >
                <i :class="`pi ${item.icon} mr-2`"></i>
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
          <div class="pl-3 pr-4 py-2">
            <NuxtLink 
              to="/" 
              @click="mobileMenuOpen = false"
              class="bg-gradient-to-r from-blue-600 to-[#36A395] hover:from-blue-700 hover:to-[#2d8a7a] text-white px-4 py-2 rounded-md text-sm font-medium inline-block transition-all duration-200 shadow-lg"
            >
              {{ content.navigation.ctaText }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '~/composables/useTheme'
import { useLanguage } from '~/composables/useLanguage'
import { getContentByLanguage } from '~/data/multilang-content.js'

const mobileMenuOpen = ref(false)
const legalDropdownOpen = ref(false)
const mobileLegalDropdownOpen = ref(false)
let legalDropdownTimeout = null

// Theme management
const { theme, cycleTheme, getThemeDisplayName } = useTheme()

// Language management
const { currentLanguage, language, toggleLanguage, initializeLanguage } = useLanguage()

// Get content based on current language
const content = computed(() => getContentByLanguage(currentLanguage.value))

// Legal dropdown handlers with delay
const handleLegalDropdownEnter = () => {
  if (legalDropdownTimeout) {
    clearTimeout(legalDropdownTimeout)
    legalDropdownTimeout = null
  }
  legalDropdownOpen.value = true
}

const handleLegalDropdownLeave = () => {
  legalDropdownTimeout = setTimeout(() => {
    legalDropdownOpen.value = false
  }, 150) // 150ms delay
}

// Initialize language on mount
onMounted(() => {
  initializeLanguage()
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollTo = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleMenuClick = async (target, href, event) => {
  // Prevent default link behavior
  event.preventDefault()
  
  // Cek apakah sedang di halaman home
  if (window.location.pathname === '/') {
    // Jika di home, langsung scroll ke section
    scrollTo(target)
  } else {
    // Jika tidak di home, navigate ke home dulu
    await navigateTo('/')
    // Tunggu sebentar untuk memastikan halaman sudah load
    setTimeout(() => {
      scrollTo(target)
    }, 300)
  }
}

const handleMobileMenuClick = async (target, href, event) => {
  // Prevent default link behavior
  event.preventDefault()
  mobileMenuOpen.value = false
  
  // Cek apakah sedang di halaman home
  if (window.location.pathname === '/') {
    // Jika di home, langsung scroll ke section
    setTimeout(() => scrollTo(target), 100)
  } else {
    // Jika tidak di home, navigate ke home dulu
    await navigateTo('/')
    // Tunggu sebentar untuk memastikan halaman sudah load
    setTimeout(() => {
      scrollTo(target)
    }, 400)
  }
}
</script>