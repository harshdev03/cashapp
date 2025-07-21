'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="fixed top-0 z-50 inset-x-0 flex w-full px-10 md:px-6 items-center justify-between bg-white/30 dark:bg-black/20 backdrop-blur-3xl py-4 dark:border-neutral-800">
 
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">CashApp</h1>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <button
          className="whitespace-nowrap w-auto px-6 py-2 rounded-lg text-sm md:text-md bg-black font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          onClick={() => {
            if (session?.user) {
              signOut({ callbackUrl: '/' })
            } else {
              signIn(undefined, { callbackUrl: '/dashboard' })
            }
          }}
        >
          {session?.user ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
