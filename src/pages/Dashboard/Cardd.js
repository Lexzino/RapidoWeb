import React from 'react'
import Vistor from '../../assets/images/Visitorimg.svg'
import Registervistors from '../../assets/images/Registervistors.svg'
import Circle from '../../assets/images/Circle.svg'
import registeryformecy from '../../assets/images/registeryformecy.svg'
import moonsolid  from '../../assets/images/moon-solid 1.svg'
import infooutline  from '../../assets/images/info_outline.svg'
import Manpic  from '../../assets/images/Manpic.svg'
import Billicon  from '../../assets/images/Billicon.svg'

export default function Cardd() {
  return (
    <div>
        {/* card section start */}
        <div className="grid grid-cols-12 gap-[17px] ml-[50px]">
            <div className="  col-span-12 sm:col-span-6 md:col-span-3">
              <div className="visitorset px-4 pt-[26px] pb-[29px] rounded-[15px] w-full h-[135px]">
                <img src={Vistor} className='w-[38.785px] h-[38.785px] mx-auto' alt="" />
                <h1 className='mt-[25px] f-f-b text-tiny text-white text-center '>Number of Visitor</h1>
              </div>
            </div>
            <div className="  col-span-12 sm:col-span-6 md:col-span-3">
              <div className="Registervistor px-4 pt-[26px] pb-[20px] rounded-[15px] w-full h-[135px]">
                <img src={Registervistors} className='w-[31.028px] h-[ 41.371px] mx-auto' alt="" />
                <h1 className='mt-[16px] f-f-b text-tiny text-white text-center leading-tight'>Number of
Register Visitor</h1>
              </div>
            </div>
            <div className="  col-span-12 sm:col-span-6 md:col-span-3">
              <div className="circleset px-4 pt-[22px] pb-[20px] rounded-[15px] w-full h-[135px]">
                <img src={Circle} className='w-[50px] h-[50px] mx-auto' alt="" />
                <h1 className='mt-[11px] f-f-b text-tiny text-white text-center leading-tight '>Number of
Register Professional</h1>
              </div>
            </div>
            <div className="  col-span-12 sm:col-span-6 md:col-span-3">
              <div className="registerpharmacy px-4 pt-[22px] pb-[20px] rounded-[15px] w-full h-[135px]">
                <img src={registeryformecy} className='w-[50px] h-[50px] mx-auto' alt="" />
                <h1 className='mt-[11px] f-f-b text-tiny text-white text-center leading-tight '>Number of
Register Pharmacies</h1>
              </div>
            </div>
          </div>
        
         
    </div>
  )
}
