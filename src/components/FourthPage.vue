<template>
  <div class="fourth-page">
    <div class="fourth-page-container">
      <div class="title">下载并使用</div>
      <div class="description">只需一行脚本代码，即可快速安装使用</div>
      <div class="install-window">
        <div id="type-code"></div>
        <div id="typed-strings">
          <div class="type-style">
            <p>
              <span style="color: #f3e5c8">curl </span>
              <span style="color: #e06c75"> -sSL</span>
              <span> https://github.com/KubeOperator/KubeOperator/releases/latest/download/quick-start.sh | sh</span>
            </p>
            <p>Installing.^200.^300.^400 Completed!</p>
            <p style="color: #98c379">server is running at http://localhost:8080</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted,} from 'vue'
import Typed from "typed.js";
import Scrolls from "@/scroll";

export default defineComponent({
  name: "FourthPage",
  setup() {
    onMounted(() => {
      let typing = true

      let options = {
        stringsElement: "#typed-strings",
        typeSpeed: 10,
        showCursor: false,
        onComplete: () => {
          typing = false
        }
      };

      let typed = new Typed('#type-code', options)

      const scrollCode = function () {
        const scrollCardElement: any = document.getElementById("type-code");
        let rect = scrollCardElement.getBoundingClientRect();
        let {top} = rect;
        let windowHeight = document.documentElement.clientHeight;
        const TopPadding = 128
        const TextHeight = 112

        if (top > windowHeight - TopPadding - TextHeight && top < windowHeight - TopPadding && !typing) {
          typing = true
          typed.reset(true)
        }
      }

      Scrolls.push(scrollCode)
    })
  }
})
</script>

<style lang="scss" scoped>
.fourth-page {
  background-color: #FFF;

  .fourth-page-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 1128px;
    margin: 0 auto;
    position: relative;
    height: 600px;

    .title {
      font-weight: 600;
      font-size: 36px;
      line-height: 44px;
      color: #646A73;
      margin-bottom: 8px;
    }

    .description {
      font-weight: 400;
      font-size: 20px;
      line-height: 28px;
      color: #646A73;

      margin-bottom: 24px;
    }

    .install-window {
      width: 720px;
      min-height: 368px;
      background: url("../assets/window.svg") no-repeat center center;
      background-size: contain;

      @media only screen and (max-width: 833px) {
        background:#464646;
        border-radius: 20px;
        width: 90%;
      }
    }

    #type-code {
      color: #FFFFFF;
      width: 100%;
      height: 100%;
      padding: 104px 48px 48px;
      box-sizing: border-box;
      letter-spacing: -.02em;
      word-break: break-all;
      white-space: pre-line;
      font-family: monospace;
      font-size: 20px;
      font-weight: 500;
      line-height: 28px;
      @media only screen and (max-width: 833px) {
        padding: 24px;
      }
    }
  }
}
</style>
