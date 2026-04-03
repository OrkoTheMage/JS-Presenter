const cache = new Set()

export function preloadImage(src) {
  if (!src || cache.has(src)) return Promise.resolve()
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      cache.add(src)
      resolve()
    }
    img.onerror = () => resolve()
    img.src = src
  })
}

export function preloadImages(list = []) {
  return Promise.all(list.map(preloadImage))
}

export default { preloadImage, preloadImages }
