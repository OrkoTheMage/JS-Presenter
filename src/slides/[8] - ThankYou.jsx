import React from 'react'
import RepoLink from '../components/RepoLink'

export const order = 8

export default function ThankYou() {
  const repoLink = 'https://github.com/OrkoTheMage/JS-Presenter/tree/ospf'

  return (
    <div className="flex flex-col items-center justify-center text-center h-full gap-8 relative text-white">
      <div className="inline-block p-8 border-8 rounded-xl bg-transparent border-white dark:border-white">
        <h1 className="text-7xl text-center font-extrabold font-quantico">Thank You</h1>
      </div>


        <div className="mt-4">
          <RepoLink repoLink={repoLink} />
        </div>
        
      </div>
  )
}
