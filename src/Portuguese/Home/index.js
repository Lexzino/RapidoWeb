import React from 'react'
import Header from './header'
import Hero from './Hero'
import Option from './Option'
import Vision from './Vision'
import Help from './Help'
import Telehealth from './Telehealth'
import Relief from './Relief'
import Feature from './Feature'
import Jobs from './Jobs'
import Esg from './Esg'
import Footer from './Footer'
import Navbar from './Navbar'
import Subscribe from './Subscribe'
import Joinus from './Joinus'
import Travaltime from './Travaltime'




export default function index() {
    return (
        <div>
            <div className="herobg">
         {/* <Header/> */}
         <Navbar/>
         <Hero/>
         </div>
         <div className="bg-grey-vlight">
         <Option/>
         <Vision/>
         </div>
        <Help/>
        <Telehealth/>
        <Relief/>
        <Feature/>
        <Jobs/>
        <Travaltime/>
        <Joinus/>
        <Esg/>
        <Subscribe/>
        <Footer/>

        </div>
    )
}
