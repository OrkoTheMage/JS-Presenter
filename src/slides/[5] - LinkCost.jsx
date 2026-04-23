import React, { useEffect } from 'react'
import { preloadImage } from '../utils/imagePreloader'
import { keyBindClass } from '../styles/keybindClass'
import SideNote from '../components/SideNote'

export const order = 5
const sideNoteProps = {
	title: 'Interface Cost Values:',
	title2: 'Hover For Details',
	title2Hover: 'Here are the default Cost values for each interface type',
	contents: [
		{ text: <>Gigabit Ethernet Interface <strong className="ml-2">1</strong></> },
		{ text: <>Fast Ethernet Interface <strong className="ml-2">1</strong></> },
		{ text: <>Ethernet Interface <strong className="ml-2">10</strong></> },
		{ text: <>DS1 <strong className="ml-2">64</strong></> },
		{ text: <>DSL <strong className="ml-2">133</strong></> },
	],
}

export default function LinkCost() {
	useEffect(() => {
		preloadImage('/CostTopology.png')
	}, [])

	return (
		<>
			<div className="relative flex flex-col items-start justify-center text-left h-full gap-6 text-white">
				<h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">Link Cost Metric</h2>
					<ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
						<li>Now that we have gone over link-state routing, let's discuss how OSPF calculates the shortest path with the lowest <strong>cost</strong>.</li>
						<li>OSPF uses a cost metric based on the <strong>bandwidth</strong> of the links, where <span className={keyBindClass}>cost = reference bandwidth / link bandwidth</span></li>
						<li>The <strong>reference bandwidth</strong> is a configurable value that, by default, is often set to 100 Mbps on many vendors.</li>
						<li><strong>Lower cost paths</strong> are preferred, so OSPF will choose the route with the lowest total cost (sum of link costs) when multiple paths are available.</li>
					</ul>
				</div>
		</>
	)
}

export function LinkCostDown() {
	useEffect(() => {
		preloadImage('/CostTable.png')
		preloadImage('/CostTopology.png')
	}, [])

	return (
		<>
			<div className="relative flex flex-col items-start justify-center text-left h-full gap-6 text-white">
				<img src='/CostTopology.png' alt='Routing Protocols' className='max-w-4xl self-center transform scale-140 mb-24 mr-30' />			
				<h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">Path Cost Sum</h2>
					<ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
					<li>In this example, we have five routers. R1 wants to add the <span className={keyBindClass}>10.2.0.0</span> network to its routing table.</li>
					<li>It has three possible paths to reach the network:</li>
						<ul className="list-[circle] ml-8 list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
							<li>R1 → R4 → R3 with a total cost of <strong>20</strong></li>
							<li>R1 → R2 → R3 with a total cost of <strong>20</strong></li>
							<li>R1 → R5 → R3 with a total cost of <strong>2</strong></li>
						</ul>
					<li>OSPF will choose the path with the lowest total cost, which in this case is R1 → R5 → R3 with a total cost of <strong>2</strong>. R1 will then add R5 to its routing table.</li>
					</ul>
				</div>
				<SideNote {...sideNoteProps} />
		</>
	)
}
