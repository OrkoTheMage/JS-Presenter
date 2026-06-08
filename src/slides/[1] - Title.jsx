import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 1

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <div className="inline-block p-12 border-8 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border-indigo-400/50 backdrop-blur-sm">
        <h1 className="text-8xl text-gray-100 text-center font-bold">JS Presenter</h1>
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
