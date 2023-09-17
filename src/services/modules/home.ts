import hyRequest from '..'

export function getHotSuggestsData() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}
