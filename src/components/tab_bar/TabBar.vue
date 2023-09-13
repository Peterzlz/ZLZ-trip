<script setup lang="ts">
import { ref } from 'vue'
import tabBarData from '@/assets/data/tabbar.ts'
import { getAssetURL } from '@/utils/load_assets.ts'

const currentIndex = ref(0)
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex">
      <template v-for="(item, index) in tabBarData" :key="index">
        <van-tabbar-item :to="item.path">
          <template #icon>
            <img :src="getAssetURL(item.image)" alt="" />
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
}
</style>
