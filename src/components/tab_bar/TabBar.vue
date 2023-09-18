<script setup lang="ts">
import { ref } from 'vue'
import tabBarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils/load_assets'

const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  color: red;

  img {
    height: 28px;
  }
}
</style>
@/assets/data/tab_bar@/assets/data/tabBarData@/assets/data/tabbar