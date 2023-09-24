import hyRequest from '..'

export function getHouseDetailData(houseId: string) {
  return hyRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
