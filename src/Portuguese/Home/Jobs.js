import React from 'react'
import Joinus from '../../assets/images/Joinus.svg'
import Helathmedical from '../../assets/images/Helathmedical.svg'
import Handmedical from '../../assets/images/Handmedical.svg'
import Healthcaremedical from '../../assets/images/Healthcaremedical.svg'
import Hearmedical from '../../assets/images/Hearmedical.svg'
import Storagemedical from '../../assets/images/Storagemedical.svg'
import Plusmedical from '../../assets/images/Plusmedical.svg'
import Slider from "react-slick";



export default function Jobs() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
    
  };
  return (
    <div className='bg-white my-[66px]'>

        <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
          <h1 className='f-f-r text-6xl sm:text-10xl md:text-11xl text-green-dark text-center mb-2'>Clientes e Parceiros em destaque</h1>


          <Slider {...settings}>
      <div>
      <img src="/images/Helathmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Helathmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Plusmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Healthcaremedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Handmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Storagemedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Helathmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Helathmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>
      <div>
      <img src="/images/Helathmedical.svg" className=' w-full sm:w-[90%] h-[121px] mx-auto  ' alt="" />
      </div>

    </Slider>

        </div>
    </div>
  )
}
