import React, { useState, useEffect } from 'react'
import SlideDeck from './components/SlideDeck.jsx'
import PreLaunch from './components/PreLaunch.jsx'
import TransitionalScreen from './components/TransitionalScreen.jsx'

export default function App() {

  return (
    <div className="bp-root blueprint-paper">
      <SlideDeck />
    </div>
  )
}
