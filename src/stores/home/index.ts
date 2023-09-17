import { getHotSuggestsData } from '@/services/modules/home'
import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state: (): any => ({
    hotSuggests: []
  }),

  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsData()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
