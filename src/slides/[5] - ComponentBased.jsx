import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 5

export default function ComponentBased() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-8">Component-Based Slides</h2>
      <p className="text-2xl text-gray-300 mb-12">Build slides like building blocks</p>
      
      <div className="flex gap-8 mb-12">
        <div className="p-6 bg-blue-500/20 rounded-xl border border-blue-400/40">
          <div className="text-3xl mb-2">📁</div>
          <code className="text-lg">src/slides/</code>
        </div>
        
        <div className="text-4xl self-center">→</div>
        
        <div className="flex flex-col gap-3">
          <div className="px-4 py-2 bg-indigo-500/10 rounded font-mono text-sm">
            [1] - Title.jsx
          </div>
          <div className="px-4 py-2 bg-indigo-500/10 rounded font-mono text-sm">
            [2] - Features.jsx
          </div>
          <div className="px-4 py-2 bg-indigo-500/10 rounded font-mono text-sm">
            [3] - Demo.jsx
          </div>
        </div>
      </div>

      <div className="p-6 bg-white/5 rounded-xl border border-indigo-400/30 max-w-2xl">
        <p className="text-xl text-center">
          Drop a new <span className={keyBindClass}>*.jsx</span> file in <span className={keyBindClass}>src/slides/</span> and it's automatically included!
        </p>
      </div>
    </div>
  )
}

export function ComponentBasedDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">Slide Component API</h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="col-span-2 p-6 bg-indigo-500/10 rounded-xl border border-green-400/40">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Minimal Slide</h3>
          <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
{`export const order = 1

export default function MySlide() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1>Hello World!</h1>
    </div>
  )
}`}
          </pre>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-purple-400/40">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Vertical Sub-Slides</h3>
          <p className="text-gray-400">Export a <code className="text-purple-300">*Down</code> function to add drill-down content</p>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-yellow-400/40">
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Full React Power</h3>
          <p className="text-gray-400">Use hooks, state, effects — whatever you need!</p>
        </div>
      </div>
    </div>
  )
}
