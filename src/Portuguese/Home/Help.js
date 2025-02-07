import React from 'react'

export default function Help() {
  return (
    <div className="bg-white-light pt-[71px]">
    <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
     

      <div className="grid grid-cols-12 gap-5 pb-[70px] sm:pt-10 lg:py-[70px]  ">
        <div className="col-span-12 lg:col-span-5">
          <img src="/images/PHelp.svg" className='w-full mb-5 lg:mb-0 h-[525px]' alt="" />
          </div> 
          <div className="col-span-12 lg:col-span-7">
            <ul className='inline-flex items-center space-x-5'>
              <li><img src="/images/Intelligent.svg" className='h-[80px] w-80px]' alt="" /></li>
              <li><h1 className='f-f-b font-extrabold text-xl sm:text-4xl text-black-dark '>Consultas Virtuais Inteligentes</h1>
              <h2 className='f-f-r text-lg sm:text-2xl text-grey'>Nossos serviços de telessaúde fornecem acesso conveniente aos
cuidados de saúde </h2>
              </li>
            </ul>
            <ul className='inline-flex items-center space-x-5 mt-9'>
              <li><img src="/images/Intelligent.svg" className='h-[80px] w-80px]' alt="" /></li>
              <li><h1 className='f-f-b font-extrabold text-xl sm:text-4xl text-black-dark '>Reserva intuitiva de compromissos</h1>
              <h2 className='f-f-r text-lg sm:text-2xl text-grey'>Tornamos o agendamento de consultas descomplicado para médicos
e pacientes. </h2>
              </li>
            </ul>
            <ul className='inline-flex items-center space-x-5 mt-9'>
              <li><img src="/images/Patientrecord.svg" className='h-[80px] w-80px]' alt="" /></li>
              <li><h1 className='f-f-b font-extrabold text-xl sm:text-4xl text-black-dark '>Gerenciamento de registros de pacientes</h1>
              <h2 className='f-f-r text-lg sm:text-2xl text-grey'>Nossos registros de saúde são armazenados de forma segura e
facilmente acessíveis.</h2>
              </li>
            </ul>
            <ul className='inline-flex items-center space-x-5 mt-9'>
              <li><img src="/images/Smart.svg" className='h-[80px] w-80px]' alt="" /></li>
              <li><h1 className='f-f-b font-extrabold text-xl sm:text-4xl text-black-dark '>Sistema SmartAlert</h1>
              <h2 className='f-f-r text-lg sm:text-2xl text-grey'>Os usuários podem enviar alertas de emergência com o simples toque
de um botão.</h2>
              </li>
            </ul>
            <ul className='inline-flex items-center space-x-5 mt-9'>
              <li><img src="/images/Telehealth.svg" className='h-[80px] w-80px]' alt="" /></li>
              <li><h1 className='f-f-b font-extrabold text-xl sm:text-4xl text-black-dark '>Chatbot de telessaúde e telemedicina com IA</h1>
              <h2 className='f-f-r text-lg sm:text-2xl text-grey'>Experimente o poder da IA na área da saúde com nosso chatbot Rapido. </h2>
              </li>
            </ul>
          </div>
       </div>
      </div>
    </div>
  )
}
