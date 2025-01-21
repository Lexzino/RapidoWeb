import React from 'react'
import Joinus from '../../assets/images/Joinus.svg'



export default function Jobs() {
 
  return (
    <div className='bg-white my-[66px]'>

        <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
    
         
          

          <div className="mt-5 md:mt-16  bg-green-vlight p-2 rounded-b-[25px] ">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 lg:col-span-6 p-6">
              <h1 className='f-f-m text-5xl text-grey-dark text-center lg:text-start uppercase '>TRABALHOS DE ALÍVIO RÁPIDO</h1>
              <h2 className='f-f-r text-3xl sm:text-[34px] xl:text-10xl text-parrot-light mt-8
               text-center lg:text-start  leading-normal xl:leading-[50px]'>
                Junte-se a nós e ajude a
transformar
saúde para todos</h2>
                <div className="text-center lg:text-start">
<button className='w-[217px] h-[50px] lg:mx-0 bg-green-dark rounded-3xl text-white f-f-b font-extrabold text-xl  mt-[30px]'>Veja vagas de emprego</button>
</div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <img src={Joinus} className='w-full h-auto lg:h-[400px]' alt="" />

            </div>
          </div>
          </div>
        </div>
    </div>
  )
}
