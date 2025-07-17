import React from 'react'
import { Hero } from '../components/Hero'
import Navbar from '../components/Navbar'
const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>

    <div className='h-screen'></div>
    </div>

  )
}

export default page