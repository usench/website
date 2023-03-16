<template>
  <div class="footer-page">
    <div class="footer-container">
      <div class="navigation">
        <div class="name">
          FIT2CLOUD 飞致云
        </div>
        <div class="links">
          <a href="https://1panel.cn/docs" target="_blank">文档</a>
          <a href="https://github.com/1Panel-dev/1Panel" target="_blank">GitHub</a>
          <a href="https://www.fit2cloud.com/about/index.html" target="_blank">关于我们</a>
        </div>
      </div>
      <div class="core_value">
        我们秉持“软件用起来才有价值，才有改进的机会”的核心价值观，向中国数字化团队交付被广泛验证、可信赖的通用工具软件。
      </div>
      <div class="line"/>
      <div class="license">
        <p class="info">
          <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备14038283号-5</a>
        </p>
        <p>
          <a href="https://www.fit2cloud.com/legal/tos.html" target="_blank">使用条款</a>
          |
          <a href="https://www.fit2cloud.com/legal/privacy-policy.html" target="_blank">隐私政策</a>
          |
          <a href="https://www.fit2cloud.com/legal/licenses.html" target="_blank">社区软件许可协议</a>
        </p>
        <p>
          违法网站请勿向我司工作人员发起任何形式的人工服务请求，严禁使用 1Panel 面板从事任何非法活动
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>

<style lang="scss" scoped>
.footer-page {
  background: #161618;
  padding: 64px 0;
  @media only screen and (max-width: 833px) {
    padding: 32px 0;
  }

  .footer-container {
    max-width: 1128px;
    margin: 0 auto;

    .navigation {
      color: #FFFFFF;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 833px) {
        justify-content: center;
      }


      .name {
        color: #f8f9fc;
        font-size: 20px;
        letter-spacing: 1.5px;
        font-weight: 800;
        @media only screen and (max-width: 833px) {
          text-align: center;
        }
      }

      .links {
        justify-content: space-between;
        align-items: center;
        display: flex;
        gap: 32px;
        @media only screen and (max-width: 833px) {
          display: none;
        }
      }
    }

    .core_value {
      width: 350px;
      color: #adb5bd;
      font-size: 14.4px;
      line-height: 1.5;
      font-weight: 300;
      margin-top: 10px;
      @media only screen and (max-width: 833px) {
        padding: 0 12px;
      }
    }


    .line {
      border-top: 1px solid rgba(243, 229, 200, 0.26);
      margin: 24px 0;
    }

    .license {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      p {
        color: #adb5bd;
        font-weight: 300;
        font-size: 14.4px;
        font-family: "Source Han Sans SC", "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", "Source Han Sans TC", "Noto Sans CJK TC", sans-serif;
        text-align: center;

        padding: 0 12px;
        margin: 0;
      }
    }

    a {
      color: inherit;
      text-decoration: none;
      background-color: transparent;
    }
  }
}

</style>
