import { defineStore } from 'pinia'
import { getHouseDetailData } from '@/services/modules/detail'

const useHouseDetailStore = defineStore('houseDetail', {
  state: (): any => ({
    houseDetailData: {}
  }),
  actions: {
    async fetchHouseDetailData(houseId: string) {
      const res = await getHouseDetailData(houseId)
      this.houseDetailData = res.data
    }
  }
})

export default useHouseDetailStore
