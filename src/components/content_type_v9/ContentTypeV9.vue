<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  typeV9Data: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return Number(props.typeV9Data.commentScore)
})
</script>

<template>
  <div class="type-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="typeV9Data.image.url" alt="" />
      </div>
      <div class="info">
        <div class="summary">{{ typeV9Data.summaryText }}</div>
        <div class="name">{{ typeV9Data.houseName }}</div>
        <div class="price">
          <van-rate
            :model-value="itemScore"
            color="#ff9854"
            void-color="#fff"
            :size="15"
            readonly
            allow-half
          />
          <div class="new">¥ {{ typeV9Data.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.type-v9 {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
