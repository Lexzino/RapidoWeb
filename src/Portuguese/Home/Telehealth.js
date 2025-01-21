import React from 'react'
import Talkrapido from '../../assets/images/PTalk.svg'

export default function Telehealth() {
  return (
    <div className='bg-grey-vlight'>
      <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-[75px]'>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <div className="text-center md:text-start">
            <h1 className='f-f-b font-extrabold text-7xl lg:text-9xl text-black-dark mt-6'>Chatbot de IA de telessaúde</h1>
            <h2 className='f-f-r text-lg sm:text-xl text-grey mt-[30px] '>Com o Rapido, os pacientes podem agendar consultas virtuais com nosso Chatbot de telessaúde, seja em busca de exames de rotina, opiniões de especialistas ou suporte de saúde mental.</h2>
            <h2 className='f-f-r text-lg sm:text-xl text-grey mt-7 sm:mt-[35px]'>  Junte-se a nós nesta jornada inspiradora enquanto aproveitamos o potencial da IA para redefinir os cuidados de saúde, uma solução inovadora de cada vez.</h2>

            <h3 className='f-f-b text-tiny text-grey mt-[19px] uppercase'>Marcações de IA também serão possíveis</h3>

            <div className="rounded-[3px] h-2 bg-[#84CC16] mt-3 w-[291px] md:mx-0 mx-auto "></div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <img src={Talkrapido} className='w-full h-[450px]' alt="" />
          </div>
          <div className="col-span-12 xl:col-span-5">
            <div className="text-center xl:text-start mt-4 lg:mt-0">
          <h1 className='f-f-b font-extrabold text-2xl sm:text-3xl lg:text-7xl text-black-dark leading-normal sm:leading-[45px] '>Vamos arranjar um médico para você
quem te pega</h1>
<h2 className='f-f-b font-extrabold py-4 sm:py-0 text-2xl sm:text-3xl lg:text-7xl text-black-dark mt-0 lg:mt-4 xl:mt-[68px] leading-normal sm:leading-[45px] '>Consulte especialistas que aceitam seu seguro saúde em nossa plataforma</h2>
<h3 className='f-f-b font-extrabold text-2xl sm:text-3xl lg:text-7xl text-black-dark mt-0 lg:mt-4 xl:mt-[68px] leading-normal sm:leading-[45px] '>Verifique os fornecedores e leia as avaliações dos usuários</h3>
          </div>
          </div>
        </div>

      </div>
    </div>
    
  )
}
