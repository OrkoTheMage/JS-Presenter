import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 4

export default function OverviewGrid() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-8">Overview Grid</h2>
      <p className="text-2xl text-gray-300 mb-12">See all your slides at once</p>
      
      <div className="relative mb-12">
        <div className="grid grid-cols-4 gap-4 p-8 bg-white/5 rounded-2xl border border-indigo-400/30">
          <div className="w-24 h-16 bg-white/20 rounded border-2 border-white"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
          <div className="w-24 h-16 bg-indigo-500/10 rounded"></div>
        </div>
        
        <div className="absolute -top-4 -right-4 text-4xl">👁️</div>
      </div>

      <div className="flex items-center gap-4 p-6 bg-white/5 rounded-xl border border-indigo-400/30">
        <span className="text-xl text-gray-300">Press</span>
        <span className="text-3xl font-bold">{keyBindClass.replace('inline-block ', '')}Esc</span>
        <span className="text-xl text-gray-300">to toggle</span>
      </div>
    </div>
  )
}

export function OverviewGridDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">Overview Mode Benefits</h2>
      
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-start gap-6 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <div className="text-4xl">🗺️</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">See the Big Picture</h3>
            <p className="text-gray-400">Get a bird's eye view of your entire presentation at a glance.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <div className="text-4xl">🎯</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Jump Anywhere</h3>
            <p className="text-gray-400">Click any slide thumbnail to jump directly to that point in your presentation.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <div className="text-4xl">📍</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Current Position</h3>
            <p className="text-gray-400">The currently displayed slide is highlighted for easy reference.</p>
          </div>
        </div>
        
        <div className="flex items-start gap-6 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <div className="text-4xl">↵</div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Quick Exit</h3>
            <p className="text-gray-400">Press Escape again or click outside to return to your current position.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
