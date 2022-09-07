<template>
  <div class="container-wrapper first-page circuit-board">
    <div class="content">
      <div class="description">
        <div data-text="1Panel搞定Linux面板，" class="title">1Panel搞定Linux面板，</div>
        <div data-text="让你轻松管理服务器" class="title">让你轻松管理服务器</div>
        <div class="text-3">一个现代化Linux面板的开源项目，</div>
        <div class="text-3">在安全、可靠、高效的同时，为你提供愉悦的管理服务器体验。</div>
        <div class="quick-start">
          <div class="quick-start-btn ripple">快速开始</div>
        </div>
      </div>
      <div>
        <img src="../../assets/【插图】页面元素插图-01.svg" alt="image" style="width: 512px;height: 512px;"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstPage"
}
</script>

<style lang="scss" scoped>
.first-page {
  justify-content: space-between;
  align-items: center;
  display: flex;

  & .title {
    position: relative;
    font-size: 48px;
    word-spacing: 0.2em;
    display: inline-block;
    line-height: 1;
    color: transparent;
    background-color: var(--primary-color);
    -webkit-background-clip: text;

    & + .title {
      margin-top: 10px;
    }

    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(135deg, transparent 0%, transparent 5rem, #FFF 10rem, transparent 11.15rem);
      -webkit-background-clip: text;
      background-size: 150% 100%;
      background-repeat: no-repeat;
      animation: shine 5s infinite linear;
    }
  }

  .quick-start {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }

  .quick-start-btn {
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: var(--primary-color);
    position: relative;
    border-radius: 4px;
    padding: 15px 36px;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    border: 1px solid #F3E5C8;

    &:hover {
      color: var(--primary-hover-color);
    }

    &:active {
      transform: scale(0.95);
      color: var(--primary-hover-color);
    }
  }
}

@keyframes shine {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -150% 0;
  }
}
</style>
