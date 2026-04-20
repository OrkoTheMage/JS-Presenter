export default function HelloPacketNote() {
  return (
          <div className="absolute left-[-22rem] top-[53.5rem] p-4 w-80 bg-black/30 text-white rounded-lg S  group border border-white/20 z-10 hover:w-80 transition-all duration-300">
        <strong className="block text-xl text-center px-2">Hello Packet:</strong>
        <div className="text-center">
          <span className="block text-sm group-hover:hidden">Hover for details</span>
          <span className="hidden text-sm group-hover:block">Marked in <span className="text-blue-300">blue</span> are the parameters that require matching for compatibility.</span>
        </div>
        <div className="mt-1 overflow-hidden max-h-0 group-hover:max-h-80 transition-all duration-300 px-2">
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>Router ID</li>
            <li className="text-blue-300">Hello / Dead Interval *</li>
            <li>Neighbors</li>
            <li className="text-blue-300">Area ID *</li>
            <li>Router Priority</li>
            <li>DR IP Address</li>
            <li>BDR IP Address</li>
            <li>Authentication</li>
            <li className="text-blue-300">Password *</li>
            <li className="text-blue-300">Stub Area Flag *</li>
          </ul>
        </div>
      </div>
  )
}