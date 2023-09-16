<script setup lang="ts">
import { getAssetURL } from '@/utils/load_assets'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/city'
import { storeToRefs } from 'pinia'

// 轮播图
const images = ['home/banner.webp', 'home/banner.webp']

// 我的位置点击获取地理位置信息
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取成功当前位置：', res)
    },
    (err) => {
      console.log('获取失败当前位置：', err)
    }
  )
}

// 点击跳转城市选择页面
const router = useRouter()
function cityClick() {
  router.push('/city')
}

// 获取到在城市(city)页面选中的城市，将城市名显示到页面
const cityStore = useCityStore()
const { selectCity } = storeToRefs(cityStore)
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

    <!-- 位置信息模块 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ selectCity }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .nav-bar {
    color: var(--primary-color);
    height: 46px;
    line-height: 46px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  .swipe {
    img {
      width: 100%;
    }
  }

  .location {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    font-size: 14px;
    .city {
      flex: 1;
    }

    .position {
      span {
        font-size: 12px;
      }
      img {
        margin-left: 5px;
        height: 18px;
        width: 18px;
      }
    }
  }
}
</style>
