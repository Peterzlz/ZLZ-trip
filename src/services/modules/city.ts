import hyRequest from '..'

export function getAllCityData() {
  return hyRequest.get({
    url: '/city/all'
  })
}
