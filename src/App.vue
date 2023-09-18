<script setup lang="ts">
import TabBar from '@/components/tab_bar/TabBar.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>

    <!-- 有hideTabbar属性的的路由会隐藏底部的 tabbar -->
    <tab-bar v-if="!route.meta.hideTabbar" />
  </div>
</template>

<style lang="less" scoped></style>
