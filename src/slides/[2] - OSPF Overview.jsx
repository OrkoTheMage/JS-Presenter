import React from 'react'

export const order = 2

export default function OSPFOverview() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">OSPF — Open Shortest Path First</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li><strong>What is OSPF:</strong> a fast, link-state IGP used to advertise routes within an autonomous system.</li>
        <li><strong>Link-state model:</strong> routers flood link-state advertisements (LSAs) and build a common LSDB (link-state database).</li>
        <li><strong>Shortest Path First:</strong> each router runs Dijkstra on the LSDB to build its routing table.</li>
        <li><strong>When to use:</strong> medium-to-large networks where fast convergence and hierarchical design are important.</li>
        <li><strong>High-level goals:</strong> scalability via areas, predictable convergence, and flexible traffic engineering.</li>
      </ul>
    </div>
  )
}
