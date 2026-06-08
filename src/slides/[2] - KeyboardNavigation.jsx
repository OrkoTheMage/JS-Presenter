import React from 'react'
import { keyBindClass, keyBindBlockClass } from '../styles/keybindClass'

export const order = 2

export default function KeyboardNavigation() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-16">Keyboard Navigation</h2>

      <div className="flex items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <div className={keyBindClass}>&larr;</div>
            <div className={keyBindClass}>&rarr;</div>
          </div>
          <span className="text-2xl text-gray-300">Horizontal Navigation</span>
          <span className="text-lg text-gray-500">Move between slides</span>
        </div>

        <div className="w-px h-32 bg-white/30"></div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <div className={keyBindClass}>&uarr;</div>
            <div className={keyBindClass}>&darr;</div>
          </div>
          <span className="text-2xl text-gray-300">Vertical Navigation</span>
          <span className="text-lg text-gray-500">Drill into sub-slides</span>
        </div>
      </div>

      <div className="mt-16 p-8 bg-white/5 rounded-xl border border-indigo-400/30 max-w-2xl">
        <p className="text-xl text-center text-gray-300">
          Use <span className={keyBindClass}>&uarr;</span> <span className={keyBindClass}>&darr;</span> to explore the sub-slide below!
        </p>
      </div>
    </div>
  )
}

export function KeyboardNavigationDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">Keyboard Shortcuts Reference</h2>

      <div className="grid grid-cols-2 gap-6 text-lg">
        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>&larr; &rarr;</span>
          </div>
          <span className="text-gray-300">Navigate slides</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>&uarr; &darr;</span>
          </div>
          <span className="text-gray-300">Sub-slide navigation</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>Esc</span>
          </div>
          <span className="text-gray-300">Toggle overview grid</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>D</span>
          </div>
          <span className="text-gray-300">Toggle drawing mode</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>C</span>
          </div>
          <span className="text-gray-300">Clear drawings</span>
        </div>

        <div className="flex items-center gap-4 p-4 bg-indigo-500/10 rounded-lg">
          <div className="flex gap-2">
            <span className={keyBindBlockClass}>Tab</span>
          </div>
          <span className="text-gray-300">Next slide (alt)</span>
        </div>
      </div>

      <p className="mt-12 text-xl text-gray-400">
        All shortcuts work globally -- no clicking required!
      </p>
    </div>
  )
}
