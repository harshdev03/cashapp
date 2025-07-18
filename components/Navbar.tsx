"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
const Navbar = () => {
const route = useRouter()
  return (
    <nav className="fixed top-0 z-50 inset-x-0 flex w-full px-10 md:px-6 items-center justify-between bg-black/30 backdrop-blur-2xl  py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">CashApp</h1>
      </div>
      <button className="w-20 transform rounded-lg text-sm md:text-md bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-24 dark:bg-white dark:text-black dark:hover:bg-gray-200" onClick={()=> route.push('/api/auth/signin')}>
        Sign In
      </button>
    </nav>
  )
}

export default Navbar
