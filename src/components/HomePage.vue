<template>
  <div class="home-page">
    <div class="home-page-container">
      <div class="title">现代化、开源的 Linux 服务器运维管理面板</div>
      <div class="title-mobile">
        <div>现代化、开源的</div>
        <div> Linux 服务器运维管理面板</div>
      </div>
      <div class="buttons">
        <a class="quick-start-btn ripple" href="https://demo.1panel.cn/" target="_blank" rel="noopener">
          <div>立即体验</div>
          <img src="../assets/plane-white.png" alt="plane">
        </a>
        <a class="github-btn ripple" href="https://github.com/1Panel-dev/1Panel" target="_blank" rel="noopener">
          <div>GitHub</div>
          <img src="../assets/github-logo.svg" alt="plane">
        </a>
      </div>
      <div>
        <img id="image" src="../assets/overview.png" alt="1Panel"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomePage'
}
</script>

<script lang="ts" setup>
import Viewer from 'viewerjs'
import {onMounted, onUnmounted} from "vue";

let viewer: Viewer;

onMounted(() => {
  let image = document.getElementById('image') as HTMLImageElement;
  viewer = new Viewer(image, {
    navbar: false,
    toolbar: false
  });
});

onUnmounted(() => {
  viewer.destroy();
});
</script>

<style lang="scss" scoped>
.home-page {
  background: radial-gradient(153.25% 257.2% at 118.99% 181.67%, rgba(50, 132, 255, 0.2) 0%, rgba(82, 120, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , radial-gradient(123.54% 204.83% at 25.87% 195.17%, rgba(111, 76, 253, 0.15) 0%, rgba(122, 76, 253, 0) 78.85%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , linear-gradient(0deg, rgba(0, 94, 235, 0.03), rgba(0, 94, 235, 0.03)), radial-gradient(109.58% 109.58% at 31.53% -36.58%, rgba(0, 94, 235, 0.3) 0%, rgba(0, 94, 235, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , rgba(0, 57, 142, 0.05);
  backdrop-filter: blur(8px);

  .flex-column-center-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .home-page-container {
    @extend .flex-column-center-center;
    gap: 40px;

    max-width: 1128px;
    min-height: 100vh;
    margin: 0 auto;

    .title {
      font-size: 56px;
      font-weight: 500;
      line-height: 56px;

      color: var(--primary-color);
      text-shadow: 2px 2px 4px rgba(6, 0, 45, 0.2);

      div {
        text-align: center;
        padding: 8px;
      }

      @media only screen and (max-width: 833px) {
        display: none;
      }
    }

    .title-mobile {
      display: none;
      color: var(--primary-color);
      text-shadow: 2px 2px 4px rgba(6, 0, 45, 0.2);
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      @media only screen and (max-width: 833px) {
        display: block;
      }
    }

    .buttons {
      @extend .flex-column-center-center;
      flex-direction: row;
      gap: 40px;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        user-select: none;
        cursor: pointer;

        width: 160px;
        height: 64px;
        border-radius: 12px;

        font-size: 20px;
        font-weight: 500;
        line-height: 20px;

        -webkit-user-drag: none;

        @media only screen and (max-width: 833px) {
          width: 140px;
          height: 48px;
          font-size: 16px;
          line-height: 16px;
        }

        &:active {
          transform: scale(0.95);
        }

        text-decoration: none;
      }

      .quick-start-btn {
        @extend .btn;

        color: #FFF;
        background: var(--primary-color);
        border: 1px solid var(--primary-color);
        box-shadow: 0 0 4px var(--primary-color);

        img {
          width: 22px;
          @media only screen and (max-width: 833px) {
            display: none;
          }
        }
      }

      .github-btn {
        @extend .btn;

        color: #FFF;
        background-color: #24292f;
        border: 1px solid #5f5d67;
        box-shadow: 0 0 4px #5f5d67;

        img {
          width: 24px;
          @media only screen and (max-width: 833px) {
            display: none;
          }
        }
      }
    }

    img {
      width: 100%;
      max-width: 1128px;
      cursor: pointer;
    }
  }
}

</style>
