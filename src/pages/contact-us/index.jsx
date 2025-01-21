import React from 'react'
import Header from '../../components/Home/Navbar'
import Footer from '../../components/Home/Footer'
import Hero from './Hero'
import Contact from './contact'
export default function () {
  return (
    <div>
       <div
            className=""
            style={{
              background: "radial-gradient(86.15% 279.11% at 86.15% 79.75%, #43B307 0%, #1D4D03 27.83%)",
            }}
          >
 <Header/>
      <Hero/>

          </div>
        <Contact />
     
   
      <Footer/>
    </div>
  )
} 