import React from 'react'

export const order = 7

export default function FunFacts() {
  return (
    <div className="flex flex-col items-start justify-center text-left h-full gap-8 text-white">
      <div className="w-full flex justify-center">
        <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
          <h1 className="text-8xl text-center font-extrabold font-quantico">Fun Facts About OSPF</h1>
        </div>
      </div>
      <div className="max-w-3xl w-full space-y-6 mt-6">
        <section>
          <ul className="list-[square] list-inside leading-relaxed text-lg marker:text-2xl marker:text-white marker:mr-2 space-y-2">
            <li><strong>History:</strong> OSPF was developed in the 1980s/90s (RFC 1247 and later RFCs) to replace distance-vector protocols like RIP.</li>
            <li><strong>Fast convergence:</strong> OSPF's link-state model typically converges faster than distance-vector protocols in large topologies.</li>
            <li><strong>Extensibility:</strong> OSPFv2 (IPv4) and OSPFv3 (IPv6) share concepts but differ in packet formats and options.</li>
            <li><strong>Area design:</strong> careful area planning improves scalability and reduces SPF CPU usage.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
