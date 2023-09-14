<script setup lang="ts">
import { getAssetURL } from '@/utils/load_assets'

// 轮播图
const images = ['home/banner.webp', 'home/banner.webp']
</script>

<template>
  <div class="home">
    <div class="nav-bar">弘源租房</div>
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="getAssetURL(image)" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="location">
      <div class="city">广州</div>
      <div class="position">
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
