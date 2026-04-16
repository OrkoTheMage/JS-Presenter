import React from 'react'

export const order = 6

export default function OSPFSetup() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
          <h1 className="text-8xl text-center font-extrabold font-quantico">OSPF Configuration</h1>
        </div>
      </div>
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-6">Where OSPF runs</h2>
      <ul className="list-disc list-inside leading-relaxed text-lg marker:text-white space-y-2">
        <li><strong>Routers / L3 switches:</strong> OSPF is typically enabled on routers and layer-3 switches.</li>
        <li><strong>Virtual routers:</strong> OSPF can run in virtual appliances or controllers for cloud and virtualized networks.</li>
        <li><strong>Support:</strong> Most enterprise OSes (Cisco IOS/IOS-XE, JunOS, FRR, Quagga, Linux) support OSPF.</li>
      </ul>
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-6">Basic Cisco example</h2>
      <pre className="bg-black/5 p-4 rounded text-sm text-white">
{`router ospf 1
 network 10.0.0.0 0.0.0.255 area 0
 network 10.0.1.0 0.0.0.255 area 1
 passive-interface default
 no passive-interface GigabitEthernet0/0
`}
      </pre>
      <h3 className="text-xl font-medium mt-4">Quick verification</h3>
      <ul className="list-disc list-inside leading-relaxed text-lg marker:text-white space-y-2">
        <li><strong>Neighbors:</strong> <code>show ip ospf neighbor</code></li>
        <li><strong>Database:</strong> <code>show ip ospf database</code></li>
        <li><strong>Routes:</strong> <code>show ip route ospf</code></li>
      </ul>
    </div>
  )
}
