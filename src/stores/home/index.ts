import { getHomeCategoriesData, getHotSuggestsData } from '@/services/modules/home'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: (): any => ({
    hotSuggests: [],
    HomeCategories: []
  }),

  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    },

    async fetchHomeCategoriesDate(){
      const res = await getHomeCategoriesData()
      this.HomeCategories = res.data
    }
  }
})

export default useHomeStore
