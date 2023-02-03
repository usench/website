<template>
  <div class="first-page">
    <div class="first-container">
      <div class="content">
        <div class="title">
          <div>1Panel搞定Linux面板</div>
          <div>让你轻松管理服务器</div>
        </div>
        <div class="description">
          <div>一个现代化Linux面板的开源项目</div>
          <div>在安全、可靠、高效的同时，为你提供愉悦的管理服务器体验</div>
        </div>
        <div class="quick-start">
          <div class="quick-start-btn ripple">
            快速开始
            <img src="../assets/plane-blue.png" alt="plane">
          </div>
        </div>
      </div>
      <img class="img" src="../assets/illustration-01.png" alt="image" style="height: 600px;"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage'
}
</script>

<style lang="scss" scoped>
.first-page {
  background: radial-gradient(153.25% 257.2% at 118.99% 181.67%, rgba(50, 132, 255, 0.2) 0%, rgba(82, 120, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , radial-gradient(123.54% 204.83% at 25.87% 195.17%, rgba(111, 76, 253, 0.15) 0%, rgba(122, 76, 253, 0) 78.85%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , linear-gradient(0deg, rgba(0, 94, 235, 0.03), rgba(0, 94, 235, 0.03)), radial-gradient(109.58% 109.58% at 31.53% -36.58%, rgba(0, 94, 235, 0.3) 0%, rgba(0, 94, 235, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
  , rgba(0, 57, 142, 0.05);
  backdrop-filter: blur(8px);
}

.first-container {
  justify-content: space-between;
  align-items: center;
  display: flex;
  max-width: 1128px;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;

  .img {
    position: absolute;
    right: -200px;
  }

  .flex-column-center-start {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .content {
    @extend .flex-column-center-start;
    height: 350px;
    z-index: 999;

    .title {
      @extend .flex-column-center-start;
      gap: 30px;

      width: 530px;
      height: 182px;
      min-height: 182px;

      font-weight: 500;
      font-size: 48px;
      line-height: 44px;

      color: #005EEB;
      text-shadow: 2px 2px 4px rgba(6, 0, 45, 0.2);
    }

    .description {
      @extend .flex-column-center-start;
      justify-content: space-between;
      height: 56px;
      min-height: 56px;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: #646A73;
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
    border: 1px solid var(--primary-color);
    position: relative;
    box-shadow: 0 0 4px rgba(0, 94, 235, 0.3);
    border-radius: 8px;
    padding: 6px 16px;
    text-decoration: none;

    &:active {
      transform: scale(0.95);
    }

    img {
      width: 16px;
      margin-left: 5px;
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
