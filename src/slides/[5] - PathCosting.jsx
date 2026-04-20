import React, { useEffect } from 'react'
import { preloadImage } from '../utils/imagePreloader'

export const order = 5

export default function PathCosting() {
	useEffect(() => {
		preloadImage('/Costing.png')
	}, [])

	return (
		<div className="flex flex-col items-start justify-center text-left h-full gap-6 text-white">
			<h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">Path Costing</h2>
			<ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
				<li><strong>Metric:</strong> OSPF uses <strong>cost</strong> as its path metric — lower cost is preferred.</li>
				<li><strong>Interface-based</strong>: Each interface is assigned a cost (typically derived from bandwidth); path cost is the <strong>sum</strong> of per-link costs along the path.</li>
				<li><strong>Default calculation:</strong> cost = referenceBandwidth / interfaceBandwidth (referenceBandwidth is vendor-configurable).</li>
				<li><strong>Impact:</strong> Changing interface bandwidth or reference bandwidth can change route selection — use summarization and design to control path selection.</li>
			</ul>
			<img src="/Costing.png" alt="Path Costing" className="max-w-4xl self-center transform scale-125 mt-6" />
		</div>
	)
}

export function PathCostingExample() {
	useEffect(() => {
		preloadImage('/CostTable.png')
	}, [])

	return (
		<div className="flex flex-col items-start justify-center text-left h-full gap-6 text-white">
			<h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">Cost Example</h2>
			<ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
				<li>Reference bandwidth = <strong>100 Mbps</strong> (default on many vendors).</li>
				<li>Link A (10 Mbps) → cost = 100 / 10 = <strong>10</strong></li>
				<li>Link B (100 Mbps) → cost = 100 / 100 = <strong>1</strong></li>
				<li>Path selection chooses the route with the <strong>lowest total cost</strong> (sum of link costs).</li>
			</ul>
			<img src="/CostTable.png" alt="Cost Table" className="max-w-2xl self-center transform scale-110 mt-6" />
		</div>
	)
}
