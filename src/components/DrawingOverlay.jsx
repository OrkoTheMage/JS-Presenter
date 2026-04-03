import React, { useState, useEffect, useRef } from 'react'
import DrawingController from './DrawingController.jsx'

export default function DrawingOverlay() {
  const [drawingEnabled, setDrawingEnabled] = useState(false)
  const [color, setColor] = useState('#ff0000')
  const [showPalette, setShowPalette] = useState(false)
  const [width, setWidth] = useState(12)
  const [clearSignal, setClearSignal] = useState(0)
  const canvasRef = useRef(null)
  const strokesRef = useRef([])
  const isDrawingRef = useRef(false)

  useEffect(() => {
    const onKeyWithDraw = (e) => {
      if (e.key === 'd' || e.key === 'D') setDrawingEnabled((s) => !s)
      if (e.key === 'c' || e.key === 'C') {
        strokesRef.current = []
        const cvs = canvasRef.current
        if (cvs) {
          const ctx = cvs.getContext('2d')
          ctx.clearRect(0, 0, cvs.width, cvs.height)
        }
        setClearSignal((c) => c + 1)
      }
    }
    window.addEventListener('keydown', onKeyWithDraw)
    return () => window.removeEventListener('keydown', onKeyWithDraw)
  }, [])

  useEffect(() => {
    const cvs = canvasRef.current
    if (!cvs) return

    const resize = () => {
      const rect = cvs.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      cvs.width = Math.round(rect.width * dpr)
      cvs.height = Math.round(rect.height * dpr)
      const ctx = cvs.getContext('2d')
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, rect.width, rect.height)
      strokesRef.current.forEach(s => {
        ctx.strokeStyle = s.color
        ctx.lineWidth = s.width
        ctx.lineJoin = 'round'
        ctx.lineCap = 'round'
        ctx.beginPath()
        s.points.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y)
          else ctx.lineTo(p.x, p.y)
        })
        ctx.stroke()
      })
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(cvs)
    return () => ro.disconnect()
  }, [])

  const getCtx = () => {
    const cvs = canvasRef.current
    if (!cvs) return null
    return cvs.getContext('2d')
  }

  const toCanvasPoint = (e) => {
    const cvs = canvasRef.current
    const rect = cvs.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const clientY = e.touches ? e.touches[0].clientY : e.clientY
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const handlePointerDown = (e) => {
    if (!drawingEnabled) return
    isDrawingRef.current = true
    const pt = toCanvasPoint(e)
    const s = { color, width, points: [pt] }
    strokesRef.current.push(s)
    const ctx = getCtx()
    if (!ctx) return
    ctx.strokeStyle = s.color
    ctx.lineWidth = s.width
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(pt.x, pt.y)
    e.preventDefault()
  }

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current) return
    const pt = toCanvasPoint(e)
    const s = strokesRef.current[strokesRef.current.length - 1]
    s.points.push(pt)
    const ctx = getCtx()
    if (!ctx) return
    ctx.lineTo(pt.x, pt.y)
    ctx.stroke()
  }

  const handlePointerUp = () => {
    if (!isDrawingRef.current) return
    isDrawingRef.current = false
  }

  return (
    <>
      <DrawingController
        color={color}
        setColor={setColor}
        showPalette={showPalette}
        setShowPalette={setShowPalette}
        width={width}
        setWidth={setWidth}
        drawingEnabled={drawingEnabled}
        setDrawingEnabled={setDrawingEnabled}
        onClear={() => {
          strokesRef.current = []
          const cvs = canvasRef.current
          if (cvs) {
            const ctx = cvs.getContext('2d')
            ctx.clearRect(0, 0, cvs.width, cvs.height)
          }
          setClearSignal((c) => c + 1)
        }}
        clearSignal={clearSignal}
      />

      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full z-40 ${drawingEnabled ? 'pointer-events-auto' : 'pointer-events-none'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ touchAction: 'none' }}
      />
    </>
  )
}
