import { onMounted, onUnmounted, ref } from 'vue'
import { throttle } from 'underscore'

// 导出滚动函数
export default function useScroll() {
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  // 窗口滚动函数：利用节流函数优化性能
  const scrollListenerFn = throttle(() => {
    // 1. 窗口高度
    clientHeight.value = document.documentElement.clientHeight
    // 2.窗口滚动掉了的高度
    scrollTop.value = document.documentElement.scrollTop
    // 3.全部可滚动的高度
    scrollHeight.value = document.documentElement.scrollHeight

    // 窗口高度 + 窗口滚动掉了的高度 >= 全部可滚动的高度 时，改变isReachBottom 的值为 true。
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  }, 100)

  // 组件挂载之后，执行窗口滚动事件的监听
  onMounted(() => window.addEventListener('scroll', scrollListenerFn))

  // 组件卸载之后：移除窗口滚动事件的监听
  onUnmounted(() => window.removeEventListener('scroll', scrollListenerFn))

  // 滚动函数返回一个布尔值：用来决定是否发送网络请求
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
