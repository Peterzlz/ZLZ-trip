import { getAllCityData } from '@/services/modules/city'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: (): any => {
    return {
      allCities: {},
      selectCity: '广州'
    }
  },
  actions: {
    async fetchAllCitiesData() {
      const res = await getAllCityData()
      this.allCities = res.data
    }
  }
})

export default useCityStore
