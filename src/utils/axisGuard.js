export function checkAndUpdateAxis(lastAxisRef, key, now = Date.now(), threshold = 250) {
  const axis = (key === 'ArrowLeft' || key === 'ArrowRight') ? 'h'
    : (key === 'ArrowUp' || key === 'ArrowDown') ? 'v'
    : null
  if (!axis) return null

  const last = lastAxisRef.current || { axis: null, time: 0 }
  if (last.axis && last.axis !== axis && (now - last.time) < threshold) {
    return null
  }

  lastAxisRef.current = { axis, time: now }
  return axis
}

export default checkAndUpdateAxis
