import React from 'react'
import insta from '../../assets/images/instagraram.svg'
import Twitter from '../../assets/images/twitter-logo-2429 1.svg'
import Indeed from '../../assets/images/Indeed.svg'
import Michel from '../../assets/images/image 29.svg'
import Isa from '../../assets/images/image 30.svg'
import Sergio from '../../assets/images/image 31.svg'
import facebook from '../../assets/images/facebook.svg'
import Vectorx from '../../assets/images/Vectorx.svg'
import linkedin from '../../assets/images/linkedin.svg'


export default function Members() {
  return (
    <div className='py-20 bg-white'>
      <div className='w-11/12 mx-auto 2xl:max-w-[1200px]'>
        <h1 className='f-f-r-s font-semibold text-center text-grey-dark text-9xl'> <span className='text-green-dark'> Nossos </span> membros da equipe</h1>
        <p className='f-f-r-s text-lg text-green-dark text-center mt-[14px]'>Bem-vindo ao coração e à alma do Rapido Relief! Nossa equipe é um grupo dedicado de indivíduos movidos por uma paixão compartilhada por revolucionar a saúde e causar um impacto significativo na vida das pessoas. Conheça os rostos por trás da missão enquanto apresentamos as pessoas talentosas que fazem tudo acontecer:</p>

        <div className="grid grid-cols-12 gap-6 md:gap-12 xl:gap-[75px] mt-14">
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              {/* <div className="bg-red-light ">
               
              </div> */}
              <img src={Michel} className=' rounded-b-[25px] w-full h-[215px] '  />
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '>Michael Tosin Adesanwo</h2>

              <div className="text-center">
                <button className='Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'><a href="https://www.linkedin.com/in/michaeltosinadesanwo/ ">CEO / fundador </a> </button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              {/* <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">
               
              </div> */}
                 <img src={Isa} className=' rounded-b-[25px] w-full h-[215px] '  />
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '>Isa Isa Mariana Afonso Bigi</h2>

              <div className="text-center">
                <button className='Memberbutton w-[202px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'><a href="https://www.linkedin.com/in/isamarianaafonso/
">Gerenciador de Web/Conteúdo</a></button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">
               
              </div>
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '>NOME COMPLETO</h2>

              <div className="text-center">
                <button className='Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'>Gerente de Produto</button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">
               
              </div>
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '> NOME COMPLETO</h2>

              <div className="text-center">
                <button className='Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'>Pessoal do CTO</button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">
               
              </div>
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '>NOME COMPLETO</h2>

              <div className="text-center">
                <button className='Memberbutton w-[157px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'>Gerente MTK</button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 xl:col-span-4">
            <div className="px-7 pb-[26px] bg-green-dark rounded-b-[25px]">
              {/* <div className="bg-red-light rounded-b-[25px] w-full h-[215px]">
               
              </div> */}
                <img src={Sergio} className=' rounded-b-[25px] w-full h-[215px] '  />
              
              <h2 className='mt-4 f-f-r-s font-semibold text-white text-center text-xl uppercase  '>Sergio Maciel</h2>

              <div className="text-center">
                < button className='Memberbutton w-[192px] h-11 border border-green f-f-r-s text-lg text-white rounded-[100px] mt-4'> <a href="https://www.linkedin.com/in/sergio-maciel-kronardt-724033a/"> Conselheiro e Mentor</a></button>
              </div>
              <div className="text-center mt-3 xl:mt-0">
              <ul className='inline-flex mt-[15px] space-x-2 md:space-x-4 items-center'>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={facebook} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={insta} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={Vectorx} className='w-5 h-5' alt="" />
                    </button>
                  </li>
                  <li>
                    <button className='socialbtn rounded-[66px] border border-grey-dark w-[52px] h-[52px] p-4'>
                      <img src={linkedin} className='w-5 h-5' alt="" />
                    </button>
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
