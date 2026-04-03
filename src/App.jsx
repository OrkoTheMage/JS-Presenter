import React, { useState, useEffect } from 'react'
import SlideDeck from './components/SlideDeck.jsx'
import PreLaunch from './components/PreLaunch.jsx'
import TransitionalScreen from './components/TransitionalScreen.jsx'

export default function App() {
  const [started, setStarted] = useState(false)
  const [transitioning, setTransitioning] = useState(false)

  const handleStart = () => {
    if (transitioning || started) return
    setTransitioning(true)
    // 2 second delay to simulate boot / dramatic pause
    setTimeout(() => {
      setStarted(true)
      setTransitioning(false)
    }, 1800)
  }

  // Show PreLaunch initially. When the IO button is pressed we show a
  // full-page BootScreen for the transition, then mount SlideDeck.
  if (!started && transitioning) return <TransitionalScreen />
  if (!started) return <PreLaunch onStart={handleStart} transitioning={transitioning} />

  return (
    <div>
      <SlideDeck />
    </div>
  )
}
