import React, { useEffect, useState } from 'react'
import { preloadImage, preloadImages } from '../utils/imagePreloader'
import HelloPacketNote from '../components/HelloPacketNote'

export const order = 4

export default function NeighborDiscovery() {
  useEffect(() => {
    preloadImage('/HelloPacket.png')
  }, [])
  return (
    <div className="relative flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/HelloPacket.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-40 mr-40' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Neighbor Discovery — Hello</h2>
        <div className="flex gap-8 items-start">
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
            <li>In order to get to our goal of establishing adjacencies and synchronizing LSDBs, routers use <strong>Hello packets</strong> to discover and maintain neighbor relationships.</li>
            <li>Hello packets contain information such as the <strong>router's ID</strong>, <strong>neighbor list</strong>, <strong>hello/dead intervals</strong>, and other parameters necessary for adjacency formation and maintenance.</li>
            <li>Some of these parameters need to match between neighbors for an adjacency to form — this is called <strong>neighbor compatibility</strong>.</li>
            <li>Routers start in the <strong>Down</strong> state, after receiving a Hello they transition to the <strong>Init</strong> state, then the <strong>2-Way</strong> state occurs after bidirectional communication is established.</li>
          </ul>
        </div>
      </div>
      <HelloPacketNote />
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
          <li>After 2-way communication is established, routers participate in the <strong>DR (Designated Router) & BDR (Backup Designated Router)</strong> election process.</li>
          <li>The DR is responsible for <strong>generating and flooding LSAs</strong> on the multi-access network, while the BDR takes over if the DR fails.</li>
          <li>Routers with higher <strong>priority</strong> are preferred in the election, and if priorities are equal (by default) the router with the higher <strong>Router ID</strong> wins.</li>
          <li>After the election, routers transition into the <strong>Exstart</strong> state to begin the database synchronization process.</li>
        </ul>
      </div>
    </div>
  )
}

export function NeighborDiscoveryDown2() {
  useEffect(() => {
    preloadImages(['/Complete.png', '/LSDB.png'])
  }, [])
  const [imgSrc, setImgSrc] = useState('/Complete.png')
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img
        src={imgSrc}
        alt='Routing Protocols'
        className={`max-w-4xl self-center transform ${imgSrc === '/LSDB.png' ? 'scale-150' : 'scale-140'} mb-40 mr-40 cursor-pointer`}
        onClick={() => setImgSrc(prev => prev === '/Complete.png' ? '/LSDB.png' : '/Complete.png')}
      />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Adjacency — Database Sync</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li>The last stages of adjacency formation involve database synchronization, where routers exchange LSDB information to ensure consistency.</li>
          <li>Routers transition through the <strong>Exchange</strong> state, where they exchange <strong>DBD (Database Description)</strong> packets to summarize LSDB contents.</li>
          <li>During the subsequent <strong>Loading</strong> state, routers use <strong>LSR (Link State Request)</strong> to ask for missing LSAs, receive them via <strong>LSU (Link State Update)</strong>, and confirm receipt with <strong>LSAck (Link State Acknowledgment)</strong>.</li>
          <li>Finally, once all necessary LSAs are received and the LSDBs are fully synchronized, routers transition to the <strong>Full</strong> state, indicating a fully established adjacency.</li>
        </ul>
      </div>
    </div>
  )
}