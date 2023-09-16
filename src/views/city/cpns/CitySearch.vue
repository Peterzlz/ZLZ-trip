<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const inputValue = ref('')

// 点击取消按钮，返回上一层路由
const router = useRouter()
function onCancel() {
  router.back()
}

// 搜索时，在控制台打印输入框的内容
function onSearch() {
  console.log(inputValue.value)
}
</script>

<template>
  <div class="city-search">
    <form action="/">
      <van-search
        v-model="inputValue"
        show-action
        placeholder="城市/区域/位置"
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
      />
    </form>
  </div>
</template>

<style lang="less" scoped></style>
