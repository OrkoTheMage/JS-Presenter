export default function SideNote({
  title = 'Hello Packet:',
  title2 = 'Hover for details',
  title2Hover = (
    <>
      Marked in <span className="text-blue-300">blue</span> are the parameters that require matching for compatibility.
    </>
  ),
  contents = [
    'Router ID',
    { text: 'Hello / Dead Interval *', className: 'text-blue-300' },
    'Neighbors',
    { text: 'Area ID *', className: 'text-blue-300' },
    'Router Priority',
    'DR IP Address',
    'BDR IP Address',
    'Authentication',
    { text: 'Password *', className: 'text-blue-300' },
    { text: 'Stub Area Flag *', className: 'text-blue-300' },
  ],
}) {
  const renderContents = Array.isArray(contents) ? (
    <ul className="mt-2 list-disc list-inside space-y-1">
      {contents.map((item, i) => {
        if (typeof item === 'string') return <li key={i}>{item}</li>
        const { text, className } = item || {}
        return (
          <li key={i} className={className || ''}>
            {text}
          </li>
        )
      })}
    </ul>
  ) : (
    contents
  )

  return (
    <div className="absolute left-[-22rem] top-[53.5rem] p-4 w-80 bg-black/30 text-white rounded-lg S  group border border-white/20 z-10 hover:w-80 transition-all duration-300">
      <strong className="block text-xl text-center px-2">{title}</strong>
      <div className="text-center">
        <span className="block text-sm group-hover:hidden">{title2}</span>
        <span className="hidden text-sm group-hover:block">{title2Hover}</span>
      </div>
      <div className="mt-1 overflow-hidden max-h-0 group-hover:max-h-80 transition-all duration-300 px-2">
        {renderContents}
      </div>
    </div>
  )
}