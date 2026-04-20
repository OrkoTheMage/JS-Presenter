import React, { useEffect } from 'react'
import { preloadImage, preloadImages } from '../utils/imagePreloader'

export const order = 4

export default function NeighborDiscovery() {
  useEffect(() => {
    preloadImage('/HelloPacket.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/HelloPacket.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Neighbor Discovery — Hello</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>Hello Packet Contents:</strong> Hellos carry the sender's Router ID, Priority, HelloInterval, DeadInterval, Options field, and neighbor list.</li>
          <li><strong>Router ID & Priority:</strong> The RID identifies the router; the priority helps elect DR/BDR on multi-access networks.</li>
          <li><strong>Timers (Hello/Dead):</strong> `HelloInterval` controls how often Hellos are sent; `DeadInterval` determines when a neighbor is declared down.</li>
          <li><strong>Options & Mask:</strong> The Options field (and network mask where applicable) advertise capabilities and subnet information used during adjacency decisions.</li>
          <li><strong>Neighbor & DR/BDR Fields:</strong> Hellos list seen neighbors and include current DR/BDR info — this directly drives DR/BDR election and the transition to 2-Way/adjacency states.</li>
        </ul>
      </div>
    </div>
  )
}

export function NeighborDiscoveryDown() {
  useEffect(() => {
    preloadImage('/DR&BDR.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/DR&BDR.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">DR / BDR Election</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>Election Purpose:</strong> On broadcast networks a DR and BDR are elected to reduce flooding and centralize LSDB exchange.</li>
          <li><strong>Election Criteria:</strong> Highest interface priority wins; ties broken by highest Router ID (RID).</li>
          <li><strong>Adjacency Behavior:</strong> Full adjacencies are typically formed with the DR/BDR; non-DR routers remain 2-Way with each other.</li>
          <li><strong>Hellos Carry Info:</strong> Hello packets include neighbor lists and priority/RID used in election and state decisions.</li>
        </ul>
      </div>
    </div>
  )
}

export function NeighborDiscoveryDown2() {
  useEffect(() => {
    preloadImage('/Complete.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/Complete.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Adjacency — Database Sync</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>DB Exchange:</strong> After 2-Way, routers exchange database description (DBD) packets to summarize LSDB contents.</li>
          <li><strong>Detail Sync:</strong> Routers request missing entries with LSRs and respond with LSUs; LSAcks confirm receipt.</li>
          <li><strong>Adjacency States:</strong> The adjacency progresses Exchange → Loading → Full as LSDBs synchronize.</li>
          <li><strong>Completion:</strong> When Full, both routers have consistent LSDBs and can forward/route using the updated topology.</li>
        </ul>
      </div>
    </div>
  )
}