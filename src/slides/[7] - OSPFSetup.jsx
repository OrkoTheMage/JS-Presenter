import React from 'react'
import { keyBindBlockClass, keyBindClass } from '../styles/keybindClass.js'

export const order = 6

export default function OSPFSetup() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
          <h1 className="text-7xl text-center font-extrabold font-quantico">OSPF Configuration</h1>
        </div>
      </div>
          <h2 className="text-5xl font-semibold mb-4 mt-12 font-quantico">Cisco Commands</h2>
          <ol className="list-[decimal] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
            <li>Enter OSPF configuration mode: <code>router ospf 1</code></li>
            <li>Set router ID: <code>router-id 1.1.1.1</code></li>
            <li>Define network(s) and area(s): <code>network 10.0.0.0 0.0.0.255 area 0</code></li>
          </ol>
















      <div className="w-full space-y-6">
        <section>
          <h4 className="text-2xl font-semibold mb-2">Backbone</h4>
          <div className="max-w-2xl">
            <h5 className="font-medium">Rtr1 — Backbone (area 0)</h5>
            <div className="max-w-md">
              <div className={keyBindBlockClass}>
{`router ospf 1
 router-id 1.1.1.1
 network 10.0.0.0 0.0.255.255 area 0
`}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2">ABRs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium">R2 — ABR (area 0 &amp; 1)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 router-id 2.2.2.2
 network 10.0.0.0 0.0.255.255 area 0
 network 172.16.0.0 0.0.0.255 area 1
`}
              </div>
            </div>

            <div>
              <h5 className="font-medium">R3 — ABR (area 0 &amp; 2)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 router-id 3.3.3.3
 network 10.0.0.0 0.0.255.255 area 0
 network 192.168.0.0 0.0.0.255 area 2
`}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2">Area Routers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium">R4 — Area 1 (172.16.0.0/24)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 router-id 4.4.4.4
 network 172.16.0.0 0.0.0.255 area 1
`}
              </div>
            </div>

            <div>
              <h5 className="font-medium">R5 — Area 2 (192.168.0.0/24)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 router-id 5.5.5.5
 network 192.168.0.0 0.0.0.255 area 2
`}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export function OSPFSetupDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <h2 className="text-5xl font-semibold font-quantico mb-2 mt-4">OSPF Options</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
        <li>OSPF has many options and features that can be configured to optimize performance, enhance security, and provide additional functionality.</li>
        <li>Some of these options include:</li>
        <ul className="list-[circle] ml-8 list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
          <li><strong>Authentication:</strong> OSPF supports various authentication methods to secure routing updates and prevent unauthorized access.</li>
          <li><strong>Route Summarization:</strong> ABRs can summarize routes between areas to reduce the size of routing tables and improve efficiency.</li>
          <li><strong>Virtual Links:</strong> Used to connect discontiguous areas to the backbone area (Area 0) when direct connectivity is not possible.</li>
          <li><strong>Stub Areas:</strong> A type of area that does not receive external routes, which can help reduce routing overhead in certain scenarios.</li>
        </ul>
      </ul>
    </div>
  )
}      