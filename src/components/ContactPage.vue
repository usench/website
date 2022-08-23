<template>
  <div class="contact-container">
    <div class="contact-page">
      <div class="headline">
        <div class="title">与你携手，实现共赢</div>
        <div class="text">加入社区</div>
      </div>
      <div class="content">
        <div class="card" @click="toggle('1')">
          <div class="title" v-if="titleShow('1')">微信公众号</div>
          <img src="../assets/wechat-official.jpeg" alt="" :class="imgClass('1')"/>
        </div>
        <div class="card" @click="toggle('2')">
          <div class="title" v-if="titleShow('2')">技术交流群</div>
          <img src="../assets/wechat-group.png" alt="" :class="imgClass('2')"/>
        </div>
        <div class="card">
          <div class="title">开源社区</div>
          <img src="../assets/github.svg" alt=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";

interface Card {
  imgClass: string,
  titleShow: boolean
}

export default defineComponent({
  name: "ContactPage",
  setup() {
    const CardMap = ref<Map<string, Card>>(new Map())
    CardMap.value.set("1", {imgClass: "", titleShow: true})
    CardMap.value.set("2", {imgClass: "", titleShow: true})

    const titleShow = computed(() => {
      return (id: string) => {
        let card: Card | undefined = CardMap.value.get(id)
        if (card != undefined) {
          return card.titleShow
        }
      }
    })

    const imgClass = computed(() => {
      return (id: string) => {
        let card: Card | undefined = CardMap.value.get(id)
        if (card != undefined) {
          return card.imgClass
        }
      }
    })

    function toggle(id: string) {
      let card: Card | undefined = CardMap.value.get(id)
      if (card != undefined) {
        card.imgClass = card.imgClass === "big" ? "" : "big"
        card.titleShow = !card.titleShow
      }
    }

    return {
      CardMap,
      imgClass,
      titleShow,
      toggle
    }
  }
})
</script>

<style lang="scss" scoped>
.contact-container {
  background: linear-gradient(180deg, #21202e, #3c3b3b);
}

.contact-page {
  max-width: 1128px;
  margin: 0 auto;
  padding: 128px 0;

  .headline {
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    line-height: 56px;
    position: relative;

    .title {
      color: #f7f8f8;
    }

    .text {
      color: var(--primary-color);
      margin-top: 8px;
    }
  }

  .content {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
    margin: 128px auto 64px;
    display: flex;

    .card {
      color: #f6f6f6;
      width: 256px;
      height: 256px;
      box-shadow: 0 24px 24px rgb(28 26 39 / 24%);
      background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));
      border-radius: 24px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      transition: box-shadow .2s ease-in-out;
      display: flex;
      position: relative;
      cursor: pointer;

      &:hover {
        background: linear-gradient(315deg, var(--primary-color), var(--primary-hover-color));
      }

      &:active {
        transform: scale(0.98);
      }

      .title {
        font-size: 20px;
        top: 40px;
        position: absolute;
      }

      img {
        width: 120px;

        &.big {
          width: 220px;
        }
      }
    }
  }
}
</style>
