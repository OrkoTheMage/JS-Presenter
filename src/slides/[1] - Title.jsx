import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 1

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="inline-block p-12 border-8 rounded-2xl bg-transparent border-white/50">
        <h1 className="text-8xl text-white text-center font-bold">JS Presenter</h1>
        <h2 className="text-2xl text-gray-300 text-center mt-6">Lightweight, Component-Based Slide Decks</h2>
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-xl text-gray-400 max-w-2xl">
          A modern presentation tool built with React + Vite. Create beautiful, 
          interactive slide decks with keyboard navigation, drawing tools, and more.
        </p>
      </div>

      <div className="mt-12 flex gap-6 text-lg">
        <span className={keyBindClass}>React</span>
        <span className={keyBindClass}>Vite</span>
        <span className={keyBindClass}>Tailwind</span>
        <span className={keyBindClass}>TypeScript</span>
      </div>
    </div>
  )
}

export function TitleDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h2 className="text-5xl font-bold mb-12">Why JS Presenter?</h2>
      
      <div className="grid grid-cols-2 gap-8 max-w-4xl">
        <div className="p-6 bg-white/10 rounded-xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">🎯 Purpose Built</h3>
          <p className="text-gray-300">Designed specifically for technical presentations, coding demos, and developer workflows.</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">⚡ Blazing Fast</h3>
          <p className="text-gray-300">Powered by Vite for instant hot reloads during development and optimized production builds.</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">🎨 Fully Customizable</h3>
          <p className="text-gray-300">Component-based architecture lets you style and extend every aspect of your slides.</p>
        </div>
        
        <div className="p-6 bg-white/10 rounded-xl border border-white/20">
          <h3 className="text-2xl font-semibold mb-4">⌨️ Keyboard Driven</h3>
          <p className="text-gray-300">Navigate hands-free with intuitive keyboard shortcuts for presentations.</p>
        </div>
      </div>
    </div>
  )
}
