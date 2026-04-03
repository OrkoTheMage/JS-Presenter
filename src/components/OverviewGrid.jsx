import React, { useRef, useState } from 'react'

export default function OverviewGrid({ slides, setIndex, setVIndex, showOverview, setShowOverview }) {
  const PREVIEW_SRC_W = 1200
  const PREVIEW_SRC_H = 800
  const overviewScrollRef = useRef(null)
  const dragRef = useRef({ active: false, startX: 0, startY: 0, scrollLeft: 0, scrollTop: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const PARENT_TILE_W = 192 // w-48
  const PARENT_TILE_H = 160 // h-40
  const DOWN_TILE_W = 160 // w-40

  const RATIO = PREVIEW_SRC_H / PREVIEW_SRC_W
  const PARENT_CONTENT_W = PARENT_TILE_W
  const DOWN_CONTENT_W = DOWN_TILE_W
  const parentScale = PARENT_CONTENT_W / PREVIEW_SRC_W
  const downScale = DOWN_CONTENT_W / PREVIEW_SRC_W

  if (!showOverview) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-8"
      onMouseDown={(e) => { if (e.target === e.currentTarget) setShowOverview(false) }}
    >
      <div
        ref={overviewScrollRef}
        className={`bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-6xl h-[80vh] overflow-auto p-6 no-scrollbar overview-no-select ${isDragging ? 'grabbing' : 'grab'}`}
        onDragStart={(e) => e.preventDefault()}
        onPointerDown={(e) => {
          if (e.pointerType === 'touch') return
          if (e.target && e.target.closest && e.target.closest('button')) return
          const el = overviewScrollRef.current
          if (!el) return
          el.setPointerCapture && el.setPointerCapture(e.pointerId)
          dragRef.current.active = true
          dragRef.current.startX = e.clientX
          dragRef.current.startY = e.clientY
          dragRef.current.scrollLeft = el.scrollLeft
          dragRef.current.scrollTop = el.scrollTop
          setIsDragging(true)
        }}
        onPointerMove={(e) => {
          if (!dragRef.current.active) return
          e.preventDefault()
          const el = overviewScrollRef.current
          const dx = e.clientX - dragRef.current.startX
          const dy = e.clientY - dragRef.current.startY
          el.scrollLeft = dragRef.current.scrollLeft - dx
          el.scrollTop = dragRef.current.scrollTop - dy
        }}
        onPointerUp={(e) => {
          if (!dragRef.current.active) return
          const el = overviewScrollRef.current
          el.releasePointerCapture && el.releasePointerCapture(e.pointerId)
          dragRef.current.active = false
          setIsDragging(false)
        }}
        onPointerCancel={(e) => {
          if (!dragRef.current.active) return
          dragRef.current.active = false
          setIsDragging(false)
        }}
      >
        <div className="flex items-start gap-6">
          {slides.map((SlideComp, i) => {
            const down = (SlideComp && SlideComp.downslides) || []
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <button
                  className={`w-48 h-40 rounded-md border hover:scale-105 transition-transform bg-gray-50 dark:bg-gray-800 flex flex-col`}
                  onClick={() => { setIndex(i); setVIndex(-1); setShowOverview(false); }}
                >
                  <div className="w-full overflow-hidden rounded-md relative" style={{ height: `${Math.round(PARENT_CONTENT_W * RATIO)}px` }}>
                    <div className="pointer-events-none absolute left-1/2 top-1/2" style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H, transform: `translate(-50%,-50%) scale(${parentScale})`, transformOrigin: 'center center' }}>
                      <div className="overview-preview" style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H }}>
                        <div className={`${(SlideComp && SlideComp.bgClass) || ''}`} style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H }}>
                          <SlideComp />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-8 w-full flex items-center pl-2 text-sm text-gray-600 dark:text-gray-300">{`#${i + 1}`}</div>
                </button>

                {down.length > 0 && (
                  <div className="flex flex-col items-center gap-2 mt-2">
                    {down.map((D, j) => (
                      <button
                        key={j}
                        className="w-40 h-24 rounded-md border text-left bg-white dark:bg-gray-700 hover:scale-105 transition-transform flex flex-col"
                        onClick={() => { setIndex(i); setVIndex(j); setShowOverview(false); }}
                      >
                        <div className="w-full overflow-hidden rounded-sm relative" style={{ height: `${Math.round(DOWN_CONTENT_W * RATIO)}px` }}>
                          <div className="pointer-events-none absolute left-1/2 top-1/2" style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H, transform: `translate(-50%,-50%) scale(${downScale})`, transformOrigin: 'center center' }}>
                            <div className="overview-preview" style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H }}>
                              <div className={`${(D && D.bgClass) || ''}`} style={{ width: PREVIEW_SRC_W, height: PREVIEW_SRC_H }}>
                                <D />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-6 w-full flex items-center pl-2 text-xs text-gray-600 dark:text-gray-300">{`${i + 1}.${j + 1}`}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
