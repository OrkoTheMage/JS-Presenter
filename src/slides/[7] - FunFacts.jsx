import React from 'react'

export const order = 7

export default function FunFacts() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-black dark:border-black">
          <h1 className="text-8xl text-center font-extrabold font-covered">Fun Facts About DHCP</h1>
        </div>
      </div>
            
      <div className="max-w-3xl w-full space-y-6 mt-6">
        <section>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-black marker:mr-2 space-y-2">
            <li><strong>History:</strong> DHCP evolved from BOOTP and was formalized in the 1990s (RFCs such as 1531 and later 2131/2132), predating many modern GUIs and cloud services.</li>
            <li><strong>IPv6:</strong> DHCPv6 differs from DHCPv4 (different ports and discovery patterns), so IPv6 address configuration follows its own rules.</li>
            <li><strong>When DHCP Fails:</strong> Hosts often fall back to link-local addresses (APIPA 169.254.x.x); production setups use failover, clustering, or load-balanced DHCP servers for high availability.</li>
            <li>How DHCP works—its lifecycle, options, and failure modes—is essential for troubleshooting modern networks.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
