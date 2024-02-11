export default function urlParseData (url) {
  const myUrl = new URL(url)
  let page = myUrl.searchParams.get('page')
  let size = myUrl.searchParams.get('size')
  console.log(page)
  console.log(size)
  if (page === null && size === null) {
    page = 1
    size = 10
  } else {
    try {
      page = parseInt(page)
      size = parseInt(size)
    } catch {
      page = 1
      size = 10
    }
  }
  return { page, size }
}

export function urlUpdateLocation (url, page, size) {
  const baseUrl = url.split('?')[0]
  const params = new URLSearchParams(url.slice(baseUrl.length))
  const newUrl = `${baseUrl}?page=${page}&size=${size}`
  console.log(newUrl)
  window.location.assign(newUrl)
}
