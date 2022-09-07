<template>
  <div class="container-wrapper third-page signal">
    <div class="headline">更多功能</div>
    <div class="card-container" id="scroll-card">
      <div class="card-content">
        <div class="card">
          <div class="img">
            <img src="../../assets/【插图】页面元素插图-06.svg" alt="image">
          </div>
          <div style="width: 100%">
            <div class="card-title">应用商店</div>
            <div class="line"></div>
            <div class="card-text">通过 web 界面，轻松管理安装所用的服务器软件，海量应用，你需要的这里都有。</div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="../../assets/【插图】页面元素插图-07.svg" alt="image">
          </div>
          <div style="width: 100%">
            <div class="card-title">数据库</div>
            <div class="line"></div>
            <div class="card-text">创建 mysql、postgresql、redis 等数据库，支持备份</div>
          </div>
        </div>
      </div>
      <div class="card-content">
        <div class="card">
          <div class="img">
            <img src="../../assets/【插图】页面元素插图-08.svg" alt="image">
          </div>
          <div style="width: 100%">
            <div class="card-title">终端管理</div>
            <div class="line"></div>
            <div class="card-text">以 Web 应用程序的方式使用命令行 。</div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img src="../../assets/【插图】页面元素插图-09.svg" alt="image">
          </div>
          <div style="width: 100%">
            <div class="card-title">文件管理</div>
            <div class="line"></div>
            <div class="card-text">支持上传、下载、打包、解压等文件操作 。</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';
import Scrolls from "@/scroll";

export default {
  name: "ThirdPage",
  mounted() {
    const Hiding = "Hiding"
    const Hided = "Hided"
    const Showing = "Showing"
    const Showed = "Showed"
    const Normal = "normal"
    const Reverse = "reverse"
    let ScrollCardStatus = Hided

    const scrollCardAnime = anime({
      targets: '#scroll-card .card',
      translateY: [200, 0],
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

    const scrollCard = function () {
      const scrollCardElement = document.getElementById("scroll-card");
      let rect = scrollCardElement.getBoundingClientRect();
      let {top} = rect;
      let windowHeight = document.documentElement.clientHeight;
      top = top + 160

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
    Scrolls.push(scrollCard)
  }
}
</script>

<style lang="scss" scoped>
.black-container .container-wrapper.third-page {
  min-height: unset;
  padding-bottom: 128px;
}

.headline {
  padding-top: 15vh;
  text-align: center;
  color: #FFF;
  margin-bottom: 128px;
  font-size: 48px;
  font-weight: 800;
  line-height: 56px;
}

.card-container {
  flex-direction: column;
  gap: 48px;
  display: flex;

  .card-content {
    justify-content: space-between;
    gap: 64px;
    display: flex;

    .card {
      flex: 1;
      display: flex;
      position: relative;
      border-radius: 10px;
      padding: 32px 40px;
      overflow: hidden;
      box-shadow: 0 24px 24px #1c1a273d;
      background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));

      .img {
        display: flex;
        align-items: center;
        margin-left: -20px;
        margin-right: 20px;

        img {
          width: 180px;
        }
      }

      & .card-title {
        z-index: 1;
        color: #121821;
        font-size: 36px;
        font-weight: 900;
        line-height: 32px;
        position: relative;
      }

      & .card-text {
        z-index: 1;
        color: #121821;
        margin-top: 8px;
        font-size: 20px;
        line-height: 26px;
        position: relative;
      }
    }

    .card .card-title {
      z-index: 1;
      color: #121821;
      font-size: 36px;
      font-weight: 900;
      line-height: 32px;
      position: relative;
    }

    .card .card-text {
      z-index: 1;
      color: #121821;
      margin-top: 8px;
      font-size: 20px;
      line-height: 26px;
      position: relative;
    }

    .line {
      position: relative;
      border-top: solid 1px #121821;
      width: 100%;
      margin: 20px 0;

      ::before {
        content: "●";
        position: absolute;
        top: -9px;
        left: -7px;
        font-size: 14px;
      }

      ::after {
        content: "●";
        position: absolute;
        top: -9px;
        right: -7px;
        font-size: 14px;
      }
    }

  }
}

.transparent-card {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.14);
  border-top: 1px solid rgb(181 179 179 / 23%);
  border-left: 1px solid rgb(181 179 179 / 23%);
  box-shadow: 2px 2px 1px 0 rgb(0 0 0 / 20%), -10px 10px 20px rgb(255 255 255 / 10%);
  border-radius: 20px;
}
</style>
