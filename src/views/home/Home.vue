<script setup lang="ts">
// 组件：
import HomeSearchBox from './cpns/HomeSearchBox.vue'
import HomeCategories from './cpns/HomeCategories.vue'
import HomeHouseList from './cpns/HomeHouseList.vue'
import SearchBar from '@/components/search_bar/SearchBar.vue'

// 状态管理：
import useHomeStore from '@/stores/home'

// 引用库的函数：
import { computed, watch } from 'vue'

// 自己封装的工具函数:
import { getAssetURL } from '@/utils/load_assets'

// 自己封装的hook函数：
import useScrolll from '@/hooks/useScroll'

// 轮播图
const images = ['home/banner.webp', 'home/banner.webp']

// 监听滚动函数中的isReachBottom变化：
// 1. 值为true时，发送网络请求
// 2. 成功获取数据之后调用then，将isReachBottom的值改为false
const { isReachBottom, scrollTop } = useScrolll()
const homeStore = useHomeStore()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 滚动到特定位置，出现搜索框
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>

<template>
  <div class="home">
    <!-- 搜索框：隐藏的，滚动到特定位置显示 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar />
    </div>

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

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
