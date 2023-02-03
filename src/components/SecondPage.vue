<template>
  <div class="second-page">
    <div id="section-1">
      <div class="title">1Panel可以帮你很多</div>
      <div class="description">高效管理、安全可靠、一键备份、快速建站</div>
    </div>

    <div id="section-2">
      <div class="section-wrapper">
        <div class="content reverse">
          <div class="text-1">1Panel 可以帮你</div>
          <div class="split">-</div>
          <div class="text-2">简化服务器管理，提高效率</div>
          <div class="text-3">可视化管理，操作简单，快速建站，一键安装各种应用</div>
        </div>
        <img class="left" src="../assets/illustration-02.png" alt="image"/>
      </div>
    </div>

    <div id="section-3">
      <div class="section-wrapper">
        <div class="content">
          <div class="text-1">1Panel 可以帮你</div>
          <div class="split">-</div>
          <div class="text-2">搭建安全可靠的服务器</div>
          <div class="text-3">防火墙，安全审计，最小漏洞暴露面、快速修复</div>
        </div>
        <img src="../assets/illustration-03.png" alt="image"/>
      </div>
    </div>

    <div id="section-4">
      <div class="section-wrapper">
        <div class="content reverse">
          <div class="text-1">1Panel 可以帮你</div>
          <div class="split">-</div>
          <div class="text-2">快速备份还原，稳定可靠</div>
          <div class="text-3">一键备份，一键恢复，即可防备数据丢失，也可快速复制服务器</div>
        </div>
        <img class="left" src="../assets/illustration-04.png" alt="image"/>
      </div>
    </div>

    <div id="section-5">
      <div class="section-wrapper">
        <div class="content">
          <div class="text-1">1Panel 可以帮你</div>
          <div class="split">-</div>
          <div class="text-2">快速建站</div>
          <div class="text-3">一键建站</div>
        </div>
        <img src="../assets/illustration-05.png" alt="image"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondPage'
}
</script>

<style lang="scss" scoped>
.second-page {
  --backgroud-color-odd: #FFF;
  --backgroud-color-even: rgba(0, 94, 235, 0.03);

  .section-wrapper {
    max-width: 1128px;
    height: 100%;
    margin: 0 auto;

    display: flex;
    position: relative;
    align-items: center;

  }

  #section-1, #section-3, #section-5 {
    background-color: var(--backgroud-color-odd);
  }

  #section-2, #section-4 {
    background-color: var(--backgroud-color-even);
  }

  #section-2, #section-3, #section-4, #section-5 {
    height: 480px;
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
    }

    .description {
      font-weight: 400;
      font-size: 20px;
      line-height: 48px;
      height: 48px;
      display: flex;
      justify-content: center;
      color: #646A73;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    width: 100%;
    height: 350px;

    &.reverse {
      align-items: flex-end;
    }

    .flex-text {
      display: flex;
      align-items: center;
      text-align: center;
      color: #646A73;
    }

    .text-1 {
      @extend .flex-text;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
    }

    .text-2 {
      @extend .flex-text;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
    }

    .text-3 {
      @extend .flex-text;
      font-weight: 400;
      font-size: 24px;
      line-height: 48px;
    }

    .split {
      @extend .flex-text;
      width: 15px;
      height: 48px;
      font-weight: 600;
      font-size: 24px;
      line-height: 48px;
      color: #005EEB;
    }
  }

  img {
    width: 480px;
    position: absolute;
    right: -80px;
  }

  img.left {
    left: -80px;
  }
}
</style>
