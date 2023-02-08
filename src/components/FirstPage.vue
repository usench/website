<template>
  <div class="first-page">
    <div class="first-container">
      <div class="content">
        <div class="title-mobile">
          <div>1Panel</div>
          <div>现代化、安全和开源的 Linux 服务器运维管理面板</div>
        </div>
        <div class="title">
          <div>1Panel - 现代化、安全和开源的</div>
          <div>Linux 服务器运维管理面板</div>
        </div>
        <div class="description">
          <div>通过 Web 端轻松管理 Linux 服务器，为你提供愉悦的管理服务器体验</div>
          <div>支持LAMP/LNMP、网站和博客、数据库、FTP、SSL 、其他常用软件的一键配置</div>
          <div></div>
        </div>
        <div class="quick-start">
          <div class="quick-start-btn ripple">
            快速开始
            <img src="../assets/plane-blue.png" alt="plane">
          </div>
        </div>
      </div>
      <img class="img" src="../assets/illustration-01.png" alt="image"/>
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

  @media only screen and (max-width: 833px) {
    flex-direction: column;
    justify-content: center;
    gap: 80px;
  }

  .img {
    position: absolute;
    right: -200px;
    height: 600px;

    @media only screen and (max-width: 833px) {
      position: relative;
      right: 0;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
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

    @media only screen and (max-width: 833px) {
      gap: 20px;
      align-items: center;
    }

    .title-mobile {
      display: none;
      @media only screen and (max-width: 833px) {
        height: 140px;
        display: flex;
        flex-direction: column;
        font-size: 24px;
        line-height: 36px;
        align-items: center;
        text-align: center;
        color: #005EEB;
        text-shadow: 2px 2px 4px rgba(6, 0, 45, 0.2);
        padding: 0 10px;
      }
    }

    .title {
      @extend .flex-column-center-start;
      gap: 20px;

      height: 182px;
      font-weight: 500;
      font-size: 48px;
      line-height: 44px;

      color: #005EEB;
      text-shadow: 2px 2px 4px rgba(6, 0, 45, 0.2);

      @media only screen and (max-width: 833px) {
        display: none;
      }
    }

    .description {
      @extend .flex-column-center-start;
      justify-content: center;
      height: 56px;
      min-height: 56px;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      color: #646A73;

      @media only screen and (max-width: 833px) {
        align-items: center;
        font-size: 14px;
        text-align: center;
        padding: 0 10px;
      }
    }
  }

  .quick-start {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    @media only screen and (max-width: 833px) {
      margin-top: 40px;
    }
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
</style>
