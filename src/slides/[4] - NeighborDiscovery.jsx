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
          <li>In order to get to our goal of establishing adjacencies and synchronizing LSDBs, routers use <strong>Hello packets</strong> to discover and maintain neighbor relationships.</li>
          <li>Hello packets contain information such as the <strong>router's ID</strong>, <strong>neighbor list</strong>, <strong>hello/dead intervals</strong>, and other parameters necessary for adjacency formation and maintenance.</li>
          <li>Some of these parameters need to match between neighbors for an adjacency to form — this is called <strong>neighbor compatibility</strong>.</li>
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