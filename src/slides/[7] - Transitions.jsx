import React from 'react'

export const order = 7

export default function Transitions() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-8">Smooth Transitions</h2>
      <p className="text-2xl text-gray-300 mb-12">Professional slide transitions built-in</p>

      <div className="flex gap-12 mb-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-lg border border-indigo-400/30"></div>
          <span className="text-lg text-gray-400">Slide Transitions</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-b from-green-500/50 to-teal-500/50 rounded-lg border border-indigo-400/30"></div>
          <span className="text-lg text-gray-400">Vertical Drill-down</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-20 bg-gradient-to-tr from-orange-500/50 to-pink-500/50 rounded-lg border border-indigo-400/30"></div>
          <span className="text-lg text-gray-400">Progress Indicators</span>
        </div>
      </div>

      <div className="flex gap-6 text-center">
        <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/30">
          <div className="text-3xl mb-2">⚡</div>
          <p className="text-sm text-gray-400">60fps Animations</p>
        </div>
        <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/30">
          <div className="text-3xl mb-2">🎭</div>
          <p className="text-sm text-gray-400">Hardware Accelerated</p>
        </div>
        <div className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-400/30">
          <div className="text-3xl mb-2">⚙️</div>
          <p className="text-sm text-gray-400">Customizable</p>
        </div>
      </div>
    </div>
  )
}
