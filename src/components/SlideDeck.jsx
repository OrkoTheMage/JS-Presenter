import React, { useState, useEffect, useCallback, useRef } from 'react'
import DrawingOverlay from './DrawingOverlay.jsx'
import SlideTransition from './SlideTransition.jsx'
import ProgressTracker from './ProgressTracker.jsx'
import OverviewButton from './OverviewButton.jsx'
import VerticalTracker from './VerticalTracker.jsx'
import OverviewGrid from './OverviewGrid.jsx'
import { slides, slideImages } from '../utils/slideLoader.js'
import { preloadImages } from '../utils/imagePreloader.js'
import { checkAndUpdateAxis } from '../utils/axisGuard.js'

export default function SlideDeck() {
  const [index, setIndex] = useState(0)
  const [vIndex, setVIndex] = useState(-1)
  const [showOverview, setShowOverview] = useState(false)
  const transitionMs = 280
  

  const next = useCallback(() => {
    const target = Math.min(index + 1, slides.length - 1)
    if (target === index) return
    setIndex(target)
    setVIndex(-1)
  }, [index, slides.length])

  const prev = useCallback(() => {
    const target = Math.max(index - 1, 0)
    if (target === index) return
    setIndex(target)
    setVIndex(-1)
  }, [index])

  const lastAxisRef = useRef({ axis: null, time: 0 })

  useEffect(() => {
    
    const onKey = (e) => {
      
      if (e.key === 'Escape') {
        setShowOverview((s) => !s)
        return
      }

      const axis = checkAndUpdateAxis(lastAxisRef, e.key)
      if (!axis) return

      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowDown') {
        const downslides = (slides[index] && slides[index].downslides) || []
        if (downslides.length) {
          if (vIndex === -1) setVIndex(0)
          else if (vIndex < downslides.length - 1) setVIndex((cur) => cur + 1)
        }
      }
      if (e.key === 'ArrowUp') {
        const downslides = (slides[index] && slides[index].downslides) || []
        if (downslides.length) {
          if (vIndex > 0) setVIndex((cur) => cur - 1)
          else if (vIndex === 0) setVIndex(-1)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, index, vIndex, slides])

  useEffect(() => {
    // Preload images for the next 1-2 slides so they render quickly when navigated to
    const nextImgs = [
      ...(slideImages[index + 1] || []),
      ...(slideImages[index + 2] || [])
    ]
    if (nextImgs.length) preloadImages(nextImgs)
  }, [index])

  

  const Current = slides[index]
  const bgClass = (Current && Current.bgClass) ? Current.bgClass : 'bg-transparent text-gray-900'
  const downslides = (Current && Current.downslides) || []

  return (
    <div className={`h-screen w-full ${bgClass} flex flex-col relative deck`}>
      <OverviewGrid slides={slides} setIndex={setIndex} setVIndex={setVIndex} showOverview={showOverview} setShowOverview={setShowOverview} />
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        <SlideTransition slides={slides} index={index} vIndex={vIndex} downslides={downslides} transitionMs={transitionMs} />
      </div>

      <div className="absolute left-0 right-0 bottom-6 flex items-center justify-center pointer-events-auto">
        <div className="flex items-center gap-4">
          {downslides.length > 0 && (
            <VerticalTracker index={vIndex} total={downslides.length} onSelect={(i) => setVIndex(i)} showArrow={vIndex === -1} />
          )}
          <ProgressTracker index={index} total={slides.length} onSelect={(i) => { setIndex(i); setVIndex(-1); }} />
          <OverviewButton setShowOverview={setShowOverview} className="transform translate-y-3" />
        </div>
      </div>

      <DrawingOverlay />
    </div>
  )
}
