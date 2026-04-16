import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 1

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
        <h1 className="text-7xl text-white text-center font-extrabold font-quantico">Open Shortest Path First</h1>
      </div>
            <div className="max-w-3xl w-full space-y-6 mt-6">
        <section>
          <h2 className="text-5xl font-semibold mb-2 font-quantico">This presentation will cover</h2>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2">
            <li>Thing about OSPF 1</li>
            <li>Thing about OSPF 2</li>
            <li>Thing about OSPF 3</li>           
            <li>Thing about OSPF 4</li>
            <li>Fun facts and Q&amp;A</li>
          </ul>
        </section>

        <section>
          <h2 className="text-5xl font-semibold mb-2 font-quantico">Controls</h2>
            <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2">
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



