import React, { useState, useEffect, useRef } from 'react'

export default function SlideTransition({ slides, index, vIndex = -1, downslides = [], transitionMs = 280 }) {
  const [prevIndex, setPrevIndex] = useState(null)
  const [prevVIndex, setPrevVIndex] = useState(null)
  const [direction, setDirection] = useState('forward')
  const [isTopAnimating, setIsTopAnimating] = useState(false)
  const [isVerticalAnimating, setIsVerticalAnimating] = useState(false)
  const lastIndex = useRef(index)
  const lastV = useRef(vIndex)

  useEffect(() => {
    // determine whether top-level index changed (horizontal) or vertical index changed
    if (index !== lastIndex.current) {
      const from = lastIndex.current
      const to = index
      setPrevIndex(from)
      setPrevVIndex(null)
      setDirection(to > from ? 'forward' : 'back')
      setIsTopAnimating(true)
      lastIndex.current = to
      lastV.current = 0
      const t = setTimeout(() => {
        setPrevIndex(null)
        setIsTopAnimating(false)
        setDirection('forward')
      }, transitionMs)
      return () => clearTimeout(t)
    }

    if (vIndex !== lastV.current) {
      setPrevIndex(null)
      setPrevVIndex(lastV.current)
      setDirection(vIndex > lastV.current ? 'down' : 'up')
      setIsVerticalAnimating(true)
      lastV.current = vIndex
      const t = setTimeout(() => {
        setPrevVIndex(null)
        setIsVerticalAnimating(false)
      }, transitionMs)
      return () => clearTimeout(t)
    }
  }, [index, vIndex, transitionMs])

  const CurrentTop = slides[index]
  const PrevTop = prevIndex != null ? slides[prevIndex] : null

  const CurrentDown = downslides && typeof vIndex === 'number' && vIndex >= 0 ? downslides[vIndex] : null
  const PrevDown = prevVIndex != null && downslides ? downslides[prevVIndex] : null

  const isVerticalActive = CurrentDown != null || PrevDown != null

  return (
    <div className="w-full max-w-4xl p-8 relative">
      {/* Always keep top-level slides mounted to avoid mount delay when returning from vertical slides */}
      <>
        {PrevTop && (
          <div className={`absolute inset-0 ${direction === 'forward' ? 'slide-out-right' : 'slide-out-left'} z-0 ${isVerticalActive ? 'opacity-0 pointer-events-none' : ''}`}>
            <PrevTop />
          </div>
        )}

        <div className={`absolute inset-0 z-10 ${isTopAnimating ? (direction === 'forward' ? 'slide-in-left' : 'slide-in-right') : ''} ${isVerticalActive ? 'opacity-0 pointer-events-none' : ''}`}>
          <CurrentTop />
        </div>
      </>

      {/* When vertical slides are active, they replace the current top-level slide */}
      {isVerticalActive && (
        <>
              {/* Render vertical slides immediately; pick animation classes based on direction with sensible defaults */}
              {PrevDown && (
                <div className={`absolute inset-0 ${direction === 'down' ? 'slide-out-up' : direction === 'up' ? 'slide-out-down' : 'slide-out-up'} z-10`}>
                  <PrevDown />
                </div>
              )}

              {CurrentDown && (
                <div className={`absolute inset-0 ${direction === 'down' ? 'slide-in-up' : direction === 'up' ? 'slide-in-down' : 'slide-in-up'} z-20`}>
                  <CurrentDown />
                </div>
              )}
        </>
      )}
    </div>
  )
}
