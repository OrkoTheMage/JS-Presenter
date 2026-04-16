import React from 'react'

export const order = 4

export default function OSPFMessageFlow() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">OSPF Neighbor Discovery & Database Sync</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
        <li className="list-none font-medium mt-2">OSPF builds neighbor relationships and synchronizes LSDBs using a small set of packet types:</li>
        <li>
          <strong>Hello:</strong> used to discover neighbors and form adjacencies; carries timers and interface params.
        </li>
        <li>
          <strong>DB Description / LSReq / LSUpdate / LSACK:</strong> sequence used to exchange and acknowledge LSAs between neighbors.
        </li>
        <li>
          <strong>DR/BDR election:</strong> on multi-access networks a Designated Router and Backup reduce flooding overhead.
        </li>
        <li>
          <strong>Result:</strong> routers converge on a common LSDB and compute shortest paths with SPF.
        </li>
      </ul>
    </div>
  )
}
