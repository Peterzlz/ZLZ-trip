import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home' //重定向，默认打开home主页面
    },
    {
      path: '/home',
      component: () => import('@/views/home/Home.vue')
    },
    {
      path: '/favor',
      component: () => import('@/views/favor/Favor.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/Order.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/Message.vue')
    },
    {
      path: '/city',
      component: () => import('@/views/city/City.vue'),
      meta: {
        hideTabbar: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search/Search.vue'),
      meta: {
        hideTabbar: true
      }
    }
  ]
})

export default router
