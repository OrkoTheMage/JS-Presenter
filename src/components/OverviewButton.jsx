import React from 'react'
import { IoGridOutline } from 'react-icons/io5'

export default function OverviewButton({ setShowOverview = () => {}, className = '' }) {
  return (
    <button
      type="button"
      aria-label="Open overview grid"
      onClick={() => setShowOverview(true)}
      className={`inline-flex items-center justify-center rounded-md text-black/30 hover:text-black ${className}`}
    >
      <IoGridOutline className="w-10 h-10" />
    </button>
  )
}
