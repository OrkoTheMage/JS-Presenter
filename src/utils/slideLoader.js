const slideModules = import.meta.glob('../slides/*.jsx', { eager: true })

const slideEntries = Object.entries(slideModules).map(([path, mod]) => {
  const Component = mod.default
  const explicitOrder = mod.order ?? (mod.default && mod.default.order)
  const numMatch = path.match(/\d+/)
  const fileNumber = numMatch ? Number(numMatch[0]) : NaN
  const order = explicitOrder ?? (!Number.isNaN(fileNumber) ? fileNumber : Infinity)
  const images = mod.images ?? []

  if (Component) {
    if (!Component.downslides || Component.downslides.length === 0) {
      const downslideExports = Object.keys(mod)
        .filter((k) => k !== 'default' && k !== 'order' && k !== 'images')
        .sort()
        .map((k) => mod[k])
        .filter(Boolean)
      if (downslideExports.length) Component.downslides = downslideExports
    }
  }

  return { path, Component, order, images }
})

slideEntries.sort((a, b) => {
  if (a.order !== b.order) return a.order - b.order
  return a.path.localeCompare(b.path)
})

export const slides = slideEntries.map((e) => e.Component)
export const slideImages = slideEntries.map((e) => e.images || [])

export default slides
