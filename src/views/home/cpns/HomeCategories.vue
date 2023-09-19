<script setup lang="ts">
import useHomeStore from '@/stores/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
homeStore.fetchHomeCategoriesDate()
const { homeCategories } = storeToRefs(homeStore)
</script>

<template>
  <div class="home-categories">
    <template v-for="(item, index) in homeCategories" :key="index">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.home-categories {
  display: flex;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    align-items: center;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
    }
    span {
      font-size: 12px;
      margin-top: 8px;
    }
  }
}
</style>
