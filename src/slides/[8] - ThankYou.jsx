import React from 'react'
import RepoLink from '../components/RepoLink'

export const order = 8

export default function ThankYou() {
  const repoLink = 'https://example.com/dummy-repo'

  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-8 relative">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-black dark:border-black">
        <h1 className="text-7xl text-center font-extrabold font-covered">Thank You</h1>
      </div>

      <div className="max-w-3xl w-full mt-6 space-y-8">
        <RepoLink repoLink={repoLink} />
      </div>
    </div>
  )
}
