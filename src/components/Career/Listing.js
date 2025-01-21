import React from 'react'
import Mobileimg from '../../assets/images/Mobileimg.svg'
import Nextarrow from '../../assets/images/Nextarrow.svg'
import Camra from '../../assets/images/Camra.svg'
import Bag from '../../assets/images/Bag.svg'
import Stars from '../../assets/images/Stars.svg'
import Down from '../../assets/images/chevron-down.svg'


export default function Listing() {
  return (
    <div className='bg-grey-vlight pt-20 pb-44'>
      <div className='w-11/12 mx-auto 2xl:max-w-[1200px]'>
      <h1 className='f-f-r-s font-semibold text-center text-grey-dark text-6xl sm:text-[34px] md:text-9xl'> <span className='text-green-dark'> Job Listings</span>  at Rapido Relief App</h1>

      <p className='f-f-r-s text-lg text-green-dark text-center mt-[14px]'>
      Are you passionate about making a difference in the healthcare industry? Do you thrive in a dynamic and collaborative environment? If so, we want you to be a part of our team! At Rapido Relief, we're on a mission to transform healthcare for everyone. Our team is comprised of dedicated individuals who are driven by innovation, empathy, and a shared commitment to improving lives.
      </p>
      <div className="mt-[60px] border border-green-dark rounded-[20px] p-5 md:p-10 h-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <div className="text-center md:text-start">
            <ul className='inline-flex items-center space-x-3'>
              <li className='careermobile w-[84px] h-[84px] p-4 rounded-[100px] border-[2px] border-red-vlight '>
                <div className="careerinner w-[52px h-[52px] rounded-[75px] border-[2px border-blue-vlight p-[14px] "> <img src={Mobileimg} className='w-6 h-6' alt="" />
                 </div>
              </li>
              <li className='f-f-r-s font-semibold text-lg sm:text-2xl text-green-dark'>Mobile App Developer</li>
            </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className=" text-center sm:text-end mt-5 sm:mt-0">
            
            <button className='text-start pl-4 w-[170px] h-[56px] rounded-[100px] border border-green-dark '>
            <ul className='inline-flex items-center space-x-4'>
                <li className='f-f-r-s text-tiny text-green-dark'>Apply Now</li>
                <li className=' w-[52px] h-[36px] bg-grey-dark rounded-[135px] px-[14px] py-[6px] '>
                <img src={Nextarrow} className='w-6 h-6' alt="" />
                </li>
                </ul>
               </button>

            </div>
            
          </div>
        </div>
        
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Camra} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Salary - $000 per year (based on experience)
        </h4>
        </div>

      
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Bag} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Experience - Minimum 2 years of mobile app development experience.
        </h4>
        </div>

     
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Stars} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.
        </h4>
        </div>

        <div className="text-end w-ful mt-10">
          <button className='w-[146px] h-[56px] cursor-pointer '>
            <ul className='inline-flex items-center space-x-2'>
              <li className='f-f-r-s text-tiny text-black-vlight'>Show More</li>
              <li className='showsetting w-14 h-14 rounded-[66px] border border-blue-dark p-[14px]'>
                <img src={Down} className='w-7 h-7' alt="" />

              </li>
            </ul>
          </button>
        </div>

      </div>
      <div className="mt-[60px] border border-green-dark rounded-[20px] p-5 md:p-10 h-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <div className="text-center md:text-start">
            <ul className='inline-flex items-center space-x-3'>
              <li className='careermobile w-[84px] h-[84px] p-4 rounded-[100px] border-[2px] border-red-vlight '>
                <div className="careerinner w-[52px h-[52px] rounded-[75px] border-[2px border-blue-vlight p-[14px] "> <img src={Mobileimg} className='w-6 h-6' alt="" />
                 </div>
              </li>
              <li className='f-f-r-s font-semibold text-lg sm:text-2xl text-green-dark'>Mobile App Developer</li>
            </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className=" text-center sm:text-end mt-5 sm:mt-0">
            
            <button className='text-start pl-4 w-[170px] h-[56px] rounded-[100px] border border-green-dark '>
            <ul className='inline-flex items-center space-x-4'>
                <li className='f-f-r-s text-tiny text-green-dark'>Apply Now</li>
                <li className=' w-[52px] h-[36px] bg-grey-dark rounded-[135px] px-[14px] py-[6px] '>
                <img src={Nextarrow} className='w-6 h-6' alt="" />
                </li>
                </ul>
               </button>

            </div>
            
          </div>
        </div>
        
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Camra} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Salary - $000 per year (based on experience)
        </h4>
        </div>

      
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Bag} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Experience - Minimum 2 years of mobile app development experience.
        </h4>
        </div>

     
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Stars} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.
        </h4>
        </div>

        <div className="text-end w-ful mt-10">
          <button className='w-[146px] h-[56px] cursor-pointer '>
            <ul className='inline-flex items-center space-x-2'>
              <li className='f-f-r-s text-tiny text-black-vlight'>Show More</li>
              <li className='showsetting w-14 h-14 rounded-[66px] border border-blue-dark p-[14px]'>
                <img src={Down} className='w-7 h-7' alt="" />

              </li>
            </ul>
          </button>
        </div>

      </div>

      <div className="mt-[60px] border border-green-dark rounded-[20px] p-5 md:p-10 h-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <div className="text-center md:text-start">
            <ul className='inline-flex items-center space-x-3'>
              <li className='careermobile w-[84px] h-[84px] p-4 rounded-[100px] border-[2px] border-red-vlight '>
                <div className="careerinner w-[52px h-[52px] rounded-[75px] border-[2px border-blue-vlight p-[14px] "> <img src={Mobileimg} className='w-6 h-6' alt="" />
                 </div>
              </li>
              <li className='f-f-r-s font-semibold text-lg sm:text-2xl text-green-dark'>Mobile App Developer</li>
            </ul>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className=" text-center sm:text-end mt-5 sm:mt-0">
            
            <button className='text-start pl-4 w-[170px] h-[56px] rounded-[100px] border border-green-dark '>
            <ul className='inline-flex items-center space-x-4'>
                <li className='f-f-r-s text-tiny text-green-dark'>Apply Now</li>
                <li className=' w-[52px] h-[36px] bg-grey-dark rounded-[135px] px-[14px] py-[6px] '>
                <img src={Nextarrow} className='w-6 h-6' alt="" />
                </li>
                </ul>
               </button>

            </div>
            
          </div>
        </div>
        
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Camra} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Salary - $000 per year (based on experience)
        </h4>
        </div>

      
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Bag} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        Experience - Minimum 2 years of mobile app development experience.
        </h4>
        </div>

     
        <div className="inline-flex space-x-2 mt-10 w-full">
        <img src={Stars} alt=""  className='w-auto xl:w-6 h-auto xl:h-6' />
        <h4  className='f-f-r-s  text-lg text-green-dark'>
        development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.
        </h4>
        </div>

        <div className="text-end w-ful mt-10">
          <button className='w-[146px] h-[56px] cursor-pointer '>
            <ul className='inline-flex items-center space-x-2'>
              <li className='f-f-r-s text-tiny text-black-vlight'>Show More</li>
              <li className='showsetting w-14 h-14 rounded-[66px] border border-blue-dark p-[14px]'>
                <img src={Down} className='w-7 h-7' alt="" />

              </li>
            </ul>
          </button>
        </div>

      </div>
      </div>
      
    </div>
  )
}
