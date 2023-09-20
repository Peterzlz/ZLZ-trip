import dayjs from 'dayjs'

export function formatDate(date: any, format = 'MM月DD日') {
  return dayjs(date).format(format)
}

export function getStayDate(startDate: any, endDate: any) {
  return dayjs(endDate).diff(startDate, 'day')
}
