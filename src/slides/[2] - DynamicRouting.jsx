import React, { useEffect } from 'react'
import { preloadImage } from '../utils/imagePreloader'

export const order = 2

export default function DynamicRouting() {
  useEffect(() => {
    preloadImage('/RoutingProtocols.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Dynamic Routing</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>What is a dynamic routing protocol?</strong> Software that lets routers discover topology and automatically exchange route information to build forwarding tables.</li>
          <li><strong>Scope:</strong> The scope of a routing protocol determines where it operates</li>
            <ul className="list-[circle] ml-8 list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
              <li><strong>IGP</strong> (Interior Gateway Protocol) — Operates within a single autonomous system (AS)</li>
              <li><strong>EGP</strong> (Exterior Gateway Protocol) — Operates between autonomous systems (ASes)</li>
            </ul>
          <li><strong>Metric:</strong> The numeric value a protocol uses to prefer one path over another and find its best path.</li>
          <li><strong>Type:</strong> An algorithmic class describing a routing protocol's behavior and how it updates and converges.</li>
        </ul>
      </div>
    </div>
  )
}

export function DynamicRoutingDown() {
  useEffect(() => {
    preloadImage('/RoutingProtocols.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/RoutingProtocols.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-150' />
      <div className='flex flex-col gap-4'>
        <h2 className="text-5xl font-semibold font-quantico mb-4">Routing Protocols</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
          <li>
            <strong>RIP</strong> — a simple, slow convergence, routing IGP protocol with a hop-count metric and distance-vector algorithm. Best for very small networks.
          </li>
          <li>
            <strong>EIGRP</strong> — a Cisco-proprietary hybrid IGP protocol that uses a composite metric (bandwidth, delay, reliability, load) and diffusing update algorithm for faster convergence than RIP.
          </li>
          <li>
            <strong>OSPF</strong> — a widely used link-state IGP protocol that uses cost (based on bandwidth) as its metric and a SPF (Shortest Path First) algorithm for fast convergence and scalability within an AS. This is the main focus of our presentation.
          </li>
          <li>
            <strong>BGP</strong> — the de facto EGP protocol that uses path vector algorithm and a rich set of attributes to make routing decisions between ASes on the Internet.
          </li>
        </ul>
      </div>
    </div>
  )
}