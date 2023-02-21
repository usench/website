<template>
  <div class="navigation" :class="{'is-active':active}">
    <div class="content">
      <div class="subject">
        <div class="title">{{ title }}</div>
        <div class="icon">
          <img src="../../../assets/arrow-blue.png" v-if="active">
          <img src="../../../assets/arrow-grey.png" v-else>
        </div>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Navigation'
}
</script>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  active: Boolean
});
</script>

<style lang="scss" scoped>
.navigation {
  width: 300px;
  height: 120px;

  background: #FFF;
  box-shadow: 2px 4px 22px rgba(0, 94, 235, 0.1);
  transition: background-color 0.5s;
  border-radius: 4px;

  cursor: pointer;
  user-select: none;

  &:active {
    transform: scale(0.98);
  }

  &.is-active {
    background: #005EEB;
    box-shadow: 2px 4px 22px rgba(0, 94, 235, 0.5);
    transition: background-color 0.5s ease;

    .content {
      .subject .title, .description {
        color: #FFFFFF;
      }
    }
  }

  .content {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 23px 24px 21px 27px;
    gap: 16px;

    .subject {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-weight: 600;
        font-size: 28px;
        line-height: 36px;

        display: flex;
        align-items: center;

        color: #8F959E;
      }

      .icon {
        width: 30px;
        height: 30px;
        background: url("../../../assets/circle.png") center/30px 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 15px;
        }
      }
    }

    .description {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      display: flex;
      align-items: center;

      color: #8F959E;
    }
  }
}
</style>
