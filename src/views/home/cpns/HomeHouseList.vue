<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ContentTypeV3 from '@/components/content_type_v3/ContentTypeV3.vue'
import ContentTypeV9 from '@/components/content_type_v9/ContentTypeV9.vue'
import useHomeStore from '@/stores/home'
import { useRouter } from 'vue-router'

const homeStore = useHomeStore()
homeStore.fetchHomeHouseListData()
const { homeHouseList } = storeToRefs(homeStore)

// 点击单个的房子，跳转到对应房子的详情页
const router = useRouter()
function houseDetailClick(houseId: string) {
  console.log('点击了房子，查看详情:', houseId)
  router.push('/detail/' + houseId)
}
</script>

<template>
  <div class="house-list">
    <h2 class="title">热门精选</h2>
    <div class="content-list">
      <template v-for="(item, index) in homeHouseList" :key="index">
        <!-- home页面房子展示：v9类型的房子 -->
        <content-type-v9
          v-if="item.discoveryContentType === 9"
          :typeV9Data="item.data"
          @click="houseDetailClick(item.data.houseId)"
        />
        <!-- home页面房子展示：v3类型的房子 -->
        <content-type-v3
          v-if="item.discoveryContentType === 3"
          :typeV3Data="item.data"
          @click="houseDetailClick(item.data.houseId)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.title {
  font-size: 22px;
  padding: 10px;
}

.content-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
