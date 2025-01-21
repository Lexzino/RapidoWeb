import React from 'react';
import Navbar from '../../components/Home/Navbar';

export default function Hero() {
  return (
    <>
    <Navbar />
       <h2 className='text-white text-[36px] w-[162px] m-auto pt-[70px] uppercase'>
        Join Us
      </h2>
      <p className='text-white w-[1053px] m-auto text-center p-4 text-[18px]'>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
      </p>
      <div className='space-x-4 w-[340px] m-auto p-4'>
        <button className='border-[1px]-none w-[142px] p-[6px] text-white bg-[#58FD0A] rounded-xl'>
        Join the team
        </button>
        <button className='border-[1px] border-white w-[142px] p-[6px] text-white rounded-xl'>
        Culture
        </button>
      </div>
      <div className="w-11/12 mx-auto 2xl:max-w-[1200px] pb-[35px] pt-[50px]">
     
     <ul className="inline-flex items-center">
       <li>
       <div className=' bg-green w-[60px] lg:w-[100px] h-[1px] '  ></div>
       </li>
       <li className="ml-[22px]">
         <h2 className="text-green lg:text-4xl f-f-m uppercase">Join us in making a difference.</h2>
       </li>
     </ul>
   </div>
    </>
 
  );
}