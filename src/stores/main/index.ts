import { defineStore } from 'pinia'

const startDate = new Date()
const leaveDate = new Date()
leaveDate.setDate(startDate.getDate() + 1)
const useMainStore = defineStore('main', {
  state: () => ({
    token: '',

    startDate: startDate,
    leaveDate: leaveDate,
    loading: false
  })
})

export default useMainStore
