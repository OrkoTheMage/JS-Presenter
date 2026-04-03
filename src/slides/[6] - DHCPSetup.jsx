import React from 'react'

import { keyBindClass, keyBindBlockClass } from '../styles/keybindClass'

export const order = 6

export default function DHCPSetup() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-black dark:border-black">
          <h1 className="text-8xl text-center font-extrabold font-covered">DHCP Set-up</h1>
        </div>
      </div>
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-6">What runs DHCP?</h2>
      <ul className="list-disc list-inside leading-relaxed text-lg marker:text-black space-y-2">
        <li><strong>Routers:</strong> Small offices or edge devices (Cisco/Juniper) can serve DHCP.</li>
        <li><strong>Windows Servers:</strong> Microsoft DHCP role with GUI and failover options.</li>
        <li><strong>Linux Servers:</strong> ISC DHCP or dnsmasq for flexible, scriptable scopes.</li>
      </ul>
      <p className="text-lg">
        DHCP can run on any dedicated server, virtual machine, or integrated into network edge devices such as 
        Layer-3 routers or multilayer switches. The choice depends on the network size, performance needs, and 
        administrative preferences.
      </p>
      <p className="text-lg">
        For small networks, a router-based DHCP is common, while larger environments 
        often use dedicated servers for better management and scalability.
      </p>
    </div>
  )
}

export function DHCPSetupDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <h2 className="text-5xl font-semibold font-covered mb-2">Cisco Commands</h2>
      <h3 className="text-xl font-medium mb-4">Here is a step-by-step guide for setting up DHCP on a Cisco device:</h3>
        <ol className="list-decimal list-inside leading-relaxed text-lg marker:text-black space-y-2 ">
        <li>
          <strong>Enter interface and assign IP:</strong>
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">            
            <li>Configure the SVI or physical interface that will be the default gateway for clients.</li>
          </ul>
        </li>
        <li>
          <strong>Bring interface up:</strong>
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">            
            <li>Ensure interface is not administratively down.</li>
          </ul>
        </li>
        <li>
          <strong>Exclude static addresses:</strong>
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
            <li><span className={keyBindClass}>ip dhcp excluded-address &lt;start&gt; &lt;end&gt;</span> — reserve addresses to exclude from the pool</li>
          </ul>
        </li>
        <li>
          <strong>Create a DHCP pool:</strong>
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 mt-2 space-y-1">
            <li><span className={keyBindClass}>ip dhcp pool &lt;name&gt;</span> — create/enter the DHCP pool configuration</li>
            <li><span className={keyBindClass}>network &lt;network&gt; &lt;mask&gt;</span> — set the pool's network and subnet mask</li>
            <li><span className={keyBindClass}>default-router &lt;gateway&gt;</span> — configure the gateway (default route) for clients</li>
            <li><span className={keyBindClass}>dns-server &lt;dns&gt;</span> — assign DNS servers to clients</li>
          </ul>
        </li>
        <li><strong>Verify leases:</strong> check bindings to confirm clients receive addresses.</li>
      </ol>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-sm items-start">
        <div>
          <div className="text-2xl font-medium mt-6 mb-2">SVI / Interface</div>
          <div>
            <pre className={`${keyBindBlockClass} whitespace-pre p-2`}>{InterfaceConfig}</pre>
          </div>
        </div>

        <div>
          <div className="text-2xl font-medium mt-6 mb-2">DHCP Pool</div>
          <div>
            <pre className={`${keyBindBlockClass} whitespace-pre p-2`}>{DHCPPoolConfig}</pre>
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center mt-6">
          <div className="text-2xl font-medium mt-6 mb-2 text-center">Verification</div>
          <pre className={`${keyBindClass} p-2`}>show ip dhcp binding</pre>
        </div>
      </div>
    </div>
  )
}

const InterfaceConfig = `int fa0/0
ip address 10.0.0.1 255.255.255.0
no shut
exit


`

const DHCPPoolConfig = `ip dhcp excluded-address 10.0.0.1 10.0.0.10
ip dhcp pool POOL
network 10.0.0.0 255.255.255.0
default-router 10.0.0.1
dns-server 8.8.8.8 1.1.1.1
exit`
