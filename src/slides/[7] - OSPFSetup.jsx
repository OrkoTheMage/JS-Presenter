import React from 'react'
import { keyBindBlockClass, keyBindClass } from '../styles/keybindClass.js'

export const order = 7

export default function OSPFSetup() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
          <h1 className="text-7xl text-center font-extrabold font-quantico">OSPF Configuration</h1>
        </div>
      </div>
          <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">Cisco Commands</h2>
          <ol className="list-[decimal] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
            <li>Enter OSPF configuration mode: <span className={keyBindClass}>router ospf 1</span></li>
            <li>Set router ID: <span className={keyBindClass}>router-id 1.1.1.1</span></li>
            <li>Define network(s) and area(s): <span className={keyBindClass}>network 10.0.0.0 0.0.0.255 area 0</span></li>
          </ol>

      <div className="w-full space-y-4">
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
      <h2 className="text-5xl font-semibold mt-4 mb-4 font-quantico">OSPF Options</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-4">
        <li>OSPF has many options and features that can be configured to optimize performance, enhance security, and provide additional functionality.</li>
        <li>Some of these options include:</li>
        <ul className="list-[circle] ml-8 list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-3">
          <li>
            <strong>Process ID:</strong> A locally significant identifier for an OSPF instance; it lets a router run multiple OSPF processes and does not need to match other routers.
            <div className="ml-6 list-inside leading-relaxed text-lg space-y-2">
              <div><span className={keyBindClass}>router ospf 10</span> — starts OSPF process with ID 10</div>
            </div>
          </li>

          <li>
            <strong>Authentication:</strong> OSPF supports various authentication methods to secure routing updates and prevent unauthorized access.
            <div className="ml-6 list-inside leading-relaxed text-lg space-y-2">
              <div><span className={keyBindClass}>area 0 authentication message-digest</span></div>
              <div><span className={keyBindClass}>ip ospf message-digest-key 1 md5 YOUR_KEY</span></div>
            </div>
          </li>

          <li>
            <strong>Cost Manipulation:</strong> OSPF allows manual adjustment of interface costs to influence path selection. This is helpful for distinguishing between Gigabit and Fast Ethernet interfaces, which, by default, have the same cost.
            <div className="ml-6 list-inside leading-relaxed text-lg space-y-2">
              <div><span className={keyBindClass}>interface FastEthernet0/1</span></div>
              <div><span className={keyBindClass}>ip ospf cost 2</span></div>
            </div>
          </li>

          <li>
            <strong>Stub Areas:</strong> A type of area that does not receive external routes, which can help reduce routing overhead in certain scenarios.
            <div className="ml-6 list-inside leading-relaxed text-lg space-y-2">
              <div><span className={keyBindClass}>router ospf 1</span></div>
              <div><span className={keyBindClass}>area 1 stub</span></div>
            </div>
          </li>
        </ul>
      </ul>
    </div>
  )
}       