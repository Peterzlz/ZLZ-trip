import hyRequest from '..'

export function getHotSuggestsData() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCategoriesData() {
  return hyRequest.get({
    url: '/home/categories'
  })
}

export function getHomeHouseListData(currentPage: number) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}
