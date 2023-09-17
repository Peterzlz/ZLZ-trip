<script setup lang="ts">
import { getAssetURL } from '@/utils/load_assets'
import { formatDate, getStayDate } from '@/utils/format_date'

import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

import useCityStore from '@/stores/city'
import useHomeStore from '@/stores/home'

// 轮播图
const images = ['home/banner.webp', 'home/banner.webp']

// 我的位置点击获取地理位置信息
function positionClick() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取成功当前位置：', res)
    },
    (err) => {
      console.log('获取失败当前位置：', err)
    }
  )
}

// 点击跳转城市选择页面
const router = useRouter()
function cityClick() {
  router.push('/city')
}

// 获取到在城市(city)页面选中的城市，将城市名显示到页面
const cityStore = useCityStore()
const { selectCity } = storeToRefs(cityStore)

// 日期选择
// 1.1 绑定日期选择的弹窗：show 值
const show = ref(false)
// 1.2 入店日期 和 离店日期：利用 util文件夹 里的日期格式化工具，xx月xx日
const startDate: any = ref(formatDate(new Date()))
const leaveDate: any = ref(formatDate(new Date().getTime() + 24 * 60 * 60 * 1000))
// 1.3 获取要待的晚上数
let stayDate = ref(getStayDate(new Date().getTime(), new Date().getTime() + 24 * 60 * 60 * 1000))
// 1.4 日历组件van-calendar中的点击事件：
function onConfirm(values: any) {
  // 获取日历组件中选择的入店和离店日期：values值是一个数组，保存了入店和离店日期，
  const selectSatrtDate = values[0]
  const selectEndDate = values[1]
  // 获取要待的晚上数：利用untils里的工具
  stayDate.value = getStayDate(selectSatrtDate, selectEndDate)

  // 对日期进行格式化：显示 xx月xx日
  startDate.value = formatDate(selectSatrtDate)
  leaveDate.value = formatDate(selectEndDate)

  // 隐藏日期选择的弹窗
  show.value = false
}
// 1.5 点击显示日历选择弹窗
function dateClick() {
  show.value = true
}

// 获取热门推荐数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<template>
  <div class="home">
    <!-- 顶部导航栏模块 -->
    <div class="nav-bar">弘源租房</div>

    <!-- 轮播图模块 -->
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="getAssetURL(image)" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 位置信息模块 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ selectCity }}</div>
      <div class="position" @click="positionClick">
        <span>我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 住宿信息模块 -->
    <div class="section date-range bottom-gray-line" @click="dateClick">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayDate }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ leaveDate }}</span>
        </div>
      </div>
    </div>
    <!-- 日期选择组件 -->
    <van-calendar v-model:show="show" type="range" color="#ff9854" @confirm="onConfirm" />

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ color: item?.tagText.color, background: item?.tagText.background.color }"
        >
          {{ item?.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  .nav-bar {
    color: var(--primary-color);
    height: 47px;
    line-height: 47px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  .swipe {
    img {
      width: 100%;
    }
  }

  .location {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    font-size: 14px;
    .city {
      flex: 1;
    }

    .position {
      span {
        font-size: 12px;
      }
      img {
        margin-left: 5px;
        height: 18px;
        width: 18px;
      }
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  color: #999;
  font-size: 14px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
