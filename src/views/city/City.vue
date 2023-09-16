<script setup lang="ts">
import CitySearch from './cpns/CitySearch.vue'
import CityContent from './cpns/CityContent.vue'

import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useCityStore from '@/stores/city'

const active = ref(0)
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// const currentCityGroup = computed(() => allCities.value[active.value])
</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 顶部搜索栏区域 -->
      <city-search />
      <!-- 国内·港澳台和国外 tab区域 -->
      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(cityGroup, key) in allCities" :key="key">
          <van-tab :title="cityGroup.title" :name="key"> </van-tab>
        </template>
      </van-tabs>
    </div>
    <!-- 城市列表部分 -->
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <!-- 优化：让国内和国外数据同时展示，使用 v-show 让其中一个隐藏，切换国内和国外的时候会更快速一些-->
        <!-- 缺点：第一次进入 city 页面的时候会慢一些 -->
        <city-content v-show="active === key" :cityGroup="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>
