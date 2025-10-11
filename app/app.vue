<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from '~/composables/useTheme'

// Initialize theme on app startup
const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>