import React from 'react'

export const order = 2
export const images = ['/StaticAssignment.png','/DynamicAssignment.png']

export default function IPv4Assignment() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/StaticAssignment.png" alt="Diagram" className="w-full h-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">IPv4 Static Assignment</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
        <li>Every device on a network will have an <strong>IP address</strong></li>
        <li>The two ways an device gets an IP address are <strong>static assignment</strong> and <strong>dynamic assignment</strong></li>
        <li>Static assignment involves manually configuring the IP address on the device</li>
        <li>This is done by specifying the <strong>IP address</strong>, <strong>subnet mask</strong>, <strong>default gateway</strong>, and <strong>DNS servers</strong></li>
        <li>Static assignment is simple and works well for small networks</li>
        <li>However, it can be time-consuming and error-prone to manage on larger networks</li>
      </ul>
    </div>
  )
}

export function IPv4AssignmentDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DynamicAssignment.png" alt="Diagram" className="w-full h-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">IPv4 Dynamic Assignment</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
        <li>This is why we see most often dedicated servers, network routers or gateways running <strong>DHCP</strong>.</li>
        <li>DHCP allows for dynamic assignment, enabling devices to automatically obtain an IP address</li>
        <li>Simplifying network management by reducing the need for manual configuration</li>
        <li>It also allows for efficient use of IP addresses by reusing them when devices disconnect</li>
        <li>This process is called <strong>leasing</strong>, where a device is given an IP address for a specific period of time</li>
      </ul>
    </div>
  )
}
 
 