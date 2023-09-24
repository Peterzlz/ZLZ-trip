<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  moreText: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="detail-section">
    <h2 class="top">{{ title }}</h2>
    <div class="content">
      <slot> 我是默认内容 </slot>
    </div>
    <div class="footer">
      <span>{{ moreText }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-section {
  padding: 0 15px;
  padding-bottom: 12px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .top {
    height: 50px;
    border-bottom: 1px solid #eee;
    line-height: 50px;
    font-size: 20px;
    color: #333;
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
