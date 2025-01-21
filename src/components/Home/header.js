import React from 'react'
import Joining from './Dilogbox/Joining'
import Coming from './Dilogbox/Coming'
import Chatboot from './Dilogbox/Chatboot'

import Partner from './Dilogbox/Partner'
import { DialogDefault } from './Dilogbox/individul'


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
            <DialogDefault/>
          </li>
          <li>
            <Partner/>
          </li>
        
        </ul>
    </div>
  )
}
