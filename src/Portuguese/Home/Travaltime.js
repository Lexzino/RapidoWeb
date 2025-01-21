import React from 'react'
import Carimg from '../../assets/images/Carimg.svg'
import Zeowaiting from '../../assets/images/Zeowaiting.svg'
import Certifieddoctor from '../../assets/images/Certifieddoctor.svg'



export default function Jobs() {
 
  return (
    <div className='bg-parrot-dark '>

        <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-14'>
          <div className="grid grid-cols-12 gap-2 sm:gap-10 2xl:gap-20">
            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
              <div className="text-center">
            <ul className="sm:inline-flex items-center space-x-5 ">
              <img src={Carimg} className='w-[91px] h-[76px] mx-auto sm:mx-0' alt="" />
              <h1 className='f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0  sm:text-start'>Reduzir
Tempo
de viagem</h1>
            </ul>
            </div>
          
          
            </div>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4">
              <div className="text-center">
            <ul className="sm:inline-flex items-center space-x-5 ">
              <img src={Zeowaiting} className='w-[91px]  h-[76px] mx-auto sm:mx-06px]' alt="" />
              <h1 className='f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0  sm:text-start'>Zero Espera
Período </h1>
            </ul>
            </div>
          
          
            </div>
            <div className="col-span-12 xl:col-span-4">
              <div className="text-center">
            <ul className="sm:inline-flex items-center space-x-5 ">
              <img src={Certifieddoctor} className='w-[91px]  mx-auto sm:mx-0 h-[76px]' alt="" />
              <h1 className='f-f-r text-2xl lg:text-5xl text-white  text-center mt-2 sm:mt-0 sm:text-start'>Certificado
Especialistas 
</h1>
            </ul>
            </div>
          
          
            </div>
          </div>

       
          
           

        
    
         
          

        
        </div>
    </div>
  )
}
