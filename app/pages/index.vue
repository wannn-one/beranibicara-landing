<template>
  <div>
    <!-- Loading Screen - hanya tampil saat first visit -->
    <LoadingScreen v-if="shouldShowLoading()" @loading-complete="onLoadingComplete" />
    
    <!-- Main Content -->
    <div v-show="!shouldShowLoading()">
      <Navbar />
      <div class=""> <!-- Add padding-top to account for fixed navbar -->
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalLoading } from '~/composables/useGlobalLoading'

// Set page meta
useHead({
  title: 'Berani Bicara - Platform Pelaporan Perundungan yang Aman',
  meta: [
    { name: 'description', content: 'Platform pelaporan perundungan yang aman, anonim, dan terhubung langsung dengan pihak sekolah untuk penanganan yang cepat dan tepat.' },
    { name: 'keywords', content: 'berani bicara, pelaporan perundungan, bullying, sekolah, aman, anonim' }
  ]
})

const { setInitialLoadComplete, shouldShowLoading } = useGlobalLoading()

const onLoadingComplete = () => {
  setInitialLoadComplete()
}
</script>
