<template>
  <div class="banner">
    <notice/>
    <div class="banner-wrapper">
      <a class="logo" href="/">
        <img src="../assets/logo-blue.png" alt="logo"/>
      </a>
      <div class="split">
      </div>
      <div class="nav">
        <a class="nav-item" href="https://1panel.cn/docs" target="_blank">文档</a>
        <a class="nav-item" href="https://space.bilibili.com/510493147/channel/collectiondetail?sid=1199760"
           target="_blank">教学视频</a>
        <a class="nav-item" href="https://github.com/1Panel-dev/1Panel" target="_blank">GitHub</a>
      </div>
      <a class="demo-btn ripple" href="https://demo.1panel.cn/" target="_blank">
        立即体验
        <img src="../assets/plane-white.png" alt="立即体验">
      </a>
      <div class="dropdown">
        <div class="dropdown-toggle" @click="toggle"><img src="../assets/menu.svg" alt="Menu"></div>
        <div class="dropdown-menu" v-if="active" ref="menu">
          <a class="link" href="https://1panel.cn/docs" target="_blank" @click="close">文档</a>
          <a href="https://space.bilibili.com/510493147/channel/collectiondetail?sid=1199760" target="_blank"
             @click="close">教学视频</a>
          <a class="link" href="https://github.com/1Panel-dev/1Panel" target="_blank" @click="close">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'HeaderBanner',
}
</script>

<script setup lang="ts">
import {onClickOutside} from "@vueuse/core";
import {ref} from "vue";
import Notice from "@/components/Notice.vue";

let active = ref(false)
const toggle = () => {
  active.value = !active.value
}

const close = () => {
  active.value = false
}

const menu = ref(null)
onClickOutside(menu, () => {
  close()
})

</script>

<style lang="scss" scoped>
.banner {
  z-index: 100;
  background: #e5effd;
  border-bottom: 1px solid rgba(0, 94, 235, 0.1);
  position: sticky;
  top: 0;

  .banner-wrapper {
    max-width: 1128px;
    height: 56px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 833px) {
      height: 48px;
    }

    .logo img {
      height: 36px;
      @media only screen and (max-width: 833px) {
        height: 36px;
        padding: 6px;
      }
    }

    .split {
      flex-grow: 1;
    }

    .nav {
      align-items: center;
      display: flex;
      @media only screen and (max-width: 833px) {
        display: none;
      }

      .nav-item {
        position: relative;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1F2329;
        cursor: pointer;
        margin: 8px 0;
        text-decoration: none;
        transition: color .2s ease-in-out;

        @media only screen and (max-width: 833px) {
          display: block;
        }

        &:hover {
          color: #005EEB;

          &:after {
            content: "";
            position: absolute;
            bottom: -10px;
            width: 14px;
            height: 4px;
            background-color: #005EEB;
            border-radius: 7px;
          }
        }
      }

      .nav-item + .nav-item {
        margin-left: 24px;
      }
    }

    .demo-btn {
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 400;
      font-size: 14px;

      background: #005EEB;
      box-shadow: 0 0 4px rgba(0, 94, 235, 0.3);
      border-radius: 4px;
      padding: 6px 16px;
      color: #FFF;
      text-shadow: none;
      text-decoration: none;
      margin-left: 24px;
      @media only screen and (max-width: 833px) {
        font-size: 12px;
        padding: 4px 12px;
        border-radius: 12px;
      }

      img {
        width: 14px;
        margin-left: 5px;
      }

      &:active {
        transform: scale(0.95);
      }
    }

    .dropdown {
      display: none;
      @media only screen and (max-width: 833px) {
        display: block;
      }
    }

    .dropdown-toggle {
      width: 24px;
      height: 24px;
      margin: 0 12px;
    }

    .dropdown-menu {
      background-color: #e5effd;
      border-radius: 4px;
      position: absolute;
      top: 36px;
      right: 0;
      left: 0;
      z-index: 1;

      .link {
        display: block;
        padding: 12px 20px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1F2329;
        text-decoration: none;

        & + .link {
          border-top: 1px solid #1F232910;
        }
      }
    }
  }
}
</style>
