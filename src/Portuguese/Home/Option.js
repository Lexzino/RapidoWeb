import React from 'react'
import Consult from '../../assets/images/Consultnew.svg'
import Find from '../../assets/images/Findnew.svg'
import Doctor from '../../assets/images/Doctornew.svg'
import Hospital from '../../assets/images/hospitalnew.svg'
import Ambulance from '../../assets/images/ambulanceimg.svg'
import Mental from '../../assets/images/Mentalnew.svg'


export default function () {
  return (
    <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
      <div className="bg-green-vlight  mt-[72px] rounded-b-[25px]  ">
        <div className="mx-auto w-11/12">

        <div className="grid grid-cols-12 items-center gap-5">
          <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px]  py-3 px-3 sm:px-5 optionsetting">
              <img src={Consult} className='w-[61px] h-[50px] ml-auto ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Consultar On-line</h5>
            </div>

          </div>
          <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-3 sm:px-5 optionsetting">
              <img src={Find} className='w-[46px] h-[50px] ml-auto ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Encontrar
Farmacia</h5>
            </div>

          </div>
          <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-3 sm:px-5 optionsetting">
              <img src={Doctor} className='w-[49px] h-[50px] ml-auto ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Encontre um
Médicos</h5>
            </div>

          </div>
          <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-3 sm:px-5 optionsetting">
              <img src={Hospital} className='w-[50px] h-[50px] ml-auto ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Encontre um
Hospital</h5>
            </div>

          </div>
          <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-3 sm:px-5 optionsetting">
              <img src={Ambulance} className='w-[54px] h-[50px] ml-auto  ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Emergência
Ambulância</h5>
            </div>

          </div>
           <div className="  col-span-6 md:col-span-4 xl:col-span-2">
            <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-3 sm:px-5 optionsetting">
              <img src={Mental} className='w-[51px] h-[50px] ml-auto ' alt="" />

              <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Mental
Saúde</h5>
            </div>

          </div>
        </div>
        </div>


      </div>

    </div>
  )
}
