<template>
  <div class="white-container">
    <first-page/>
    <second-page/>
    <third-page/>
  </div>
</template>

<script>
import FirstPage from "./FirstPage.vue";
import SecondPage from "./SecondPage.vue";
import ThirdPage from "./ThirdPage.vue";

export default {
  name: "WhiteContainer",
  components: {ThirdPage, SecondPage, FirstPage}
}
</script>

<style lang="scss">
.white-container {
  background-color: var(--white-bg-color);
  padding: 128px 0 64px;

  .container-wrapper {
    max-width: 1128px;
    margin: 0 auto;
    position: relative;
  }
}
</style>
