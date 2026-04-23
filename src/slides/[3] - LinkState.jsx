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
        <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">Link-State — LSAs</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-4">
          <li><strong>What is Link State?</strong> OSPF build a complete topology map (LSDB) populated by LSAs and keep them up-to-date.</li>
          <li><strong>LSAs (Link-State Advertisments)</strong> are the packets used to share that link-state information between routers.</li>
          <li>Each router originates LSAs for its links and reliably <strong>floods</strong> them to all routers in the area to distribute topology info building the LSDB.</li>
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
        <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">Link-State — LSDB</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-4">
          <li><strong>LSDB (Link-State Database)</strong> is the aggregated set of LSAs held by a router for an area — a complete topology database.</li>
          <li>Routers compare LSAs and exchange DB descriptions/requests to converge on the same, <strong>identical</strong>, LSDB.</li>
          <li>Once LSDBs are synchronized, routers can run <strong>SPF (Shortest Path First)</strong> algorithm to compute shortest paths and populate their routing tables.</li>
          <li><strong>This is the final goal of link-state routing</strong> — to have a consistent, accurate view of the network for optimal path calculation.</li>
        </ul>
      </div>
    </div>
  )
}
