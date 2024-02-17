export default function urlParseData (url) {
  const baseUrl = import.meta.env.VITE_FRONTEND_URL
  const myUrl = new URL(url)
  let page = myUrl.searchParams.get('page')
  let size = myUrl.searchParams.get('size')

  if (page === null && size === null) {
    page = 1
    size = 10
  } else {
    try {
      page = parseInt(page)

      size = parseInt(size)
      if (isNaN(page) === true || isNaN(size) === true) {
        throw new Error('not a number')
      }
    } catch {
      window.location.assign(`${baseUrl}/BadRequest`)
    }
  }
  return { page, size }
}

export function urlUpdateLocation (page = 1, size = 10) {
  const baseUrl = import.meta.env.VITE_FRONTEND_URL
  const newUrl = `${baseUrl}?page=${page}&size=${size}`
  return newUrl
}
