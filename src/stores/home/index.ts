import {
  getHomeCategoriesData,
  getHotSuggestsData,
  getHomeHouseListData
} from '@/services/modules/home'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: (): any => ({
    hotSuggests: [],
    homeCategories: [],
    homeHouseList: [],
    currentPage: 1
  }),

  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    },

    async fetchHomeCategoriesDate() {
      const res = await getHomeCategoriesData()
      this.homeCategories = res.data
    },

    async fetchHomeHouseListData() {
      const res = await getHomeHouseListData(this.currentPage)
      this.homeHouseList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
