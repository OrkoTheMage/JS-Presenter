import React, { useEffect, useCallback, useState, useRef } from 'react'
import styled from '@emotion/styled'
import IOButton from './IOButton.jsx'

const Screen = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2b2b2b; /* warm dark grey backdrop */
`



export default function PreLaunch({ onStart, transitioning = false }) {

  const [pending, setPending] = useState(false)
  const timeoutRef = useRef(null)

  const handleKey = useCallback((e) => {
    if (transitioning) return
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault()
      onStart()
    }
  }, [onStart, transitioning])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleKey])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [])

  const handleClick = () => {
    if (transitioning || pending) return
    setPending(true)
    timeoutRef.current = setTimeout(() => {
      timeoutRef.current = null
      setPending(false)
      onStart()
    }, 1000)
  }

  const pressed = transitioning || pending
  const disabled = transitioning || pending

  return (
    <Screen>
      <IOButton onClick={handleClick} aria-label="Start presentation" title="Start presentation" pressed={pressed} disabled={disabled} aria-pressed={pressed}>
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M12 2v10" stroke="#0b0b0b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.05 8.05a7 7 0 1 0 13.9 0" stroke="#0b0b0b" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </IOButton>
    </Screen>
  )
}
