import React from 'react'

export const order = 3

export default function Leasing() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DHCPLeasing.png" alt="Diagram" className="w-full h-auto max-h-[700px] object-contain mx-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">DHCP Leasing</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
        <li>Server assigns a lease after the <strong>DHCP handshake</strong></li>
        <li>Leases come from the server's <strong>scope</strong> (address pool); <strong>reservations</strong> reserve specific addresses</li>
        <li>Leases have set durations (eg. 24h) and can be renewed before expiry</li>
        <li>On renewal success the client keeps its address; otherwise it must obtain a new one</li>
      </ul>
      <div className="mt-6 p-4 bg-black/60 text-white rounded-md text-sm max-w-prose self-center mx-auto text-center">
        <strong>Side note:</strong> This slide assumes the DHCP allocation policy is <em>sequential</em>. It can alternatively be configured as <em>pseudo-random / hash-based</em>, or use <em>reservations / affinity</em> for stable address assignments.
      </div>
    </div>
  )
}

export function LeasingDown() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DHCPLeasingExpired.png" alt="Diagram" className="w-full h-auto max-h-[700px] object-contain mx-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">Leasing Expiring</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2">
        <li>A lease expires when the client fails to renew it before the lease duration ends</li>
        <li>
          Renewal timers:
          <ul className="list-disc list-inside ml-6 space-y-2 my-2">
            <li><strong>T1</strong> (renewal) at ~50% — client unicasts <strong>DHCPREQUEST</strong> to original server</li>
            <li><strong>T2</strong> (rebinding) at ~87.5% — if no response to T1, client broadcasts DHCPREQUESTto servers</li>
          </ul>
        </li>
        <li>If a server replies with a <strong>DHCPACK</strong> (to T1 or T2), the lease is renewed; otherwise the lease eventually expires and the client must obtain a new address</li>
      </ul>
    </div>
  )
}
 
 