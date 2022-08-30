<template>
  <div class="container-wrapper second-page">
    <div class="headline">1Panel可以帮你很多</div>
    <div class="content">
      <div class="description">
        <div class="text-1">1Panel 可以帮你</div>
        <div class="text-2">简化服务器管理，提高效率</div>
        <div class="split-bar gold-bar"></div>
        <div class="text-3">可视化管理，操作简单，快速建站，一键安装各种应用。</div>
      </div>
      <div>
        <img src="../../assets/p3.png" alt="image"/>
      </div>
    </div>
    <div class="content row-reverse">
      <div class="description">
        <div class="text-1">1Panel 可以帮你</div>
        <div class="text-2">搭建安全可靠的服务器</div>
        <div class="split-bar gold-bar-reverse"></div>
        <div class="text-3">防火墙，安全审计，最小漏洞暴露面、快速修复。</div>
      </div>
      <div>
        <img src="../../assets/p2.png" alt="image"/>
      </div>
    </div>
    <div class="content">
      <div class="description">
        <div class="text-1">1Panel 可以帮你</div>
        <div class="text-2">快速备份还原，稳定可靠</div>
        <div class="split-bar gold-bar"></div>
        <div class="text-3">一键备份，一键恢复，即可防备数据丢失，也可快速复制服务器</div>
      </div>
      <div>
        <img src="../../assets/p4.png" alt="image"/>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "SecondPage"
}
</script>

<style lang="scss" scoped>
.second-page {
  .headline {
    padding-top: 15vh;
    text-align: center;
    color: #FFF;
    margin-bottom: 128px;
    font-size: 48px;
    font-weight: 800;
    line-height: 56px;
  }

  .split-bar {
    width: 100%;
    height: 5px;
    margin-top: 20px;
  }

  img {
    width: 512px;
    height: 512px;
  }
}


.gold-bar {
  background: linear-gradient(45deg, var(--primary-hover-color), var(--black-bg-color) 90%);
}

.gold-bar-reverse {
  background: linear-gradient(45deg, var(--black-bg-color) 10%, var(--primary-hover-color));
}
</style>
