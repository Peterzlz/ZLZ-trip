<script setup lang="ts">
// import useHouseDetailStore from '@/stores/detail'
// import { storeToRefs } from 'pinia'

// const houseDetailStore = useHouseDetailStore()
// const { houseDetailData } = storeToRefs(houseDetailStore)

defineProps({
  topModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="detail-infos">
    <!-- 标题模块 -->
    <div class="title">{{ topModule.houseName }}</div>

    <!-- 标签模块 -->
    <div class="house-tags">
      <template v-for="(item, index) in topModule.houseTags" :key="index">
        <div
          class="text"
          v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 评论模块 -->
    <div class="comment-brief extra">
      <div class="left">
        <div class="overall">{{ topModule.commentBrief.overall }}</div>
        <div class="title">{{ topModule.commentBrief.scoreTitle }}</div>
        <div class="comment">{{ topModule.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <span>{{ topModule.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 位置模块 -->
    <div class="position extra">
      <div class="left">
        <div class="address">{{ topModule.nearByPosition.address }}</div>
      </div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail-infos {
  padding: 16px 16px 28px;
  background-color: #fff;

  .title {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }
}

.house-tags {
  display: flex;
  justify-content: flex-start;
  margin: 10px 0;
  .text {
    font-size: 12px;
    margin: 0 2px;
    padding: 1px 3px;
  }
}

.extra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 12px;
  background-color: #f5f7fa;

  .left {
    display: flex;
    align-items: center;
  }

  .right {
    color: #ff9645;
  }
}
.comment-brief {
  .left {
    .overall {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }
    .title {
      margin: 0 3px;
      color: #333;
      font-weight: 700;
      font-size: 12px;
    }

    .comment {
      color: #666;
    }
  }
}

.position {
  .left {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
