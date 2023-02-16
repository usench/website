<template>
  <Transition name="fade">
    <div class="notice" v-show="show">
      <div class="text">
        网站建设中，1Panel 预计在 3 月份正式发布，敬请期待。
      </div>
      <button type="button" class="close" aria-label="Close" @click="close">
        <span aria-hidden="true"> × </span>
      </button>
    </div>
  </Transition>

</template>

<script lang="ts">
export default {
  name: 'Notice'
}
</script>

<script setup lang="ts">
import {ref} from "vue";

const show = ref(true)
const close = () => {
  show.value = false;
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.notice {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--primary-color);
  border-color: var(--primary-color);

  height: 52px;

  position: relative;

  .text {
    font-size: 14px;
    color: #ffffff;
  }

  .close {
    position: absolute;
    right: 10px;

    font-size: 18px;

    background-color: transparent;
    color: #ffffff;

    border: none;
    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }

  }
}
</style>
