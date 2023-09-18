<script setup lang="ts"></script>

<template>
  <div class="search">
    <h2>入店时间：{{ $route.query.startDate }}</h2>
    <h2>离店时间：{{ $route.query.leaveDate }}</h2>
    <h2>城市：{{ $route.query.selectCity }}</h2>
  </div>
</template>

<style lang="less" scoped>
.search {
  color: red;
}
</style>
