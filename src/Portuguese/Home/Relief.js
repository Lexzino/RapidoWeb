import React from 'react'
import Pharmaciest from '../../assets/images/pharmacist.svg'
import Professional from '../../assets/images/professional 01.svg'
import Button1 from '../../assets/images/Button1.svg'
import Partnerdlg from './Dilogbox/Partner'


export default function Relief() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <>
    <div className='bg-white-light py-10'>
      <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-10 xl:py-[75px]'>
        <h1 className='f-f-m text-3xl sm:text-5xl text-center text-grey-dark uppercase'>mercado de alívio rápido para profissionais de saúde</h1>
        <h2 className='f-f-m text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-10xl text-center text-black-dark mt-3 '>Você é um provedor e está interessado em alcançar novos pacientes?</h2>
        <h3 className='f-f-r text-3xl sm:text-5xl text-center text-parrot-light mt-5 '>Liste sua prática no Rapido Relief Marketplace e seja descoberto por mais novos pacientes.</h3>

        <div className="grid grid-cols-12 gap-6 mt-[37px]">
          <div className="col-span-12 xl:col-span-6  ">
            <div className="bg-grey-light h-auto xl:h-[390px] relative">
              {/* inner grid start */}
              <div className="grid grid-cols-12 gap-4 xl:gap-9">
                
                <div className="col-span-12 xl:col-span-5">
                  <img src={Pharmaciest} className='w-full h-[170px] -ml-[6px]' alt="" />

                </div>
                <div className="col-span-12 xl:col-span-7">
                  <div className="px-10 xl:px-0">
                  <h1 className='f-f-m text-lg sm:text-2xl text-grey-dark mt-5 xl:mt-[62px] uppercase'>Para FARMÁCIAS</h1>
                  <p className='f-f-r text-lg sm:text-2xl text-grey-dark mt-5 leading-normal sm:leading-7 '>Entre no centro das atenções e deixe sua farmácia brilhar! Seja descoberto por inúmeros pacientes</p>
                  </div>
                </div>
              </div>
              {/* inner grid end */}

              <h4 className='f-f-r text-lg sm:text-2xl text-grey-dark px-10 pb-[61px] '>em seubairro em busca de drogarias próximas. Experimente a alegria de entregar medicamentos na sua porta, facilitando suas vidas mesmo em meio a agendas lotadas e reuniões festivas.
              </h4>

              <div className=" w-full text-center absolute -bottom-5 ">
<button onClick={handleOpen} className='w-full sm:w-[356px] h-[50px] sm:h-[64px] bg-green-dark rounded-2xl  '>
  <ul className='inline-flex items-center space-x-4'>
    <li className='f-f-m text-xl text-white'>Aliste sua loja no Rapido Relief</li>
    <li><img src={Button1} className='h-6 w-6' alt="" /></li>
  </ul>
</button>
</div>
            </div>
           </div>
          <div className="col-span-12 xl:col-span-6 ">
            <div className="bg-grey-light h-auto xl:h-[390px] mt-10 xl:mt-0 relative">
              {/* inner grid start */}
              <div className="grid grid-cols-12 gap-4 xl:gap-9">
                
                <div className="col-span-12 xl:col-span-5">
                  <img src={Professional} className='w-full h-[189px] -ml-[6px]' alt="" />

                </div>
                <div className="col-span-12 xl:col-span-7">
                  <div className="px-10 xl:px-0">
                  <h1 className='f-f-m text-lg sm:text-2xl text-grey-dark mt-5 xl:mt-[62px] uppercase'>Para médico</h1>
                  <p className='f-f-r text-lg sm:text-2xl text-grey-dark mt-5 leading-normal xl:leading-[25px] '>Desbloqueie um mundo de oportunidades para se conectar com pacientes em todo o mundo. Quer estejam buscando </p>
                  </div>
                </div>
              </div>
              <h4 className='f-f-r text-lg sm:text-2xl text-grey-dark px-10 pb-[61px] xl:leading-[25px]   '>soluções profissionais de saúde ou abraçando o turismo médico, sua experiência é necessária. Garantir que nenhum tempo seja desperdiçado e melhorar a sua presença online com avaliações autênticas e verificadas, solidificando a sua reputação como um prestador de cuidados de saúde de confiança."
              </h4>

              <div className=" w-full text-center absolute -bottom-5 ">

<button onClick={handleOpen} className='w-full sm:w-[356px] h-[50px] sm:h-[64px] bg-green-dark rounded-2xl  '>
  <ul className='inline-flex items-center space-x-4'>
    <li className='f-f-m text-xl text-white'>Aliste sua prática no Rapido Relief</li>
    <li><img src={Button1} className='h-6 w-6' alt="" /></li>
  </ul>
</button>
</div>
            </div>
           
           

          </div>
        </div>

      </div>
    </div>
    <Partnerdlg open={open} setOpen={setOpen} handleOpen={handleOpen} />
    </>
  )
}
