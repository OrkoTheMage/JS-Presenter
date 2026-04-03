import React, { useState } from 'react'

export default function RepoLink({ repoLink = 'https://example.com/dummy-repo' }) {
  const [copied, setCopied] = useState(false)

  async function copyRepo() {
    try {
      await navigator.clipboard.writeText(repoLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // fall back to prompt if clipboard API unavailable
      // eslint-disable-next-line no-alert
      window.prompt('Copy this link', repoLink)
    }
  }

  return (
    <div
      role="button"
      onClick={copyRepo}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && copyRepo()}
      tabIndex={0}
      className="mt-4 inline-block w-full max-w-sm mx-auto cursor-pointer select-none rounded-lg p-4 bg-black/80 hover:bg-white transition-colors duration-300 text-left group"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-medium text-center text-white/80 group-hover:text-black">Repo Link</div>
          <div className="text-sm text-blue-400/70 group-hover:text-blue-400 truncate">{repoLink}</div>
        </div>
        <div className="ml-4 text-sm text-green-600 font-semibold ">
          {copied ? 'Copied!' : 'Click to copy'}
        </div>
      </div>
    </div>
  )
}
