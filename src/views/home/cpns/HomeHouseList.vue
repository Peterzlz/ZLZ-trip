<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ContentTypeV3 from '@/components/content_type_v3/ContentTypeV3.vue'
import ContentTypeV9 from '@/components/content_type_v9/ContentTypeV9.vue'
import useHomeStore from '@/stores/home'

const homeStore = useHomeStore()
homeStore.fetchHomeHouseListData()
const { homeHouseList } = storeToRefs(homeStore)

function btnClick() {
  homeStore.fetchHomeHouseListData()
}
</script>

<template>
  <div class="house-list">
    <h2 class="title">热门精选</h2>
    <div class="content-list">
      <template v-for="(item, index) in homeHouseList" :key="index">
        <content-type-v9 v-if="item.discoveryContentType === 9" :typeV9Data="item.data" />
        <content-type-v3 v-if="item.discoveryContentType === 3" />
      </template>
    </div>

    <button @click="btnClick">加载更多</button>
  </div>
</template>

<style lang="less" scoped>
.title {
  font-size: 22px;
  padding: 10px;
}
</style>
