<script setup lang="ts">
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/city'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

// 从 city 组件中获取传过来的数据
const props = defineProps({
  cityGroup: {
    type: Object,
    default: (): any => ({})
  }
})

const indexList = computed(() => {
  let list = props.cityGroup?.cities.map((item: any): string[] => item.group)
  list.unshift('#')
  return list
})

// 点击城市事件：
//   1、点击了城市名之后跳转到上一个路由
//   2、同时将选中的城市名保存到 city 的状态管理(store)里
const cityStore = useCityStore()
const { selectCity } = storeToRefs(cityStore)
const router = useRouter()
function currentCityClick(cityName: string) {
  router.back()
  selectCity.value = cityName
}
</script>

<template>
  <div class="content">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <!-- 热门城市列表模块：展示热门城市 -->
      <van-index-anchor index="热门" />
      <div class="hot-cities">
        <template v-for="(item, index) in cityGroup?.hotCities" :key="index">
          <div class="city-name" @click="currentCityClick(item.cityName)">{{ item.cityName }}</div>
        </template>
      </div>

      <!-- 所有城市列表模块：展示所有城市 -->
      <template v-for="(item, index) in cityGroup?.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, cityIndex) in item.cities" :key="cityIndex">
          <van-cell :title="city.cityName" @click="currentCityClick(city.cityName)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.hot-cities {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .city-name {
    width: 70px;
    height: 28px;
    margin: 6px 0;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
  }
}
</style>
