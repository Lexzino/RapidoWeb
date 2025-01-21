import React from 'react'
import Joining from './Dilogbox/Joining'
import Coming from './Dilogbox/Coming'
import Chatboot from './Dilogbox/Chatboot'
import Individul from './Dilogbox/individul'
import Partner from './Dilogbox/Partner'


export default function header() {
  return (
    <div >
        <ul className='  md:inline-flex items-center ' >
          <li>
            <Joining/>
          </li>
          <li>
            <Coming/>
          </li>
          <li>
            <Chatboot/>
          </li>
          <li>
            <Individul/>
          </li>
          <li>
            <Partner/>
          </li>
        
        </ul>
    </div>
  )
}
