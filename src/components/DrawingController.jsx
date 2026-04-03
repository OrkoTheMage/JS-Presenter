import React, { useEffect, useRef, useState } from 'react'

import { FaRegTrashAlt, FaPen } from 'react-icons/fa'

export default function DrawingController({ color, setColor, showPalette, setShowPalette, width, setWidth, drawingEnabled, setDrawingEnabled, onClear, clearSignal }) {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#00ffff', '#ff00ff', '#ffff00', '#000000', '#ffffff']
  const rootRef = useRef(null)
  useEffect(() => {
    if (!showPalette) return
    const onDocPointer = (e) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target)) setShowPalette(false)
    }
    document.addEventListener('pointerdown', onDocPointer)
    return () => document.removeEventListener('pointerdown', onDocPointer)
  }, [showPalette, setShowPalette])
  const [rootHovered, setRootHovered] = useState(false)
  const [paletteHovered, setPaletteHovered] = useState(false)
  const closeTimerRef = useRef(null)
  const [clearHighlighted, setClearHighlighted] = useState(false)
  const clearFirstRunRef = useRef(false)

  useEffect(() => {
    if (!clearFirstRunRef.current) {
      clearFirstRunRef.current = true
      return
    }
    // when parent signals a clear, briefly highlight the clear button
    setClearHighlighted(true)
    const t = setTimeout(() => setClearHighlighted(false), 300)
    return () => clearTimeout(t)
  }, [clearSignal])

  useEffect(() => {
    // debounce closing so moving pointer from controller to palette doesn't immediately hide it
    if (!rootHovered && !paletteHovered) {
      closeTimerRef.current = setTimeout(() => setShowPalette(false), 120)
    } else {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
  }, [rootHovered, paletteHovered, setShowPalette])

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setRootHovered(true)}
      onMouseLeave={() => setRootHovered(false)}
      className="absolute top-4 right-4 z-50 pointer-events-auto flex items-center gap-3 p-2 bg-black/60 text-white group"
    >
      <div className="flex items-center gap-2">
        <button
          aria-label="Toggle draw"
          onClick={(e) => { setDrawingEnabled((s) => !s); e.currentTarget.blur(); }}
          className={`w-8 h-8 rounded-md flex items-center justify-center ${drawingEnabled ? 'bg-white text-black' : 'bg-white/10'}`}
          onMouseDown={(e) => e.preventDefault()}
        >
          <FaPen className="w-5 h-5" />
        </button>

        <button
          aria-label="Clear drawing"
          onClick={(e) => { setClearHighlighted(true); setTimeout(() => setClearHighlighted(false), 300); onClear(); e.currentTarget.blur(); }}
          className={`w-8 h-8 rounded-md flex items-center justify-center ${clearHighlighted ? 'bg-white text-black' : 'bg-white/10'}`}
          onMouseDown={(e) => e.preventDefault()}
        >
          <FaRegTrashAlt className="w-5 h-5" />
        </button>

        <button
          aria-label="Current color"
          onClick={(e) => { setShowPalette((s) => !s); e.currentTarget.blur(); }}
          className="w-8 h-8 rounded-md flex items-center justify-center"
          style={{ background: color }}
          onMouseDown={(e) => e.preventDefault()}
        />
      </div>

      <div className="hidden group-hover:flex items-center gap-2 transition-all duration-150">
        <input
          type="range"
          min={1}
          max={200}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
        <input
          type="number"
          min={1}
          max={200}
          value={width}
          onChange={(e) => {
            const v = Number(e.target.value)
            if (!Number.isNaN(v)) setWidth(v)
          }}
          className="w-10 h-6 text-xs px-0.5 rounded bg-white/10 text-white outline-none"
          aria-label="Stroke width in pixels"
          onMouseDown={(e) => e.stopPropagation()}
        />
        <div className="text-xs">px</div>
      </div>

      {showPalette && (
          <div
            onMouseEnter={() => setPaletteHovered(true)}
            onMouseLeave={() => setPaletteHovered(false)}
            className="absolute top-full right-0 mt-2 z-60 w-max min-w-max grid grid-cols-4 gap-2 p-2 bg-black/60 rounded shadow border"
        >
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => { setColor(c); setShowPalette(false) }}
              className={`w-8 h-8 rounded focus:outline-none focus:ring-0 ${c === '#ffffff' ? 'border border-gray-300' : ''}`}
              style={{ background: c }}
              aria-label={`Select ${c}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
