import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 3

export default function DrawingMode() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-8">Drawing Mode</h2>
      <p className="text-2xl text-gray-300 mb-12">Annotate your slides in real-time</p>
      
      <div className="flex gap-12 items-center">
        <div className="text-center">
          <div className="text-6xl mb-4">✏️</div>
          <p className="text-xl text-gray-300">Press</p>
          <span className="text-3xl font-bold">{keyBindClass.replace('inline-block ', '')}D</span>
          <p className="text-xl text-gray-300 mt-2">to enable</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-xl text-gray-300">Select colors</p>
          <p className="text-lg text-gray-400 mt-2">and brush sizes</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl mb-4">🗑️</div>
          <p className="text-xl text-gray-300">Press</p>
          <span className="text-3xl font-bold">{keyBindClass.replace('inline-block ', '')}C</span>
          <p className="text-xl text-gray-300 mt-2">to clear</p>
        </div>
      </div>

      <div className="mt-16 p-6 bg-white/5 rounded-xl border border-indigo-400/30">
        <p className="text-xl text-center">
          <span className="text-yellow-400">💡 Tip:</span> Drawing persists across slides until cleared!
        </p>
      </div>
    </div>
  )
}

export function DrawingModeDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">Drawing Features</h2>
      
      <div className="grid grid-cols-3 gap-8 max-w-4xl">
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Color Palette</h3>
          <p className="text-gray-400">Multiple colors available in the drawing toolbar</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">📏</div>
          <h3 className="text-xl font-semibold mb-2">Brush Sizes</h3>
          <p className="text-gray-400">Adjustable stroke width for precision</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-2">Touch Support</h3>
          <p className="text-gray-400">Works with mouse, touch, and stylus</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">💾</div>
          <h3 className="text-xl font-semibold mb-2">Session Persistence</h3>
          <p className="text-gray-400">Drawings survive slide transitions</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-semibold mb-2">Instant Clear</h3>
          <p className="text-gray-400">One keypress clears all annotations</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30 text-center">
          <div className="text-4xl mb-4">👆</div>
          <h3 className="text-xl font-semibold mb-2">UI Toggle</h3>
          <p className="text-gray-400">Also accessible via toolbar button</p>
        </div>
      </div>
    </div>
  )
}
