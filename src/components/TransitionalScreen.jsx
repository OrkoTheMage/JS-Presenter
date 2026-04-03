import React from 'react'

export default function TransitionalScreen() {
  return (
    <div className="boot-screen fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'var(--bg-offwhite)' }}>
      <div className="boot-content w-full h-full">
        {/* visual handled by CSS keyframes on .boot-screen and pseudo elements */}
      </div>
    </div>
  )
}
