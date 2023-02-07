<template>
  <div class="footer-container">
    <div class="content">
      <div class="name">FIT2CLOUD 飞致云</div>
      <div class="line"/>
      <div class="footer">
        <div class="info">
          <div>Designed by FIT2CLOUD Inc.</div>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">浙ICP备14038283号-5</a>
        </div>

        <div class="links">
          <a href="https://1panel.cn/docs" target="_blank" rel="noopener">文档</a>
          <a href="https://github.com/1Panel-dev/1Panel" target="_blank" rel="noopener">GitHub</a>
          <a href="https://blog.fit2cloud.com/" target="_blank" rel="noopener">博客</a>
          <a href="https://www.fit2cloud.com/about/index.html" target="_blank">关于我们</a>
          <a href="mailto:support@fit2cloud.com">联系我们</a>
        </div>
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
.footer-container {
  background: #161618;
  padding: 64px 0;

  .content {
    max-width: 1128px;
    margin: 0 auto;
    color: #FFFFFF;

    .name {
      color: #f8f9fc;
      font-size: 20px;
      letter-spacing: 1.5px;
      font-weight: 800;
      @media only screen and (max-width: 833px) {
        text-align: center;
      }
    }

    img {
      height: 32px;
    }

    .line {
      border-top: 1px solid rgba(243, 229, 200, 0.26);
      margin: 24px 0;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      line-height: 24px;

      @media only screen and (max-width: 833px) {
        flex-direction: column;
        gap: 40px;
      }

      .info {
        align-items: center;
        display: flex;

        a {
          margin-left: 10px;
        }
      }

      .links {
        justify-content: space-between;
        align-items: center;
        display: flex;
        gap: 32px;
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
