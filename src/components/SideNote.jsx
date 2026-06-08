export default function SideNote({
  title = 'Details:',
  title2 = 'Hover to expand',
  title2Hover = (
    <>
      Additional information appears on hover.
    </>
  ),
  contents = [
    'First detail',
    'Second detail',
    'Third detail',
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
    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-16 p-4 w-72 bg-indigo-950/80 backdrop-blur-sm text-gray-100 rounded-lg group border border-indigo-400/50 z-10 hover:bg-indigo-900/80 transition-all duration-300">
      <strong className="block text-xl text-center px-2">{title}</strong>
      <div className="text-center">
        <span className="block text-sm text-gray-400 group-hover:hidden">{title2}</span>
        <span className="hidden text-sm text-gray-300 group-hover:block">{title2Hover}</span>
      </div>
      <div className="mt-1 overflow-hidden max-h-0 group-hover:max-h-60 transition-all duration-300 px-2">
        {renderContents}
      </div>
    </div>
  )
}
