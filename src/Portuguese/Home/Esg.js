import React from 'react'
import Button1 from '../../assets/images/Button1.svg'
import News from '../../assets/images/News.svg'
import OslerPillow from '../../assets/images/OslerPillow.svg'

export default function Esg() {
  return (
    <div className='bg-grey-vlight pt-16  '>
      <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <h1 className='f-f-m text-green-dark text-center sm:text-start text-10xl md:text-11xl'>ESG | Últimas notícias</h1>

          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="text-end mt-4 sm:mt-0">
          <button className='w-full sm:w-[274px] h-[50px] lg:h-[64px] bg-green-dark rounded-3xl  '>
  <ul className='inline-flex items-center space-x-4'>
    <li className='f-f-b font-extrabold text-xl text-white'>Ver todas as notícias</li>
    <li><img src={Button1} className='h-6 w-6' alt="" /></li>
  </ul>
</button>
</div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[18px] mt-[41px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
            <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className='w-[72px] h-[72px] mx-auto' alt="" /> </div>
                <div className="text-center mt-[15px]">
                  <ul className='inline-flex items-center space-x-3'>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>Jun 25, 2024</li>
                    <li><img src={OslerPillow} className='w-1 h-1' alt="" /></li>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>author name</li>
                  </ul>
                  <h1 className='f-f-m font-bold text-green-dark text-xl mt-[11px] leading-[18px]'>
                  Quebrando barreiras: como o Rapido
IA transforma a saúde mental</h1>
                </div>
                <div className="text-center xl:text-start">
                <ul className='inline-flex items-center space-x-3 mt-[14px] mb-3'>
                  <li>
                    <button className='w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Telehealth</button>
                  </li>
                  <li>
                    <button className='w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Telemedicine</button>
                  </li>
                </ul>
                </div>

            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
            <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className='w-[72px] h-[72px] mx-auto' alt="" /> </div>
                <div className="text-center mt-[15px]">
                  <ul className='inline-flex items-center space-x-3'>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>Jun 25, 2024</li>
                    <li><img src={OslerPillow} className='w-1 h-1' alt="" /></li>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>author name</li>
                  </ul>
                  <h1 className='f-f-m font-bold text-green-dark text-xl mt-3 leading-[18px]'>
                  Capacitando Pacientes: Histórias de Sucesso de Telessaúde do Rapido</h1>
                </div>
                <div className="text-center xl:text-start">
                <ul className='inline-flex items-center space-x-3 mt-[14px] mb-3'>
                  <li>
                    <button className='w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Telehealth</button>
                  </li>
                  <li>
                    <button className='w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Telemedicine</button>
                  </li>
                </ul>
                </div>

            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
            <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className='w-[72px] h-[72px] mx-auto' alt="" /> </div>
                <div className="text-center mt-[15px]">
                  <ul className='inline-flex items-center space-x-3'>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>Jun 25, 2024</li>
                    <li><img src={OslerPillow} className='w-1 h-1' alt="" /></li>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>author name</li>
                  </ul>
                  <h1 className='f-f-m font-bold text-green-dark text-xl mt-3 leading-[18px]'>
                  Telessaúde baseada em IA da Rapido: preenchendo a lacuna na área da saúde</h1>
                </div>
                <div className="text-center xl:text-start">
                <ul className='inline-flex items-center space-x-3 mt-[14px] mb-3'>
                  <li>
                    <button className='w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Healthcare</button>
                  </li>
                  <li>
                    <button className='w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Mental Health</button>
                  </li>
                </ul>
                </div>

            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px] ">
            <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img src={News} className='w-[72px] h-[72px] mx-auto' alt="" /> </div>
                <div className="text-center mt-[15px]">
                  <ul className='inline-flex items-center space-x-3'>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>Jun 25, 2024</li>
                    <li><img src={OslerPillow} className='w-1 h-1' alt="" /></li>
                    <li className='f-f-b font-extrabold text-sm text-grey-dark uppercase'>author name</li>
                  </ul>
                  <h1 className='f-f-m font-bold text-green-dark text-xl mt-3 leading-normal'>
                  O futuro da telemedicina: percepções de especialistas</h1>
                </div>
                <div className="text-center xl:text-start">
                <ul className='inline-flex items-center space-x-3 mt-[14px] mb-3'>
                  <li>
                    <button className='w-[59px] h-[35px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>AI</button>
                  </li>
                  <li>
                    <button className='w-[178px] h-[35px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-xl text-green-dark'>Machine Learning</button>
                  </li>
                </ul>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
