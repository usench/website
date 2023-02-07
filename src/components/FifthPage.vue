<template>
  <div class="fifth-page">
    <div class="fifth-page-container">
      <div class="header">
        <div class="headline">提高效率，超乎你所想</div>
        <div class="subheading">可视化管理，操作简单，文档详尽</div>
      </div>
      <div class="content" ref="content" id="card-content">
        <div class="card">
          <img src="../assets/rocket.png" alt="伴随你公司的成长"/>
          <div class="title">伴随你公司的成长</div>
          <div class="description">从你的第一个服务器到无数个服务器，1Panel 通通帮你搞定服务器管理问题</div>
        </div>
        <div class="card">
          <img src="../assets/lightning.png" alt="高效运维面板"/>
          <div class="title">高效运维面板</div>
          <div class="description">支持一键 网站/数据库/容器服务/监控/网站/FTP/文件管理等100多项服务器管理功能</div>
        </div>
        <div class="card">
          <img src="../assets/document.png" alt="详尽的教程和文档"/>
          <div class="title">详尽的教程和文档</div>
          <div class="description">提供手把手的和基于使用场景的文档，避免繁琐的概念</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import anime from "animejs";
import Scrolls from "@/scroll";

export default defineComponent({
  name: "FifthPage",
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
.fifth-page {
  background: radial-gradient(64.45% 64.45% at 50% 43.91%, rgba(29, 111, 233, 0.5) 0%, rgba(0, 0, 0, 0) 100%), #181818;

  .fifth-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1128px;
    height: 640px;
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 833px) {
      height: auto;
    }

    .header {
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: 8px;

      .headline {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
        color: #FFFFFF;
        @media only screen and (max-width: 833px) {
          font-size: 24px;
          line-height: 28px;
        }
      }

      .subheading {
        font-weight: 300;
        font-size: 20px;
        line-height: 28px;
        color: #FFFFFF;
        @media only screen and (max-width: 833px) {
          font-size: 16px;
          line-height: 24px;
        }
      }
    }

    .content {
      flex-wrap: wrap;
      gap: 24px;
      margin: 54px auto 0;
      display: flex;
      @media only screen and (max-width: 833px) {
        flex-direction: column;
        align-items: center;
      }

      .card {
        width: 316px;
        height: 300px;
        background: linear-gradient(224.23deg, rgba(36, 124, 255, 0.48) -0.64%, rgba(44, 92, 217, 0.447594) 34.89%, rgba(61, 25, 136, 0.378) 113.05%);
        box-shadow: 6px 8px 15px rgba(5, 69, 165, 0.1), inset 2px 2px 4px rgba(0, 94, 235, 0.05);
        border-radius: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        text-align: center;
        @media only screen and (max-width: 833px) {
          width: 90%;
        }

        img {
          margin-top: 24px;
          width: 120px;
          height: 120px;
        }

        .title {
          color: #FFF;
          margin-top: 20px;
          font-size: 24px;
          line-height: 32px;
        }

        .description {
          margin-top: 12px;
          color: #FFF;
          font-weight: 300;
          font-size: 14px;
          line-height: 22px;
          padding: 0 38px;
          text-align: left;
          @media only screen and (max-width: 833px) {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
