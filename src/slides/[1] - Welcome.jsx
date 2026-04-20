import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 1

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
        <h1 className="text-7xl text-white text-center font-extrabold font-quantico">Open Shortest Path First</h1>
      </div>
      <div className="flex flex-col gap-4">
        <section>
          <h2 className="text-5xl font-semibold mb-4 mt-12 font-quantico">This presentation will cover</h2>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
            <li><strong>Dynamic Routing:</strong> Why routing protocols exist and the problems they solve.</li>
            <li><strong>Link-State vs Distance-Vector:</strong> The core differences and trade-offs.</li>
            <li><strong>Neighbor Discovery:</strong> OSPF Hellos, neighbor states, and DR/BDR election.</li>
            <li><strong>LSDB & Flooding:</strong> LSAs, DBD/LSR/LSU/LSAck exchange and adjacency states to reach Full.</li>
            <li><strong>Areas & Hierarchy:</strong> Why areas exist and how they scale OSPF deployments.</li>
            <li><strong>OSPF Setup:</strong> Basic configuration, common timers, and practical tips.</li>
            <li><strong>Fun Facts & Resources:</strong> Gotchas, optimizations, and further reading + Q&amp;A.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-5xl mt-8 font-semibold mb-4 font-quantico">Controls</h2>
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
