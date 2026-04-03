import React, { useEffect, useRef, useState } from 'react'

export default function VerticalTracker({ index = -1, total = 0, onSelect = () => {}, showArrow = true }) {
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
    <div className="group flex items-center gap-3 bg-transparent px-2 py-2 rounded-md pointer-events-auto">
      {showArrow && (
        <div className="flex items-center justify-center w-6 h-6 text-black opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 16.5a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L12 13.086l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0112 16.5z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      <div className="flex flex-col items-center gap-2 overflow-hidden">
        <div className={`text-sm select-none text-black opacity-50 group-hover:opacity-100 ${blink ? 'tracker-blink' : ''}`}>
          {index === -1 ? '' : `${index + 1}/${total}`}
        </div>

        <div className="flex flex-col items-center gap-2 overflow-hidden">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to vertical slide ${i + 1}`}
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
