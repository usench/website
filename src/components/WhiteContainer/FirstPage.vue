<template>
  <div class="container-wrapper first-page">
    <div class="headline">
      <div class="gold-text">构建运维新方式</div>
    </div>
    <div>
      <div class="title">下载并使用</div>
      <div class="description">一行脚本代码即可快速安装使用</div>
      <div class="install-window">
        <div id="type-code"></div>
        <div id="typed-strings">
          <div class="type-style">
            <p>
              <span style="color: #f3e5c8">curl </span>
              <span style="color: #e06c75"> -sSL</span>
              <span> https://github.com/KubeOperator/KubeOperator/releases/latest/download/quick-start.sh | sh</span>
            </p>
            <p>Installing.^200.^400.^600 Completed!</p>
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
  name: "FirstPage",
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
.first-page {
  position: relative;

  .headline {
    margin-bottom: 64px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .gold-text {
      background: linear-gradient(60deg, #cfc09f 22%, #cfc09f 26%, #cfc09f 27%, #ffecb3 40%, #3a2c0f 78%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #fff;
      position: relative;
      text-transform: uppercase;
      font-size: 48px;
      margin: 0;
      font-weight: 800;
      line-height: 56px;
    }
  }

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
    white-space: pre-line;
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
}

#type-code {
  color: #FFFFFF;
  width: 100%;
  height: 100%;
  padding: 128px 48px 48px;
  box-sizing: border-box;
  letter-spacing: -.02em;
  word-break: break-all;
  white-space: pre-line;
  font-family: monospace;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}

</style>
