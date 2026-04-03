import React from 'react'

export const order = 5

export default function DHCPScope() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DHCPScope.png" alt="Diagram" className="w-full h-auto max-w-[1100px] mx-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">DHCP Scope</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">
        <li> DHCP server assines IP addresses to clients from a defined range called a <strong>scope</strong></li>
        <li>A scope is a <strong>pool of IP addresses</strong> that the DHCP server can assign to clients</li>
        <li>Scopes are defined by an IP address <strong>range</strong> from the start to the end address and a subnet mask</li>
        <li className="mt-6 font-medium list-none">For example, a scope might be defined as:
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">            
            <li><strong>Start IP:</strong> 10.0.0.1</li>
            <li><strong>End IP:</strong> 10.0.0.100</li>
            <li><strong>Subnet Mask:</strong> 255.255.255.0</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export function DHCPScopeDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DHCPReservation.png" alt="Reservations" className="w-full h-auto max-h-[600px] object-contain mx-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">DHCP Reservations</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
        <li>A DHCP <strong>reservation</strong> is a specific IP address within a scope that is reserved for a particular client</li>
        <li>Reservations ensure that a client always receives the same IP when it connects to the network</li>
        <li>Reservations are typically based on the client's MAC address, and <strong>excluded</strong> from the DHCP pool</li>
        <li className="!mt-6 font-medium list-none">For example, we can make these devices static by reserving their IPs:
          <ul className="list-[square] ml-6 list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">            
            <li><strong>Default Gateway:</strong> 10.0.0.1</li>
            <li><strong>Core Switch 1:</strong> 10.0.0.2</li>
            <li><strong>A Printer:</strong> 10.0.0.10</li>
          </ul>
        </li>      
        </ul>
    </div>
  )
}
 
 