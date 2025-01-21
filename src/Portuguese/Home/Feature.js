import React from 'react'
import Cutting from '../../assets/images/Cutting.svg'
import Userfriendly from '../../assets/images/Userfriendly.svg'
import Personlized from '../../assets/images/Personlized.svg'
import Healthcare from '../../assets/images/Healthcare.svg'
import Secure from '../../assets/images/Secure.svg'
import Ecosystem from '../../assets/images/Ecosystem.svg'

export default function 
() {
  return (
    <div className='bg-grey-light'>
        <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-[60px]'>
          <h1 className='f-f-m text-8xl sm:text-10xl md:text-11xl text-green-dark text-center uppercase'>
          Super recurso com benefício</h1>

            <div className="grid grid-cols-12 gap-6 mt-9 items-center">
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-parrot-vlight w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Cutting} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Tecnologia de IA de ponta</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark leading-normal xl:leading-5  mt-2 xl:mt-1'>O Rapido Relief AI tem o potencial de melhorar os cuidados de saúde mental, fornecendo apoio personalizado, intervenção precoce e recursos acessíveis a indivíduos necessitados, especialmente em áreas remotas ou mal servidas.</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-red w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Userfriendly} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Interface amigável</h2>
                  <p className='f-f-r text-lg lg:text-2xl text=grey-dark leading-normal  mt-2 xl:mt-[18px]'>Our app features an intuitive and easy-to-navigate interface, making it accessible to all users, regardless of their tech expertise.</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-blue w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Personlized} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold xl:leading-6 text-2xl lg:text-4xl text-black-light mt-4 '>Cuidados de saúde personalizados</h2>
                  <p className='f-f-r text-lg  text=grey-dark leading-normal xl:leading-[18px] mt-2  '>Através da nossa plataforma, a IA atua como uma aliada confiável, agilizando processos e fornecendo suporte personalizado. Desde a otimização de planos de tratamento até a oferta de insights em tempo real, nosso objetivo é revolucionar a prestação de cuidados de saúde. </p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-blue-light w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Healthcare} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Educação em Saúde</h2>
                  <p className='f-f-r text-lg lg:text-2xl text=grey-dark mt-2 '>Nossa plataforma oferece uma riqueza de recursos para cuidados de saúde preventivos, capacitando os usuários a cuidar de seu bem-estar.</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-white-dark w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Secure} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6'>Seguro e Confidencial</h2>
                  <p className='f-f-r text-lg lg:text-2xl text=grey-dark  mt-2 '>Sua segurança é nossa prioridade. Utilizamos tecnologia de ponta para garantir que seus dados sejam protegidos e sua privacidade seja respeitada.
</p>
                  

                </div>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="bg-white rounded-[40px]  p-8 h-auto md:h-[340px] ">
                  <div className="bg-parrot-vlight w-[80px] h-[80px] rounded-[30px] justify-center p-7 ">
                  <img src={Ecosystem} className='w-6 h-6 ' alt="" />

                  </div>
                  <h2 className='f-f-b font-extrabold text-2xl lg:text-4xl text-black-light mt-6 '>Seguro e Confidencial</h2>
                  <p className='f-f-r text-lg lg:text-xl text=grey-dark xl:leading-8 mt-2 '>Rapido Relief oferece uma experiência holística de saúde. A partir de consultas com médicos especialistas.</p>
                  

                </div>
              </div>

            </div>
        </div>
    </div>
  )
}
