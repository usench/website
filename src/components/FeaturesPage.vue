<template>
  <div class="features-page">
    <div id="section-1">
      <div class="title">1Panel可以帮你很多</div>
      <div class="description">高效管理、快速建站、安全可靠、一键备份</div>
    </div>

    <div id="section-2">
      <div class="section-wrapper">
        <div class="content reverse">
          <div class="text-2">快速建站</div>
          <div class="text-3">深度集成 Wordpress 和 Halo，域名绑定、SSL 证书配置等一键搞定</div>
        </div>
        <img class="left" src="../assets/【插图】快速建站.svg" alt="快速建站"/>
      </div>
    </div>

    <div id="section-3">
      <div class="section-wrapper">
        <div class="content">
          <div class="text-2">高效管理</div>
          <div class="text-3" style="max-width: 648px">通过 Web 端轻松管理 Linux 服务器，包括主机监控、文件管理、数据库管理、容器管理及常用应用软件管理
          </div>
        </div>
        <img src="../assets/【插图】高效管理.svg" alt="高效管理"/>
      </div>
    </div>

    <div id="section-4">
      <div class="section-wrapper">
        <div class="content reverse">
          <div class="text-2">安全可靠</div>
          <div class="text-3">最小漏洞暴露面，提供防火墙和安全审计等功能</div>
        </div>
        <img class="left" src="../assets/【插图】安全可靠.svg" alt="安全可靠"/>
      </div>
    </div>

    <div id="section-5">
      <div class="section-wrapper">
        <div class="content">
          <div class="text-2">一键备份</div>
          <div class="text-3">支持一键备份和恢复，备份数据云端存储，永不丢失</div>
        </div>
        <img src="../assets/【插图】一键备份.svg" alt="一键备份"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesPage'
}
</script>

<style lang="scss" scoped>
.features-page {
  --backgroud-color-odd: #FFF;
  --backgroud-color-even: rgba(0, 94, 235, 0.03);

  .section-wrapper {
    max-width: 1128px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    position: relative;
    align-items: center;

    @media only screen and (max-width: 833px) {
      flex-direction: column;
    }

  }

  #section-1, #section-3, #section-5 {
    background-color: var(--backgroud-color-odd);
  }

  #section-2, #section-4 {
    background-color: var(--backgroud-color-even);
  }

  #section-2, #section-3, #section-4, #section-5 {
    height: 480px;
    @media only screen and (max-width: 833px) {
      height: auto;
    }
  }

  #section-1 {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    .title {
      font-weight: 600;
      font-size: 36px;
      line-height: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      color: #646A73;
      @media only screen and (max-width: 833px) {
        font-size: 24px;
        line-height: 36px;
        height: 36px;
      }
    }

    .description {
      font-weight: 400;
      font-size: 20px;
      line-height: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      text-align: center;
      color: #646A73;
      @media only screen and (max-width: 833px) {
        font-size: 16px;
        line-height: 24px;
        height: 24px;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 240px;

    @media only screen and (max-width: 833px) {
      align-items: center;
    }

    &.reverse {
      align-items: flex-end;

      @media only screen and (max-width: 833px) {
        align-items: center;
      }
    }

    .flex-text {
      display: flex;
      align-items: center;
      color: #646A73;
    }

    .text-2 {
      @extend .flex-text;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      @media only screen and (max-width: 833px) {
        text-align: center;
        font-size: 24px;
        line-height: 36px;
      }
    }

    .text-3 {
      @extend .flex-text;
      font-weight: 400;
      font-size: 24px;
      line-height: 48px;

      @media only screen and (max-width: 833px) {
        text-align: center;
        font-size: 16px;
        line-height: 24px;
        padding: 0 10px;
      }
    }
  }

  img {
    width: 480px;
    position: absolute;
    right: 0;
    @media only screen and (max-width: 833px) {
      width: 100%;
      position: relative;
      object-fit: contain;
    }
  }

  img.left {
    left: -80px;
    @media only screen and (max-width: 833px) {
      left: 0;
    }
  }
}
</style>
