<script setup lang="ts">
// 组件：
import DetailSwipe from '@/views/detail/cpns/DetailSwipe.vue'
import DetailInfos from './cpns/DetailInfos.vue'
import DetailFacility from './cpns/DetailFacility.vue'
import DetailLandlord from './cpns/DetailLandlord.vue'
import DetailComment from './cpns/DetailComment.vue'
// 状态管理：
import useHouseDetailStore from '@/stores/detail'
// 引用库的函数：
import { storeToRefs } from 'pinia'
import { useRouter, useRoute } from 'vue-router'

// 顶部nav-bar的返回图标：点击返回上一层路由
const router = useRouter()
function onClickLeft() {
  router.back()
}

// 从当前路由中获取 houseId
const route = useRoute()
const houseId = route.params.id as string

// 获取详情页的数据
const houseDetailStore = useHouseDetailStore()
houseDetailStore.fetchHouseDetailData(houseId)
const { houseDetailData } = storeToRefs(houseDetailStore)
</script>

<template>
  <div class="detail">
    <!-- 顶部导航栏模块：nav -->
    <div class="nav-bar">
      <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    </div>

    <div class="main" v-if="houseDetailData.mainPart">
      <!-- 轮播图模块 -->
      <div class="swipes">
        <detail-swipe :housePicture="houseDetailData.mainPart.topModule.housePicture" />
      </div>

      <!-- 轮播图下的信息模块 -->
      <div class="infos">
        <detail-infos :topModule="houseDetailData.mainPart.topModule" />
      </div>

      <!-- 房屋设施模块 -->
      <detail-facility
        :houseFacility="houseDetailData.mainPart.dynamicModule.facilityModule.houseFacility"
      />

      <!-- 房东介绍模块 -->
      <detail-landlord :landlord="houseDetailData.mainPart.dynamicModule.landlordModule" />

      <!-- 热门评论模块 -->
      <detail-comment :comment="houseDetailData.mainPart.dynamicModule.commentModule"/>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 文字的粗细效果：房屋详情
:deep(.van-nav-bar__title) {
  font-weight: 500;
}
</style>
/
