<script setup lang="ts">
import HeaderBanner from "@/components/HeaderBanner.vue";
import HomePage from "@/components/HomePage.vue";
import FeaturesPage from "@/components/FeaturesPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import DownloadPage from "@/components/DownloadPage.vue";
</script>

<template>
  <header-banner/>
  <home-page/>
  <features-page/>
  <download-page/>
  <contact-page/>
  <footer-page/>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
