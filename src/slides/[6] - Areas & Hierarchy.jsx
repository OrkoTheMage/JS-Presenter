import React from 'react'

export const order = 5

export default function OSPFAreas() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <img src='/AreaTopology.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-24 mr-30' />				
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">OSPF Areas & Hierarchy</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
       <li>You can likely see that LSDBs and Routing Tables will become large and filled with information if not properly <strong>segmented</strong>.</li>
        <li>OSPF allows for hierarchical design using <strong>areas</strong>, which are logical groupings of routers and links that share the same LSDB. Limiting the <strong>scope</strong> of LSAs and <strong>reducing</strong> the size of routing tables within each area.</li>
        <li>Through this hierarchical design, areas are connected to the <strong>backbone area (Area 0)</strong> through <strong>Area Border Routers (ABRs)</strong>, which summarize and filter routing information between areas.</li>
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