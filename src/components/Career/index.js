import React from 'react'
import Header from '../Home/Navbar'
import Listing from './Listing'
import Footer from '../Home/Footer'
import Hero from './Hero'

export default function () {
  return (
    <div>
       <div className=' bg-green-dark ' >
      <Header/>
      <Hero/>
      </div>
     <Listing/>
      <Footer/>
    </div>
  )
}
