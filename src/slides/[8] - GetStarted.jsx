import React from 'react'
import RepoLink from '../components/RepoLink.jsx'
import { keyBindClass } from '../styles/keybindClass'

export const order = 8

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <div className="inline-block p-12 border-8 rounded-2xl bg-transparent border-white/50 mb-12">
        <h1 className="text-7xl text-gray-100 text-center font-bold">Get Started</h1>
      </div>
      
      <div className="text-center mb-8">
        <p className="text-2xl text-gray-300 max-w-2xl">
          Ready to create your first presentation? It's as simple as adding a component.
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <span className={keyBindClass}>git clone</span>
        <span className={keyBindClass}>npm install</span>
        <span className={keyBindClass}>npm run dev</span>
      </div>

      <div className="p-6 bg-white/5 rounded-xl border border-indigo-400/30 mb-8">
        <p className="text-xl text-center text-gray-300">
          Add your slides to <span className={keyBindClass}>src/slides/</span> and they're automatically loaded!
        </p>
      </div>

      <RepoLink repoLink="https://github.com/OrkoTheMage/js-presenter" />

    </div>
  )
}

export function GetStartedDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">Quick Reference</h2>
      
      <div className="grid grid-cols-2 gap-6 max-w-3xl w-full">
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4 text-green-400">File Structure</h3>
          <pre className="text-sm text-gray-300">
{`src/
├── slides/        # Your slides here
├── components/    # Reusable components
├── styles/        # Global styles
├── utils/         # Utility functions
└── App.jsx        # Main app`}
          </pre>
        </div>
        
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Slide Template</h3>
          <pre className="text-xs text-gray-300 overflow-x-auto whitespace-pre">
{`export const order = 1

export default function Slide() {
  return <div>Hello!</div>
}

export function SlideDown() {
  return <div>More...</div>
}`}
          </pre>
        </div>
        
        <div className="col-span-2 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Available Components</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div><code className="text-purple-300">SideNote</code> - Hover panels</div>
            <div><code className="text-purple-300">RepoLink</code> - Clickable repo</div>
            <div><code className="text-purple-300">ProgressTracker</code> - Progress bar</div>
            <div><code className="text-purple-300">VerticalTracker</code> - Sub-slide nav</div>
            <div><code className="text-purple-300">DrawingOverlay</code> - Drawing</div>
            <div><code className="text-purple-300">OverviewGrid</code> - Slide overview</div>
          </div>
        </div>
      </div>
    </div>
  )
}
