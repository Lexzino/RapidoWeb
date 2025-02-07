import React from 'react'
import Indivial from './Dilogbox/individul'

export default function Hero() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (

    <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
      
      <div className="grid grid-cols-12 gap-5 2xl:gap-20 mt-24">
        <div className="col-span-12 xl:col-span-6">
          <ul className='inline-flex items-center space-x-1'>
            <li><h4 className='f-f-m text-xl sm:text-2xl text-white'>MOSTRA DE APLICATIVOS</h4></li>
            <li><div className="w-[165px] sm:w-[266px] h-[2px] bg-parrot "></div></li>
          </ul>

          <h1 className='f-f-m text-[55px] sm:text-12xl text-green mt-2'>Rápido Relief</h1>
          <div className="w-full sm:w-[400px] ">
          <h2 className='f-f-m text-6xl sm:text-7xl text-white mt-[2px] leading-normal '>Transformando a saúde
para o século 21</h2>
</div>

<div className="w-[90%] sm:w-[398px] h-[2px] bg-parrot mt-[15px] "></div>
<div className="w-full sm:w-[435px] ">

<h5 className='mt-6 f-f-r text-xl sm:text-4xl text-white'>Somos pioneiros no futuro da saúde
com telessaúde de ponta e
solução de telemedicina</h5>
</div>
<button onClick={handleOpen} className='w-[260px] sm:w-[275px] h-[40px] sm:h-[45px] bg-green rounded-2xl f-f-m text-3xl sm:text-5xl text-green-dark mt-3 '>Junte-se à lista de espera</button>

         <h3 className=' mt-14 sm:mt-[76px] f-f-m text-2xl text-white '>Estaremos ligados</h3> 
         <div className="grid grid-cols-12 items-center mt-[10px] gap-[11px]">
          <div className="col-span-6 sm:col-span-4">
            <button className='w-full h-auto border border-green rounded-[10px] cursor-pointer'>
            <ul className='inline-flex items-center space-x-2'>
              <li><img src="/images/Google play2.svg" className='w-[30px] h-[26px]' alt="" /></li>
              <li>
                <h5 className='f-f-r text-xs text-white text-start '>GET IT ON</h5>
                <h3 className='f-f-m text-lg sm:text-2xl text-white'>Google Play</h3>
              </li>
            </ul>
            </button>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <button className='w-full h-auto border border-green rounded-[10px] cursor-pointer'>
            <ul className='inline-flex items-center space-x-2'>
              <li><img src="/images/Appss.svg" className='w-[35px] h-[26px]' alt="" /></li>
              <li>
                <h5 className='f-f-r text-xs text-white text-start '>Download on the</h5>
                <h3 className='f-f-m text-lg sm:text-2xl text-white'>App Store</h3>
              </li>
            </ul>
            </button>
          </div>
          <div className="col-span-12 sm:col-span-4 jus">
            <div className="text-center sm:text-start mt-2 sm:mt-0">
            <button className='w-[50%]  sm:w-full h-auto border border-green rounded-[10px] cursor-pointer'>
            <ul className='inline-flex items-center space-x-2'>
              <li><img src="/images/Group 17155.svg" className='w-[30px] h-[26px]' alt="" /></li>
              <li>
                <h5 className='f-f-r text-xs text-white text-start '>Use Web App</h5>
                <h3 className='f-f-m text-lg sm:text-2xl text-white'>RapidoRelief</h3>
              </li>
            </ul>
            </button>
            </div>
          </div>
          
         </div>

        </div>
        <div className="col-span-12 xl:col-span-6">
          <img src="/images/Phero.svg" className='w-full h-auto md:h-[600px] mt-3 sm:mt-6 xl:mt-0' alt="" />
        </div>

      </div>
      <div className="text-center mt-14 lg:mt-[92px]">
        <ul className='lg:inline-flex items-center sm:space-x-5 pb-5 sm:pb-[45px]'>
          <li className='f-f-m  text-xl md:text-5xl text-green uppercase'>Você quer se envolver com nossas análises de estudos de caso</li>
          <li><button className='w-full sm:w-[260px] h-[38px] md:h-[45px] mt-4 lg:mt-0 mb-3 lg:mb-0 bg-white rounded-xl f-f-m text-xl sm:text-3xl md:text-5xl text-green-dark cursor-pointer uppercase'>então, clique aqui</button></li>
        </ul>
      </div>

      <Indivial open={open} setOpen={setOpen} handleOpen={handleOpen} />


    </div>
   
    
  )
}
