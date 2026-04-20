import React, { useEffect } from 'react'
import { preloadImage } from '../utils/imagePreloader'

export const order = 2

export default function DynamicRouting() {
  useEffect(() => {
    preloadImage('/RoutingProtocols.png')
  }, [])
  return (
    <div className="flex flex-col items-start justify-center text-left h-full text-white">
      <img src='/RoutingProtocols.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-150' />
      <div className='flex flex-col gap-4'>
        <h2 className=" text-5xl font-semibold font-quantico mb-4">Dynamic Routing — Concepts</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white markr:mr-2 space-y-3">
          <li><strong>What is a dynamic routing protocol?</strong> Software that lets routers discover topology and automatically exchange route information to build forwarding tables.</li>
          <li><strong>Scope (IGP vs EGP):</strong> IGPs run inside a single autonomous system (AS); EGPs operate between ASes to exchange routes at Internet scale.</li>
          <li><strong>Metric:</strong> The numeric value a protocol uses to prefer one path over another (examples: hop count, bandwidth+delay, link cost, path attributes).</li>
          <li><strong>Type:</strong> Algorithmic class describing behavior — distance-vector, link-state, hybrid/path-vector (drives how updates and convergence work).</li>
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
        <h2 className="text-5xl font-semibold font-quantico mb-4">Dynamic Routing — Specifics</h2>
        <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
          <li>
            <strong>RIP</strong> — Scope: IGP; Metric: Hop count (max 15); Type: Distance-vector. Simple, slow convergence, best for very small networks.
          </li>
          <li>
            <strong>EIGRP</strong> — Scope: IGP; Metric: Composite (bandwidth + delay, plus other factors); Type: Hybrid (advanced distance-vector). Cisco-proprietary with fast convergence.
          </li>
          <li>
            <strong>OSPF</strong> — Scope: IGP; Metric: Link cost (can be based on bandwidth); Type: Link-state. Scales using areas and converges efficiently in large topologies.
          </li>
          <li>
            <strong>BGP</strong> — Scope: EGP; Metric: Path attributes and policy rules (not a simple numeric metric); Type: Path-vector (policy-driven). Used between ASes for Internet routing.
          </li>
        </ul>
      </div>
    </div>
  )
}