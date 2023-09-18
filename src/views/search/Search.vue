<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function btnClick() {
  router.back()
}
</script>

<template>
  <div class="search">
    <h2>入店时间：{{ $route.query.startDate }}</h2>
    <h2>离店时间：{{ $route.query.leaveDate }}</h2>
    <h2>城市：{{ $route.query.selectCity }}</h2>
    <button class="back-home" @click="btnClick">返回Home页面</button>
  </div>
</template>

<style lang="less" scoped></style>
