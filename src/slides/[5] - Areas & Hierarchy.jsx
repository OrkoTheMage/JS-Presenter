import React from 'react'

export const order = 5

export default function OSPFAreas() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">OSPF Areas & Hierarchy</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li><strong>Backbone (Area 0):</strong> central transit area to which all other normal areas should connect.</li>
        <li><strong>Area types:</strong> standard, stub, totally-stubby, and NSSA—used to control external route flooding and summarization.</li>
        <li><strong>Hierarchy benefits:</strong> reduces routing table size and SPF computation by confining LSAs to areas where possible.</li>
        <li><strong>Inter-area routing:</strong> ABRs summarize and redistribute routes between areas; ASBRs advertise external routes into OSPF.</li>
      </ul>
    </div>
  )
}

export function OSPFAreasDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">Area Design Considerations</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li>Avoid too many routers per area to keep SPF runtime reasonable.</li>
        <li>Use summarization on ABRs to limit LSA propagation across area boundaries.</li>
        <li>Design the backbone carefully; inter-area traffic must transit Area 0 (or use virtual links sparingly).</li>
      </ul>
    </div>
  )
}
