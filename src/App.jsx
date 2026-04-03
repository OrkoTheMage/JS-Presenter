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
    setTimeout(() => {
      setStarted(true)
      setTransitioning(false)
    }, 1800)
  }

  if (!started && transitioning) return <TransitionalScreen />
  if (!started) return <PreLaunch onStart={handleStart} transitioning={transitioning} />

  return (
    <div>
      <SlideDeck />
    </div>
  )
}
