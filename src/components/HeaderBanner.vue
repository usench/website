<template>
  <div class="banner">
    <div class="banner-wrapper">
      <a class="logo" href="/">
        <img src="../assets/logo-blue.png" alt="logo"/>
      </a>
      <div class="split">
      </div>
      <div class="nav">
        <a href="/" class="nav-item" rel="noopener">主页</a>
        <a class="nav-item" href="https://1panel.cn/docs" target="_blank" rel="noopener">文档</a>
        <a class="nav-item" href="https://github.com/1Panel-dev/1Panel" target="_blank" rel="noopener">GitHub</a>
        <a class="nav-item" href="https://www.fit2cloud.com/about/index.html" target="_blank"
           rel="noopener">联系我们</a>
        <a class="nav-item gold-btn ripple" rel="noopener">
          快速开始
          <img src="../assets/plane-white.png" alt="plane">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner'
}
</script>

<style lang="scss" scoped>
.banner {
  z-index: 100;
  background: #e5effd;
  border-bottom: 1px solid rgba(0, 94, 235, 0.1);
  position: sticky;
  top: 0;

  & .banner-wrapper {
    max-width: 1128px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo img {
      height: 36px;
    }

    & .split {
      flex-grow: 1;
    }

    & .nav {
      align-items: center;
      display: flex;

      @media only screen and (max-width: 833px) {
        display: none;
      }

      & .nav-item {
        position: relative;
        font-style: normal;
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

      & .nav-item.gold-btn {
        background: #005EEB;
        box-shadow: 0 0 4px rgba(0, 94, 235, 0.3);
        border-radius: 4px;
        padding: 6px 16px;
        color: #FFF;
        text-shadow: none;
        line-height: 20px;

        img {
          width: 14px;
          margin-left: 5px;
        }

        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>
