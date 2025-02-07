import React from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Home/Navbar';
import { Button, Input } from 'antd';
// import Appointment from '../../public/pageImages/book-appointment.svg';
// import Mental from '../../public/images/Mentalnew.svg';
// import SearchIcon from '../../public/pageImages/search-icon.svg';
// import LocationIcon from '../../public/pageImages/location-icon.svg';
// import SecurityIcon from '../../public/pageImages/security-icon.svg';
// import Consult from '../../public/images/Consultnew.svg';
// import Find from '../../public/images/Findnew.svg';
// import Doctor from '../../public/images/Doctornew.svg';
// import Hospital from '../../public/images/hospitalnew.svg';
// import Ambulance from '../../public/images/Ambulancenew.svg';
import Esg from '../../components/Home/Esg';
import Footer from '../../components/Home/Footer';
import Jobs from '../../components/Home/Travaltime';
import DoctorProfileCard from '../../components/Reuseable/Cards/DoctorProfileCards';
import MentallWellness from './MentallWellness'
import TrustedCare from './TrustedCare'
import MentalHealthConditions from './MentalHealthConditins'
import ProvideMarketplace from '../../components/Home/provider-arketplace'
import FAQ from './FAQ'
import JOB from '../../components/Home/Jobs'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
    const doctor = {
        profileImage: "/pageImages/doctor-profile.svg",
        name: 'Dr. Rapido Relief',
        country: 'Sao Paulo, Brazil',
        rating: 4.5,
        reviewCount: 15,
        experience: 10,
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const contentData = [
        {
            imgSrc: "/pageImages/primary-patient.svg",
            title: "Primary Care",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: "/pageImages/weight-management.svg",
            author: "author name",
            title: "Weight Management",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: "/pageImages/urgent-care.svg",
            author: "author name",
            title: "Urgent Care",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: "/pageImages/mental-health.svg",
            title: "Mental Health",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        }
    ];

    return (
        <>
            <div>
                <div className='main-wrapper-explore '>
                    <Navbar />
                    <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
                        <div className="grid grid-cols-12 gap-5 2xl:gap-20 mt-10">
                            <div className="col-span-12 xl:col-span-6">
                            <div className="explore-header-title w-[380px] leading-[1.2]">
    <h2 className="f-f-m text-[45px] sm:text-11xl primary-color inline mr-2">
        We care
    </h2>
    <h2 className="f-f-m text-[45px] sm:text-11xl text-white inline">
        about your health & Therapy
    </h2>
</div>
                                <div className="w-full sm:w-[435px] ">
                                    <h5 className="mt-2 f-f-r text-lg sm:text-2xl text-[#1A4402] p-title-explore">
                                        Good health is the state of mental, physical and social well being
                                        and it does not just mean absence of diseases.
                                    </h5>
                                </div>

                                <div className=" mt-5 pb-5 sm:mt-[76px] f-f-m text-2xl text-white ">
                                    <div className='flex gap-5'>
                                        <Button className='explore-hero-button primary-color-bg'>Mental Health Counseling Near You!</Button>
                                        <img className='img-explore-watch' src="/icons/watch-video.svg" width={130} height={100} alt='watch-video' />
                                    </div>
                                    <p className='subtitle-explore mt-3'>Become member of our community?</p>
                                </div>

                            </div>
                            <div className='col-span-12 xl:col-span-6 hero-text-card-explore hidden xl:block'>
                                <div className='image-explores'>
                                    <img src="/pageImages/well-qualified-doctors.svg" alt='well-qualified-doctors' width={270} />
                                    <img src="/pageImages/book-appointment.svg" alt='book-online-appointment' width={270} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search bars */}
                <div className='explore-second-wrapper pb-6'>
                    <div className='w-11/12 pt-[72px] mx-auto 2xl:max-w-[1154px]'>
                    <div className=" flex flex-col md:flex-row justify-between w-full bg-[#EAF9D6] border-b-[1px] border-[#1A4402] ">
          <div className="w-full p-5 border-r-[1px] border-[#1A4402] space-y-2">
            <h1 className="text-[#738c5b] text-[18.474px] font-medium f-f-m-p ">
              Search 
            </h1>
            <div className=" flex justify-start items-center gap-4 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <g clip-path="url(#clip0_2426_504)">
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="#323232"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2426_504">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <input
                placeholder= "Condition or Physician"
                className=" placeholder:text-[#b0ca7b] text-[18.474px] font-medium outline-none f-f-m-p bg-transparent w-full"
              />
            </div>
          </div>
          <div className="w-full p-5 border-r-[1px] border-[#1A4402] space-y-2">
            <h1 className="text-[#738c5b] text-[18.474px] font-medium f-f-m-p ">
              Location
            </h1>
            <div className=" flex justify-start items-center gap-4 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none">
                <path
                  d="M8 9.89898V14.999C8 15.2642 8.10536 15.5186 8.29289 15.7061C8.48043 15.8936 8.73478 15.999 9 15.999C9.26522 15.999 9.51957 15.8936 9.70711 15.7061C9.89464 15.5186 10 15.2642 10 14.999V9.89898C11.214 9.65116 12.2928 8.96139 13.0272 7.96339C13.7616 6.96539 14.0992 5.73026 13.9747 4.49746C13.8501 3.26465 13.2723 2.12201 12.3532 1.29104C11.434 0.46008 10.2391 0 9 0C7.76092 0 6.56598 0.46008 5.64685 1.29104C4.72771 2.12201 4.14986 3.26465 4.02532 4.49746C3.90078 5.73026 4.23843 6.96539 4.9728 7.96339C5.70718 8.96139 6.78596 9.65116 8 9.89898ZM9 1.99898C9.59334 1.99898 10.1734 2.17493 10.6667 2.50457C11.1601 2.83422 11.5446 3.30275 11.7716 3.85093C11.9987 4.39911 12.0581 5.00231 11.9424 5.58425C11.8266 6.16619 11.5409 6.70074 11.1213 7.1203C10.7018 7.53986 10.1672 7.82558 9.58527 7.94134C9.00333 8.05709 8.40013 7.99768 7.85195 7.77062C7.30377 7.54356 6.83524 7.15904 6.50559 6.66569C6.17595 6.17234 6 5.59232 6 4.99898C6 4.20333 6.31607 3.44027 6.87868 2.87766C7.44129 2.31505 8.20435 1.99898 9 1.99898ZM13.21 12.419C13.0787 12.3914 12.9432 12.39 12.8113 12.4147C12.6795 12.4395 12.5537 12.49 12.4414 12.5634C12.329 12.6367 12.2322 12.7315 12.1565 12.8423C12.0808 12.9531 12.0276 13.0777 12 13.209C11.9724 13.3403 11.971 13.4758 11.9958 13.6076C12.0205 13.7395 12.071 13.8652 12.1444 13.9776C12.2178 14.09 12.3125 14.1868 12.4233 14.2625C12.5341 14.3382 12.6587 14.3914 12.79 14.419C15.06 14.869 16 15.679 16 15.999C16 16.579 13.55 17.999 9 17.999C4.45 17.999 2 16.579 2 15.999C2 15.679 2.94 14.869 5.21 14.379C5.34132 14.3514 5.46593 14.2982 5.5767 14.2225C5.68747 14.1468 5.78224 14.05 5.8556 13.9376C5.92896 13.8252 5.97947 13.6995 6.00424 13.5676C6.02902 13.4358 6.02758 13.3003 6 13.169C5.97242 13.0377 5.91925 12.9131 5.84352 12.8023C5.76778 12.6915 5.67097 12.5967 5.55861 12.5234C5.44626 12.45 5.32055 12.3995 5.18867 12.3747C5.05679 12.35 4.92132 12.3514 4.79 12.379C1.75 13.079 0 14.389 0 15.999C0 18.629 4.53 19.999 9 19.999C13.47 19.999 18 18.629 18 15.999C18 14.389 16.25 13.079 13.21 12.419Z"
                  fill="black"
                />
              </svg>
              <input
                placeholder= "City, State or Zip/Post Code"
                className=" placeholder:text-[#b0ca7b] text-[18.474px] font-medium outline-none f-f-m-p bg-transparent w-full"
              />
            </div>
          </div>
          <div className="w-full p-5 border-r-[1px] border-[#1A4402] space-y-2">
            <h1 className="text-[#738c5b] text-[18.474px] font-medium f-f-m-p ">
            Have Insurance
            </h1>
            <div className=" flex justify-start items-center gap-4 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M19.63 3.64994C19.5138 3.55596 19.3781 3.48922 19.2327 3.45461C19.0873 3.41999 18.9361 3.4184 18.79 3.44994C17.7214 3.67389 16.6183 3.67674 15.5486 3.45833C14.4789 3.23991 13.4653 2.80486 12.57 2.17994C12.4026 2.06381 12.2037 2.00159 12 2.00159C11.7963 2.00159 11.5974 2.06381 11.43 2.17994C10.5348 2.80486 9.52108 3.23991 8.45137 3.45833C7.38166 3.67674 6.27857 3.67389 5.21001 3.44994C5.06394 3.4184 4.91267 3.41999 4.76731 3.45461C4.62194 3.48922 4.48618 3.55596 4.37001 3.64994C4.25399 3.74406 4.16053 3.86298 4.0965 3.99796C4.03247 4.13294 3.9995 4.28055 4.00001 4.42994V11.8799C3.99912 13.3137 4.34078 14.7269 4.99654 16.0019C5.6523 17.2769 6.60319 18.3768 7.77001 19.2099L11.42 21.8099C11.5894 21.9305 11.7921 21.9953 12 21.9953C12.2079 21.9953 12.4106 21.9305 12.58 21.8099L16.23 19.2099C17.3968 18.3768 18.3477 17.2769 19.0035 16.0019C19.6592 14.7269 20.0009 13.3137 20 11.8799V4.42994C20.0005 4.28055 19.9675 4.13294 19.9035 3.99796C19.8395 3.86298 19.746 3.74406 19.63 3.64994ZM18 11.8799C18.0008 12.9947 17.7353 14.0935 17.2257 15.085C16.716 16.0764 15.977 16.9318 15.07 17.5799L12 19.7699L8.93001 17.5799C8.02304 16.9318 7.28399 16.0764 6.77435 15.085C6.26472 14.0935 5.99924 12.9947 6.00001 11.8799V5.57994C8.09643 5.75938 10.196 5.27297 12 4.18994C13.804 5.27297 15.9036 5.75938 18 5.57994V11.8799ZM13.54 9.58994L10.85 12.2899L9.96001 11.3899C9.7717 11.2016 9.51631 11.0958 9.25001 11.0958C8.9837 11.0958 8.72831 11.2016 8.54001 11.3899C8.3517 11.5782 8.24591 11.8336 8.24591 12.0999C8.24591 12.3662 8.3517 12.6216 8.54001 12.8099L10.14 14.4099C10.233 14.5037 10.3436 14.5781 10.4654 14.6288C10.5873 14.6796 10.718 14.7057 10.85 14.7057C10.982 14.7057 11.1127 14.6796 11.2346 14.6288C11.3564 14.5781 11.467 14.5037 11.56 14.4099L15 10.9999C15.1883 10.8116 15.2941 10.5562 15.2941 10.2899C15.2941 10.0236 15.1883 9.76825 15 9.57994C14.8117 9.39164 14.5563 9.28585 14.29 9.28585C14.0237 9.28585 13.7683 9.39164 13.58 9.57994L13.54 9.58994Z"
                  fill="black"
                />
              </svg>
              <input
                placeholder= "Choose Insurance"
                className=" placeholder:text-[#b0ca7b] text-[18.474px] font-medium outline-none f-f-m-p bg-transparent w-full"
              />
            </div>
          </div>
          <div className=" min-w-[81px] h-[104px] flex justify-center items-center bg-[#1A4402]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M15 10H12V7.00003C12 6.73481 11.8946 6.48046 11.7071 6.29292C11.5196 6.10538 11.2652 6.00003 11 6.00003C10.7348 6.00003 10.4804 6.10538 10.2929 6.29292C10.1054 6.48046 10 6.73481 10 7.00003V10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10535 10.4805 6 10.7348 6 11C6 11.2652 6.10535 11.5196 6.29289 11.7071C6.48043 11.8947 6.73478 12 7 12H10V15C10 15.2652 10.1054 15.5196 10.2929 15.7071C10.4804 15.8947 10.7348 16 11 16C11.2652 16 11.5196 15.8947 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15V12H15C15.2652 12 15.5196 11.8947 15.7071 11.7071C15.8946 11.5196 16 11.2652 16 11C16 10.7348 15.8946 10.4805 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10ZM21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43203 2.04546 6.24272 2.98759 4.61514 4.61517C2.98756 6.24275 2.04543 8.43207 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8482 21.617 21.7738 21.71 21.68C21.8902 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9923 4.1345 9.63439C4.4046 8.27653 5.07128 7.02925 6.05025 6.05028C7.02922 5.07131 8.2765 4.40463 9.63436 4.13453C10.9922 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"
                fill="#58FD0A"
              />
            </svg>
          </div>
        </div>

                        <div className="bg-green-vlight pt-8 pb-6 mb-12 rounded-b-[25px]">
    <div className="mx-auto w-11/12">
        <div className="grid grid-cols-12 items-center gap-5">
            <div className="col-span-12 flex justify-center items-center w-[814px] m-auto">
                <h1 className='text-[#1A4402] text-[25px] lg:text-[64px] py-4 mb-6'>Look for a licensed therapist</h1>
            </div>
        </div>
    </div>
</div>

                    </div>

                </div>

                {/* How it Works */}
               <MentallWellness />

                <TrustedCare />

              

                <MentalHealthConditions />

                <ProvideMarketplace />

                <FAQ />
               
               <JOB />

                {/* Book Appointmnet 
                <div className='flex justify-center mt-10'>
                    <img src="/images/book-appointment.svg" alt='' />
                </div>*/}
            </div>
            <div className='mt-10'>
                <Jobs />
            </div>
            <Esg />
            <Footer />
        </>
    );
}

export default Explore;
