<script setup lang="ts">
import { getAssetURL } from '@/utils/load_assets'
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeHouseList from './cpns/HomeHouseList.vue'

// 轮播图
const images = ['home/banner.webp', 'home/banner.webp']
</script>

<template>
  <div class="home">
    <!-- 顶部导航栏模块 -->
    <div class="nav-bar">弘源租房</div>

    <!-- 轮播图模块 -->
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="getAssetURL(image)" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 搜索盒子模块 -->
    <home-search-box />

    <!-- 类别模块 -->
    <home-categories />

    <!-- 房屋列表模块：热门精选 -->
    <home-house-list />
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}
.nav-bar {
  color: var(--primary-color);
  height: 47px;
  line-height: 47px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
}

.swipe {
  img {
    width: 100vw;
  }
}
</style>
