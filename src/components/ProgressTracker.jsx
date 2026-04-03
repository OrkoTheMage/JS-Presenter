import React, { useEffect, useRef, useState } from 'react'
export default function ProgressTracker({ index = 0, total = 0, onSelect = () => {} }) {
  if (!total) return null

  const [blink, setBlink] = useState(false)
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    setBlink(true)
    const t = setTimeout(() => setBlink(false), 600)
    return () => clearTimeout(t)
  }, [index])

  return (
    <div className="group flex flex-col items-center gap-2 bg-transparent px-3 py-2 rounded-md pointer-events-auto">
      <div className={`text-sm select-none text-black opacity-50 group-hover:opacity-100 ${blink ? 'tracker-blink' : ''}`}>
        {index + 1}/{total}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 overflow-hidden">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? 'true' : 'false'}
            className={`rounded-full h-1 transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-black cursor-pointer ${
                i === index
                  ? 'w-10 sm:w-12 bg-black opacity-100'
                  : 'w-8 sm:w-10 bg-black opacity-30 hover:w-10 sm:hover:w-12 hover:opacity-100 hover:bg-black'
              }`}
          />
        ))}
        </div>
      </div>
    </div>
  )
}
