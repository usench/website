<template>
  <div class="carousel">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
    <img :src="src" :alt="title">
  </div>
</template>

<script lang="ts">
export default {
  name: 'Carousel'
}
</script>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  img: {
    type: String,
    required: true
  }
});
const src = new URL(props.img, import.meta.url)
</script>

<style lang="scss" scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
}

.carousel {
  @extend .flex-column;

  .content {
    @extend .flex-column;

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #646A73;
    }

    .description {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #646A73;
    }
  }

  img {
    height: 480px;
  }
}
</style>
