import dayjs from 'dayjs'

export function formatDate(date: any) {
  return dayjs(date).format('MM月DD日')
}

export function getStayDate(startDate, endDate) {
  return dayjs(endDate).diff(startDate) / (24 * 60 * 60 * 1000)
}
