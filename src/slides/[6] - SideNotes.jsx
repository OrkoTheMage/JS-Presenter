import React from 'react'
import SideNote from '../components/SideNote.jsx'

export const order = 6

export default function SideNotes() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-6xl font-bold mb-8">Side Notes</h2>
      <p className="text-2xl text-gray-300 mb-12">Hover-reveal content panels</p>

      <div className="relative flex justify-center">
        <div className="p-8 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-3xl font-semibold mb-6">Main Slide Content</h3>
          <p className="text-xl text-gray-300 mb-4">
            Your main content goes here. Hover over the panel on the left to see additional information!
          </p>
          <ul className="list-disc list-inside text-lg text-gray-400 space-y-2">
            <li>Technical details</li>
            <li>Code examples</li>
            <li>Additional context</li>
          </ul>
        </div>

        <SideNote
          title="Implementation Notes:"
          title2="Hover to expand"
          title2Hover="Here's where your hidden content lives — perfect for supplementary information!"
          contents={[
            'Implementation notes',
            'Performance tips',
            'Browser compatibility',
            'Related resources',
          ]}
        />
      </div>
    </div>
  )
}

export function SideNotesDown() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-100">
      <h2 className="text-5xl font-bold mb-12">SideNote Component</h2>

      <div className="grid grid-cols-2 gap-8 max-w-4xl w-full">
        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4">Basic Usage</h3>
          <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
{`<SideNote
  title="Details:"
  title2="Hover to expand"
  contents={['Item 1', 'Item 2']}
/>`}
          </pre>
        </div>

        <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4">Stylized Items</h3>
          <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
{`contents={[
  'Plain text',
  { text: 'Highlighted', className: 'text-blue-300' },
  { text: 'Important', className: 'text-red-400 font-bold' },
]}`}
          </pre>
        </div>

        <div className="col-span-2 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/30">
          <h3 className="text-xl font-semibold mb-4">Custom Content</h3>
          <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
{`<SideNote
  title="Code Example"
  title2="Click to see"
  contents={
    <pre className="text-sm">
      const x = 42;
    </pre>
  }
/>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
