<script setup lang="ts">
import HeaderBanner from "@/components/HeaderBanner.vue";
import FirstPage from "@/components/FirstPage.vue";
import SecondPage from "@/components/SecondPage.vue";
import ThirdPage from "@/components/ThirdPage.vue";
import ContactPage from "@/components/ContactPage.vue";
import FooterPage from "@/components/FooterPage.vue";
import FourthPage from "@/components/FourthPage.vue";
import FifthPage from "@/components/FifthPage.vue";
import SixthPage from "@/components/SixthPage.vue";
</script>

<template>
  <header-banner/>
  <first-page/>
  <second-page/>
  <third-page/>
  <fourth-page/>
  <fifth-page/>
  <sixth-page/>
  <contact-page/>
  <footer-page/>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
