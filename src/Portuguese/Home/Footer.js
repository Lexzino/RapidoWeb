import React from 'react'

export default function Footer() {
  return (
    <div className='bg-green-dark'>
      <div className='w-11/12 mx-auto 2xl:max-w-[1154px] py-9'>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12  xl:col-span-3">
            <div className="text-center xl:text-start ">
            <ul className='xl:inline-flex w-full  items-center space-x-2'>
              <li><img src="/images/Group 17155.svg" className='w-12 h-12 mx-auto' alt="" /></li>
              <li>
                <h1 className='f-f-r font-semibold text-white text-[32px]'>RapidoRelief</h1>
               
              </li>
            </ul>

            <ul className='xl:inline-flex w-full items-center space-x-4 md:space-x-4 mt-4 xl:mt-[47px]'>
              <li><img src="/images/Email.svg" className='w-[38px] h-[35px] mx-auto ' alt="" /></li>
              <div className="xl:w-[160px] ">
              <li>
                <h1 className='f-f-r  text-white text-sm  mt-3 xl:mt-0'>
                For support or any-related inquiries, please write to us at <span className='f-f-li  text-green'>contact@rapidorelief.com</span> </h1>
              </li>
              </div>
            </ul>
            <h3 className='f-f-r text-xl text-white mt-4'>Follow  Us On Social Media</h3>
            <div className=" px-6 mt-[17px] ">

            <ul className='inline-flex items-center space-x-[10px]  '>
              <li><a href='https://web.facebook.com/RapidoReliefApp/' ><img src="/images/Gfacebook.svg" className='w-6 h-6' alt="" /></a></li>
              <li><a href='https://www.instagram.com/rapidreliefapp/' ><img src="/images/Ginstagram.svg" className='w-6 h-6' alt="" /></a></li>
              <li><a  ><img src="/images/Gsocial.svg" className='w-6 h-6' alt="" /></a></li>
              <li><a href='https://www.linkedin.com/company/rapidreliefapp' ><img src="/images/Glinkedin.svg" className='w-6 h-6' alt="" /></a></li>
              <li><a><img src="/images/Gyoutube.svg" className='w-6 h-6' alt="" /></a></li>
            </ul>
            </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="text-center xl:text-start xl:pl-20 mt-3 xl:mt-0">
           <h1 className='f-f-r font-semibold text-white text-xl'>Solution</h1>
           <h1 className='f-f-r  text-white text-xl mt-4'>Find Doctors</h1>
           <h1 className='f-f-r  text-white text-xl mt-3 '>Find Pharmacy </h1>
           <h1 className='f-f-r  text-white text-xl mt-3'>Healthcare Expertise</h1>
           <h1 className='f-f-r  text-white text-xl mt-3'>Patient Communication</h1>
           <h1 className='f-f-r  text-white text-xl mt-3'>rovider Collaboration</h1>
           <h1 className='f-f-r  text-white text-xl mt-3'>Workflow Automation</h1>
           </div>
          
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className=" text-center xl:text-start xl:pl-20 mt-3 xl:mt-0">
           <h1 className='f-f-r font-semibold text-white text-xl'>Resources</h1>
           <h1 className='f-f-r  text-white text-xl mt-4'>About Us</h1>
           <h1 className='f-f-r  text-white text-xl mt-2'>Blog </h1>
           <h1 className='f-f-r  text-white text-xl mt-2'>Success stories</h1>
           <h1 className='f-f-r  text-white text-xl mt-2'>Webinars</h1>
           <h1 className='f-f-r  text-white text-xl mt-2'>White papers</h1>
           <h1 className='f-f-r  text-white text-xl mt-2'> Career / CSR</h1>
           <h1 className='f-f-r  text-white text-xl mt-2'>Podcasts / Videos</h1>
           </div>
          
          </div>
          <div className="col-span-12  xl:col-span-3">
            
          
           <div className="text-center xl:text-end mt-3 xl:mt-0">
           <h1 className='f-f-m f text-white text-2xl '>Coming Soon on </h1>
           <div className="sm:space-x-4 xl:space-x-0">
         
           <button className='w-full sm:w-[170px] h-[39px] mt-3  border border-green rounded-[10px] cursor-pointer'>
            <ul className='inline-flex items-center space-x-2'>
              <li><img src="/images/Google play2.svg" className='w-[30px] h-[26px]' alt="" /></li>
              <li>
                <h5 className='f-f-r text-xs text-white text-start '>GET IT ON</h5>
                <h3 className='f-f-m text-lg sm:text-2xl text-white leading-4'>Google Play</h3>
              </li>
            </ul>
            </button>
            <button className='w-full sm:w-[152px] h-[39px] border border-green rounded-[10px] cursor-pointer mt-[14px]'>
            <ul className='inline-flex items-center space-x-2'>
              <li><img src="/images/Appss.svg" className='w-[35px] h-[30px]' alt="" /></li>
              <li>
                <h5 className='f-f-r text-xs text-white text-start  '>Download on the</h5>
                <h3 className='f-f-m text-lg sm:text-2xl text-white leading-4'>App Store</h3>
              </li>
            </ul>
            </button>
   
           </div>
          
          </div>
          
          </div>
        
        </div>

        <div className="w-full h-[2px] bg-white mt-7"></div>

        <div className="grid grid-cols-12 items-center mt-6">
          <div className="col-span-12 md:col-span-4">
            <h1 className='f-f-m text-base lg:text-base text-white text-center md:text-star'>© 2024 © RapidoRelief. All Rights Reserved.</h1>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="text-center md:text-end mt-3 md:mt-0">
              <ul className='inline-flex space-x-3 sm:space-x-5 items-center uppercase'>
                <li className='f-f-m text-sm text-white '>Privacy Policy </li>
                <li><div className="bg-white h-3 w-[2px]"></div></li>
                <li className='f-f-m text-sm text-white'>legal</li>
                <li><div className="bg-white h-3 w-[2px]"></div></li>
                <li className='f-f-m text-sm text-white'>cookies </li>
                <li><div className="bg-white h-3 w-[2px]"></div></li>
                <li className='f-f-m text-sm text-white'>terms & conditions</li>
               
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}