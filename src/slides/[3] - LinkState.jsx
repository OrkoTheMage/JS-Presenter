import React, { useEffect } from 'react'
import { preloadImage } from '../utils/imagePreloader'

export const order = 3

export default function LSA() {
  useEffect(() => {
    preloadImage('/LSA.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/LSA.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-150 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Link-State — LSAs</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>LSA (Link-State Advertisement):</strong> A packet describing a router's local links (link IDs/types/metrics), router ID, sequence number and age — see diagram labels.</li>
          <li><strong>Origination & Flooding:</strong> Each router originates LSAs for its links and reliably floods them to all routers in the area to distribute topology info.</li>
          <li><strong>Synchronization:</strong> Sequence numbers and age fields prevent stale data; routers request newer LSAs when mismatches are detected.</li>
          <li><strong>Purpose:</strong> LSAs populate the LSDB (topology map) which is used as the input to SPF/Dijkstra to compute shortest paths.</li>
        </ul>
      </div>
    </div>
  )
}

export function LSADown() {
  useEffect(() => {
    preloadImage('/LSDB.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/LSDB.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-150 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Link-State — LSDB</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>LSDB (Link-State Database):</strong> The aggregated set of LSAs held by a router for an area — a complete topology database (see diagram contents).</li>
          <li><strong>Consistency:</strong> Routers compare LSAs (sequence numbers/age) and exchange DB descriptions/requests to converge on the same LSDB.</li>
          <li><strong>Role in routing:</strong> The LSDB is the graph input for SPF (Dijkstra); SPF runs on the LSDB to produce the routing table (RIB/FIB).</li>
          <li><strong>Operational notes:</strong> LSDB is per-area (for link-state protocols like OSPF); stale or conflicting LSAs are resolved via seq/age and LSA refresh.
          </li>
        </ul>
      </div>
    </div>
  )
}
