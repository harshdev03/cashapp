'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import { ModeToggle } from './ModeToggle'


const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className="fixed top-0 z-50 inset-x-0 flex w-full px-2  items-center justify-center bg-[#ffffff]  dark:bg-[oklch(0.145_0_0)] backdrop-blur-md    py-4 border-white/40 dark:border-black">
 
      <div className='flex max-w-5xl justify-between w-full'>


      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl tracking-tight leading-loose">CashApp</h1>
      </div>

      <div className="flex items-center gap-4">
        <ModeToggle />
        <button
          className="cursor-pointer font-semibold w-auto px-6 py-2 rounded-lg text-sm md:text-md bg-black text-white  dark:bg-white dark:text-black"
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
      </div>
    </nav>
  )
}

export default Navbar
