import React from 'react'
import Header from '../Home/Navbar'
import Team from './Team'
import Members from './Members'
import Footer from '../Home/Footer'
import Hero from './Hero'
export default function () {
  return (
    <div>
        <div className=' bg-green-dark ' >
      <Header/>
      <Hero/>
      </div>
      <Team/>
      <Members/>
      <Footer/>
    </div>
  )
} 