import React from 'react'

export default function () {
  return (
    <div  className='w-11/12 mx-auto 2xl:max-w-[1154px] mt-16'>
      <div className="grid grid-cols-12 sm:gap-10 lg:gap-20 ">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 ">
          <ul className='inline-flex items-center space-x-4'>
            <li><img src="/images/Heart.svg" className='h-[35px] w-[35px]' alt="" /></li>
            <li className='f-f-r text-5xl text-grey'>Nossa visão</li>
          </ul>
          <h5 className='f-f-r text-lg sm:text-xl xl:text-2xl text-grey mt-5 mb-14'>Nossa visão é criar um mundo onde nenhuma vida seja perdida devido ao atraso no atendimento médico. Imaginamos um cenário de saúde onde os indivíduos recebam atendimento rápido e compassivo, independentemente da urgência de sua situação.</h5>

        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 ">
          <ul className='inline-flex items-center space-x-4'>
            <li><img src="/images/arcticons.svg" className='h-[35px] w-[35px]' alt="" /></li>
            <li className='f-f-r text-5xl text-grey'>IA e saúde</li>
          </ul>
          <h5 className='f-f-r text-lg sm:text-xl xl:text-2xl text-grey mt-5 mb-14'>Imaginamos um futuro onde a tecnologia de IA de ponta se integre perfeitamente aos cuidados de saúde, transformando a experiência do paciente. A nossa missão é clara: aproveitar o poder da IA para capacitar os profissionais médicos e melhorar o atendimento aos pacientes, tudo no conforto do seu próprio ambiente.</h5>

        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 ">
          <ul className='inline-flex items-center space-x-4'>
            <li><img src="/images/Setting.svg" className='h-[35px] w-[35px]' alt="" /></li>
            <li className='f-f-r text-5xl text-grey'>Dispositivos inteligentes</li>
          </ul>
          <h5 className='f-f-r text-lg sm:text-xl xl:text-2xl text-grey mt-5 mb-14'>A integração da tecnologia SmartAlert, que permite aos usuários acionar alertas de emergência de forma rápida e segura a partir de seus telefones ou dispositivos vestíveis, representa um avanço tecnológico que aumenta a eficiência da plataforma. Basta conectar, configurar e aproveitar.</h5>

        </div>
      </div>

    </div>
  )
}
