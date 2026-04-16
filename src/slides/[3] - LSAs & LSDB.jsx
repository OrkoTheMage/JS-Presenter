import React from 'react'

export const order = 3

export default function LSAs() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">LSAs & the Link-State Database</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li><strong>LSA (Link-State Advertisement):</strong> the fundamental unit of topology information in OSPF.</li>
        <li><strong>LSA types:</strong> Router-LSAs, Network-LSAs, Summary-LSAs, AS-external LSAs, and others.</li>
        <li><strong>LSDB:</strong> every OSPF router keeps a synchronized link-state database built from LSAs it has received.</li>
        <li><strong>Flooding & sequence numbers:</strong> LSAs are flooded reliably; sequence numbers and age prevent stale information.</li>
        <li><strong>Consequence:</strong> consistent LSDBs allow each router to compute shortest paths independently.</li>
      </ul>
    </div>
  )
}

export function LSADown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">LSA Flooding & Aging</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li>LSAs are flooded to all OSPF neighbors; acknowledgements ensure reliable delivery.</li>
        <li>LSA headers carry age, type, sequence number and checksum to manage lifetime and updates.</li>
        <li>When topology changes, new LSAs are generated and redistributed to converge the network.</li>
      </ul>
    </div>
  )
}
