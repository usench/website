<template>
  <div class="sixth-page">
    <div class="sixth-page-container">
      <div class="content">
        <div class="subject">定义你的运维体验</div>
        <div class="title">自定义品牌元素</div>
        <div class="description">快速自定义品牌元素例如: Logo、App 标语、整体视觉呈现，可开启或切换深色模式</div>
      </div>
      <img src="../assets/custom.png" alt="自定义品牌元素">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SixthPage'
}
</script>

<style lang="scss" scoped>
.sixth-page {
  background: linear-gradient(180deg, rgba(144, 75, 255, 0.05) 0%, rgba(145, 78, 255, 0) 100%), radial-gradient(123.54% 204.83% at 25.87% 195.17%, rgba(111, 76, 253, 0.15) 0%, rgba(122, 76, 253, 0) 78.85%), linear-gradient(0deg, rgba(0, 94, 235, 0.03), rgba(0, 94, 235, 0.03)), radial-gradient(122% 122% at 40.35% -49%, rgba(0, 94, 235, 0.3) 0%, rgba(0, 94, 235, 0) 100%);
  backdrop-filter: blur(8px);

  .sixth-page-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1128px;
    height: 420px;
    margin: 0 auto;
    position: relative;

    @media only screen and (max-width: 833px) {
      flex-direction: column;
      justify-content: center;
      height: 620px;
    }

    .content {
      width: 840px;
      height: 240px;
      padding: 0 48px;

      background: #005EEB;
      box-shadow: 2px 4px 22px rgba(0, 94, 235, 0.5);
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 8px;

      @media only screen and (max-width: 833px) {
        width: 90%;
        align-items: center;
      }

      .subject {
        font-weight: 500;
        font-size: 32px;
        line-height: 48px;

        color: #FFFFFF;

        @media only screen and (max-width: 833px) {
          font-size: 24px;
          line-height: 40px;
        }
      }

      .title {
        font-weight: 500;
        font-size: 40px;
        line-height: 48px;

        color: #FFFFFF;
        @media only screen and (max-width: 833px) {
          font-size: 30px;
          line-height: 36px;
        }
      }

      .description {
        font-weight: 300;
        font-size: 16px;
        line-height: 48px;

        color: #FFFFFF;
        @media only screen and (max-width: 833px) {
          text-align: center;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }

    img {
      width: 386px;
      @media only screen and (max-width: 833px) {
        width: 90%;
      }
    }
  }

}
</style>
