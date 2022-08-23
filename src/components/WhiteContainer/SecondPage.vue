<template>
  <div class="container-wrapper second-page">
    <div>
      <div class="title">定义你的运维体验</div>
      <div class="description">轻松自定义面板风格，并实时查看渲染效果。</div>
      <div class="content">
        <div class="left">
          <div class="sub-title">
            自定义品牌元素
          </div>
          <div class="sub-description">
            不费吹灰之力便可自定义品牌元素例如 Logo、App 标语、整体视觉呈现，开启或切换深色模式。
          </div>
        </div>
        <div>
          <img src="../../assets/p3.png" alt="image" style="width: 512px;height: 512px;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondPage"
}
</script>

<style lang="scss" scoped>
.second-page {
  padding: 0 64px;
  position: relative;

  .title {
    color: #1c1d20;
    font-size: 40px;
    font-weight: 800;
    line-height: 48px;
    text-align: center;
  }

  .description {
    text-align: center;
    color: #747778;
    margin: 16px auto 0;
    font-size: 18px;
    line-height: 26px;
    -webkit-font-smoothing: antialiased;
  }

  .install-window {
    margin: 64px auto 128px;
    width: 900px;
    height: 512px;
    background: url("../../assets/window.svg") no-repeat center center;
  }

  .content {
    justify-content: space-between;
    gap: 64px;
    display: flex;
    margin: 80px auto 0;

    + .content {
      margin-top: 192px;
    }

    .left {
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: flex-start;
      display: flex;

      .sub-title {
        color: #191c1d;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
      }

      .sub-description {
        color: #747778;
        margin-top: 24px;
        font-size: 18px;
        line-height: 26px;
      }
    }
  }
}
</style>
