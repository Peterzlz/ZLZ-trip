<script setup lang="ts">
import TabBar from '@/components/tab_bar/Tabbar.vue'
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<style lang="less" scoped>
.app {
  color: red;
}
</style>
