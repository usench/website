<script setup lang="ts">
import HeaderBanner from "@/components/HeaderBanner.vue";
import BlackContainer from "@/components/BlackContainer/BlackContainer.vue";
import WhiteContainer from "@/components/WhiteContainer/WhiteContainer.vue";
import FooterPage from "@/components/FooterPage.vue";
import ContactPage from "@/components/ContactPage.vue";
</script>

<template>
  <header-banner/>
  <black-container/>
  <white-container/>
  <contact-page/>
  <footer-page/>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
