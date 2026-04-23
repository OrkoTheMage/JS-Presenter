import React from 'react'
import { keyBindBlockClass } from '../styles/keybindClass.js'

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
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
















      <div className="w-full space-y-6">
        <section>
          <h4 className="text-2xl font-semibold mb-2">Backbone</h4>
          <div className="max-w-2xl">
            <h5 className="font-medium">Rtr1 — Backbone (area 0)</h5>
            <div className={keyBindBlockClass}>
{`router ospf 1
 network 10.0.0.0 0.0.255.255 area 0
 passive-interface default
 no passive-interface GigabitEthernet0/0
`}
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2">ABRs</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium">Rtr2 — ABR (area 0 &amp; 1)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 network 10.0.0.0 0.0.255.255 area 0
 network 172.16.0.0 0.0.0.255 area 1
 passive-interface default
 no passive-interface GigabitEthernet0/1
`}
              </div>
            </div>

            <div>
              <h5 className="font-medium">Rtr3 — ABR (area 0 &amp; 2)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 network 10.0.0.0 0.0.255.255 area 0
 network 192.168.0.0 0.0.0.255 area 2
 passive-interface default
 no passive-interface GigabitEthernet0/1
`}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-2xl font-semibold mb-2">Area routers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium">Rtr4 — Area 1 (172.16.0.0/24)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 network 172.16.0.0 0.0.0.255 area 1
 passive-interface default
 no passive-interface GigabitEthernet0/0
`}
              </div>
            </div>

            <div>
              <h5 className="font-medium">Rtr5 — Area 2 (192.168.0.0/24)</h5>
              <div className={keyBindBlockClass}>
{`router ospf 1
 network 192.168.0.0 0.0.0.255 area 2
 passive-interface default
 no passive-interface GigabitEthernet0/0
`}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
