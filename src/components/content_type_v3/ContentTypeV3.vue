<script setup lang="ts">
defineProps({
  typeV3Data: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="type-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="typeV3Data?.image?.url" alt="" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ typeV3Data.location }}</span>
        </div>
        <div class="name">{{ typeV3Data.houseName }}</div>
        <div class="summary">{{ typeV3Data.summaryText }}</div>
        <div class="price">
          <div class="new">¥ {{ typeV3Data.finalPrice }}</div>
          <div class="old">¥ {{ typeV3Data.productPrice }}</div>
          <div class="tip" v-if="typeV3Data.priceTipBadge">
            {{ typeV3Data.priceTipBadge.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.type-v3 {
  width: 50%;

  .item-inner {
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
      padding: 8px 10px;
      color: #666;
      font-size: 12px;
    }

    .location {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }

      .text {
        margin-left: 2px;
        font-size: 12px;
        color: #666;
      }
    }

    .name {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      align-items: flex-start;

      margin: 8px 0;
      .new {
        color: #ff9645;
        font-size: 14px;
      }

      .old {
        margin: 0 3px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }

      .tip {
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
      }
    }
  }
}
</style>
