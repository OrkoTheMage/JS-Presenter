import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 7

export default function Transitions() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-6xl font-bold mb-8">Smooth Transitions</h2>
      <p className="text-2xl text-gray-300 mb-12">Professional slide transitions built-in</p>
      
      <div className="flex gap-12 mb-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg border border-white/30"></div>
          <span className="text-lg text-gray-400">Slide Transitions</span>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-b from-green-500/50 to-teal-500/50 rounded-lg border border-white/30"></div>
          <span className="text-lg text-gray-400">Vertical Drill-down</span>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-tr from-orange-500/50 to-pink-500/50 rounded-lg border border-white/30"></div>
          <span className="text-lg text-gray-400">Progress Indicators</span>
        </div>
      </div>

      <div className="flex gap-6 text-center">
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="text-3xl mb-2">⚡</div>
          <p className="text-sm text-gray-400">60fps Animations</p>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="text-3xl mb-2">🎭</div>
          <p className="text-sm text-gray-400">Hardware Accelerated</p>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <div className="text-3xl mb-2">⚙️</div>
          <p className="text-sm text-gray-400">Customizable</p>
        </div>
      </div>
    </div>
  )
}

export function TransitionsDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-5xl font-bold mb-12">Available Features</h2>
      
      <div className="grid grid-cols-3 gap-6 max-w-4xl">
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Progress Tracker</h3>
          <p className="text-gray-400 text-sm">Visual indicator of your position in the deck</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">🧭</div>
          <h3 className="text-xl font-semibold mb-2">Vertical Tracker</h3>
          <p className="text-gray-400 text-sm">Navigate sub-slides with visual dots</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">Transitional Screen</h3>
          <p className="text-gray-400 text-sm">Animated transitions between slides</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">🌗</div>
          <h3 className="text-xl font-semibold mb-2">Dark/Light Themes</h3>
          <p className="text-gray-400 text-sm">Multiple visual themes included</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
          <p className="text-gray-400 text-sm">Works on any screen size</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20 text-center">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Tailwind Powered</h3>
          <p className="text-gray-400 text-sm">Utility-first CSS for rapid styling</p>
        </div>
      </div>
    </div>
  )
}
