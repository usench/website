<template>
  <div class="contact-page">
    <div class="contact-page-container">
      <div class="headline">
        <div class="title">与你携手，实现共赢</div>
        <div class="text">加入社区</div>
        <div class="arrow-down"></div>
      </div>
      <div class="content">
        <div class="card">
          <div class="title">技术交流群</div>
          <img src="../assets/wechat-group.png" alt="技术交流群"/>
        </div>
        <div class="card">
          <div class="title">开源社区</div>
          <a href="https://github.com/1Panel-dev/1Panel">
            <img src="../assets/github.svg" alt="开源社区"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  background: radial-gradient(112.64% 112.64% at 50% 55.2%, rgba(0, 73, 216, 0.1) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 28, 83, 0.0384811) 100%), #242426;

  .contact-page-container {
    max-width: 1128px;
    margin: 0 auto;
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;

    .headline {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: 8px;
      color: #FFFFFF;

      .title {
        font-weight: 600;
        font-size: 32px;
        line-height: 42px;
        @media only screen and (max-width: 833px) {
          font-size: 24px;
          line-height: 36px;
        }
      }

      .text {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        margin-top: 8px;
      }

      .arrow-down {
        width: 32px;
        height: 32px;
        background: url("../assets/arrow-down.png") center;
        background-size: cover;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      padding: 0;
      gap: 140px;

      @media only screen and (max-width: 833px) {
        flex-direction: column;
        gap: 10px;
      }

      .card {
        width: 240px;
        height: 240px;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        .title {
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          color: #FFFFFF;
        }

        img {
          width: 140px;
          height: 140px;
          border-radius: 4px;
        }
      }
    }
  }
}

</style>
