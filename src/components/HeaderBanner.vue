<template>
  <div class="banner">
    <div class="banner-wrapper">
      <a class="logo" href="/">
        <img src="../assets/icon.png" alt="logo"/>
      </a>
      <div class="split">
      </div>
      <div class="nav">
        <a class="nav-item" rel="noopener">主页</a>
        <a class="nav-item" rel="noopener">文档</a>
        <a class="nav-item" rel="noopener">GitHub</a>
        <a class="nav-item" rel="noopener">联系我们</a>
        <a class="nav-item gold-btn ripple" rel="noopener">快速开始</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderBanner"
}
</script>

<style lang="scss" scoped>
.banner {
  z-index: 100;
  background: var(--black-bg-color);
  position: sticky;
  top: 0;

  & .banner-wrapper {
    max-width: 1128px;
    padding: 18px var(--padding-max-width);
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    display: flex;

    & .logo img {
      height: 36px;
    }

    & .split {
      flex-grow: 1;
    }

    & .nav {
      align-items: center;
      display: flex;

      & .nav-item {
        cursor: pointer;
        color: #d8d8d8;
        text-shadow: 0 4px 4px #00000040;
        margin: 8px 24px;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;
        transition: color .2s ease-in-out;

        &:hover {
          color: #ffffff;
        }
      }

      & .nav-item.gold-btn {
        border-radius: 4px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-hover-color));
        padding: 8px 12px;
        color: #242834;
        text-shadow: none;

        &:hover {
          color: #242834DD;
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>
