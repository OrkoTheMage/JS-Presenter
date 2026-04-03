import React from 'react'

export const order = 4
export const images = ['/DORA.png']

export default function DORA() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <img src="/DORA.png" alt="DORA flow" className="w-full h-auto max-h-[600px] object-contain mx-auto" />
      <h2 className="text-5xl font-semibold font-covered mb-2 mt-20">DHCP Message Flow — DORA</h2>
      <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-4">
        <li className="list-none font-medium mt-4">
          We've discussed DHCPREQUEST and DHCPACK when discussing leases, now, let's see how these fit into the overall DHCP message flow, commonly referred to as <strong>DORA</strong>:
        </li>
        <li>
          <strong>Discover:</strong> Client broadcasts to locate DHCP servers
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><em>Example:</em> laptop sends <em>DHCPDISCOVER</em> to 255.255.255.255</li>
          </ul>
        </li>
        <li>
          <strong>Offer:</strong> Server replies with an available IP and options
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><em>Example:</em> server offers <em>192.0.2.10</em> with gateway and DNS</li>
          </ul>
        </li>
        <li>
          <strong>Request:</strong> Client requests the offered IP (selects server)
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><em>Example:</em> client sends <em>DHCPREQUEST</em> for <em>192.0.2.10</em></li>
          </ul>
        </li>
        <li>
          <strong>Ack:</strong> Server acknowledges and issues the lease
          <ul className="list-disc list-inside ml-6 mt-2">
            <li><em>Example:</em> server sends <em>DHCPACK</em> confirming a 24h lease</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
