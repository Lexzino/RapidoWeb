import React from 'react'

import Rightside from './Rightside'
import Cardd from './Cardd'
import Table from './Table'

export default function Hero() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5 sm:gap-10">
        {/* Left side started */}
        <div className="col-span-12 2xl:col-span-8">
              <Cardd/>
              <Table/>
        


         
        </div>

      {/* right side started */}
        <div className="col-span-12 2xl:col-span-4">
      <Rightside/>
        </div>
        {/* right side ended */}


      </div>
    </div>
  )
}
