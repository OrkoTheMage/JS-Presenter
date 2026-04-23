import React from 'react'
import { keyBindClass } from '../styles/keybindClass'

export const order = 6

export default function OSPFAreas() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <img src='/AreaTopology.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-24 mr-30' />				
      <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">OSPF Areas & Hierarchy</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
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
      <img src='/AreaTopology2.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-24 mr-30' />				
      <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">ABRs & Summaries</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
        <li>In this example, our <strong>ABRs</strong> are R2 and R3. They connect Area 0 to Areas 1 and 2.</li>
        <li>ABRs have interfaces in two or more areas which allow them to perform <strong>route summarization</strong> about their connected areas to and from Area 0.</li>
        <li>R2 will <strong>summarize</strong> the routes pertaining to the <span className={keyBindClass}>172.16.0.0/24</span> network and R3 will do the same for the <span className={keyBindClass}>192.168.0.0/24</span> network.</li>
        <li>This allows for a more efficient use of bandwidth and resources, as routers in Area 0 only need to maintain <strong>summarized routes</strong> rather than detailed information about every network in the other areas.</li>
      </ul>
    </div>
  )
}