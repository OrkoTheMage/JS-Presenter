import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 1

export default function Welcome() {
  
  return (
    <div className="flex flex-col items-center justify-center text-left h-full gap-8">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-black dark:border-black">
          <h1 className="text-8xl text-center font-extrabold font-covered">Dynamic Host Configuration Protocol</h1>
      </div>

      <div className="max-w-3xl w-full space-y-6 mt-6">
        <section>
          <h2 className="text-5xl font-semibold mb-2 font-covered">This presentation will cover</h2>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">
            <li>IPv4 address assignment and addressing basics</li>
            <li>DORA: Discover, Offer, Request, Acknowledge message flow</li>
            <li>Lease lifecycle and leasing behavior</li>
            <li>DHCP scopes, ranges, and reservations</li>
            <li>Server setup and configuration</li>
            <li>Fun facts and Q&amp;A</li>
          </ul>
        </section>

        <section>
          <h2 className="text-5xl font-semibold mb-2 font-covered">Controls</h2>
            <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">
            <li><span className={keyBindClass}>←</span> <span className={keyBindClass}>→</span> : Next / Previous slide</li>
            <li><span className={keyBindClass}>↑</span> <span className={keyBindClass}>↓</span> : Move down / up into sub-slides</li>
            <li><span className={keyBindClass}>Esc</span> : Toggle overview grid</li>
            <li><span className={keyBindClass}>D</span> : Toggle drawing mode</li>
            <li><span className={keyBindClass}>C</span> : Clear drawings</li>
            <li>... Or use the controllers/buttons within the UI</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export function WelcomeDown() {
  return (
    <div className="flex flex-col items-center justify-center text-left h-full gap-8">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-black dark:border-black">
          <h1 className="text-8xl text-center font-extrabold font-covered">Tech Stack</h1>
      </div>
      <div className="max-w-3xl w-full space-y-6 mt-6">
        <section>
          <h2 className="text-5xl font-semibold font-covered mb-2">Core</h2>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-black">
            <li>React — UI library with hooks and JSX</li>
            <li>Vite — fast dev server and build tooling</li>
            <li>Tailwind CSS + PostCSS — utility-first styling</li>
            <li>Emotion CSS — component-scoped styles</li>
          </ul>
        </section>
      </div>
    </div>
  )
}



