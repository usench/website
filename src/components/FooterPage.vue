<template>
  <footer class="footer">
    <div class="center">
      <p class="bei-an">
        <a href="https://beian.miit.gov.cn/" target="_blank" class="text-reset">浙ICP备XXXXX号</a>
      </p>
      <p class="name">2014-2024 版权所有©杭州飞致云信息科技有限公司</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage"
}
</script>

<style lang="scss" scoped>
.footer {
  background: #202942;
  padding: 60px 0;
  position: relative;
  color: #adb5bd;

  .center {
    text-align: center;
  }

  .bei-an {
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 0;

    a {
      color: inherit;
      text-decoration: none;
      background-color: transparent;
    }
  }

  .name {
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0.25rem;
  }

}
</style>
