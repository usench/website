<template>
  <div class="third-page">
    <div class="third-page-container">
      <div class="title">1Panel 的更多功能</div>
      <div class="content">
        <div class="navigation">
          <navigation title="应用商店" description="海量应用，轻松安装" :active="actives[0]" @click="goTo(0)"/>
          <navigation title="数据库" description="创建管理，数据备份" :active="actives[1]" @click="goTo(1)"/>
          <navigation title="终端管理" description="创建管理，数据备份" :active="actives[2]" @click="goTo(2)"/>
          <navigation title="文件管理" description="常用操作，整理归纳" :active="actives[3]" @click="goTo(3)"/>
        </div>
        <div class="siema">
          <carousel title="全部应用、已安装、可更新"
                    description="这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍！"
                    :img="appStore"/>
          <carousel title="数据库"
                    description="这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍！"
                    :img="appStore"/>
          <carousel title="终端管理"
                    description="这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍！"
                    :img="appStore"/>
          <carousel title="文件管理"
                    description="这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍这是应用商店的一段详细介绍！"
                    :img="appStore"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Navigation from '@/components/carousel/Navigation.vue';
import Carousel from '@/components/carousel/Carousel.vue';

export default {
  name: 'ThirdPage',
  components: {Navigation, Carousel},
}
</script>

<script setup lang="ts">
import appStore from "../assets/app-store.png"
import Siema from 'siema';
import {onBeforeUnmount, onMounted, ref} from "vue";

const actives = ref([true, false, false, false])

let siema: Siema;
let interval = setInterval(() => {
  siema.next()
}, 8000)

const changeState = (index: number) => {
  actives.value.fill(false)
  actives.value[index] = true
}

const goTo = (index: number) => {
  changeState(index)
  siema.goTo(index)
}


onMounted(() => {
  siema = new Siema({
    loop: true,
    onChange() {
      changeState(siema.currentSlide)
    }
  });
})

onBeforeUnmount(() => {
  clearInterval(interval)
  siema.destroy()
})

</script>

<style lang="scss" scoped>
.third-page {
  background: rgba(0, 94, 235, 0.03);

  .third-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 60px;

    max-width: 1128px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

    .title {
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      color: #646A73;
    }

    .content {
      display: flex;
      align-items: flex-start;
      gap: 44px;

      .navigation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        gap: 24px;

        width: 300px;
      }
    }

    .siema {
      flex: 1;
      width: 660px;
    }
  }
}


</style>
