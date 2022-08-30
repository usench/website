<template>
  <div class="container-wrapper third-page">
    <div class="headline">提高效率，超乎你所想</div>
    <div class="content" ref="content" id="card-content">
      <div class="card">
        <div class="shadow"></div>
        <img src="../../assets/hj.svg" alt=""/>
        <div class="title">伴随你公司的成长</div>
        <div class="description">从你的第一个服务器到无数个服务器，1Panel 通通帮你搞定服务器管理问题。</div>
      </div>
      <div class="card">
        <div class="shadow"></div>
        <img src="../../assets/dp.svg" alt=""/>
        <div class="title">高效运维面板</div>
        <div class="description">支持一键 网站/数据库/容器服务/监控/网站/FTP/文件管理等100多项服务器管理功能。</div>
      </div>
      <div class="card">
        <div class="shadow"></div>
        <img src="../../assets/wd.svg" alt=""/>
        <div class="title">详尽的教程和文档</div>
        <div class="description">提供手把手的和基于使用场景的文档，避免繁琐的概念。</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import anime from "animejs";
import Scrolls from "@/scroll";

export default defineComponent({
  name: "ThirdPage",
  setup() {
    const content = ref<any>(null)
    const Hiding = "Hiding"
    const Hided = "Hided"
    const Showing = "Showing"
    const Showed = "Showed"
    const Normal = "normal"
    const Reverse = "reverse"
    let ScrollCardStatus = Hided
    let scrollCardAnime: any

    const scrollCard = function () {
      let rect = content.value?.getBoundingClientRect();
      let {top} = rect;
      let windowHeight = document.documentElement.clientHeight;
      top = top + 168

      if (top < windowHeight) {
        if (scrollCardAnime.began) {
          if (scrollCardAnime.direction === Reverse) {
            scrollCardAnime.reverse()
          }
        }
        if (ScrollCardStatus === Hided) {
          if (scrollCardAnime.direction === Reverse) {
            scrollCardAnime.reverse()
          }
          scrollCardAnime.play()
        }
      }

      if (top > windowHeight) {
        if (scrollCardAnime.began) {
          if (scrollCardAnime.direction === Normal) {
            scrollCardAnime.reverse()
          }
        }
        if (ScrollCardStatus === Showed) {
          if (scrollCardAnime.direction === Normal) {
            scrollCardAnime.reverse()
          }
          scrollCardAnime.play()
        }
      }
    }

    onMounted(() => {
      scrollCardAnime = anime({
        targets: '#card-content .card',
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
        direction: 'normal',
        easing: 'easeInOutSine',
        autoplay: false,
        begin: (anim) => {
          ScrollCardStatus = anim.direction === Normal ? Showing : Hiding
        },
        complete: function (anim) {
          ScrollCardStatus = anim.direction === Normal ? Showed : Hided
        }
      });
      Scrolls.push(scrollCard)
    })

    return {
      content
    }
  }
})
</script>

<style lang="scss" scoped>
.third-page {
  padding-top: 128px;

  .headline {
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    line-height: 56px;
  }

  .content {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
    margin: 128px auto 0;
    display: flex;

    .card {
      max-width: 360px;
      min-width: 300px;
      background: #fff;
      border-radius: 40px;
      flex: 1;
      padding: 48px 24px;
      position: relative;
      box-shadow: 5px 5px 48px #00000014;
      text-align: center;

      .shadow {
        width: 64px;
        height: 64px;
        opacity: 0.5;
        filter: blur(20px);
        background: var(--primary-color);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 72px);
      }

      img {
        width: 80px;
        height: 80px;
      }

      .title {
        text-align: center;
        color: #191c1d;
        margin-top: 40px;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
      }

      .description {
        text-align: center;
        color: #747778;
        margin-top: 24px;
        font-size: 18px;
        line-height: 26px;
      }
    }
  }

}
</style>
