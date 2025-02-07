import React from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Home/Navbar';
import './style.css';
import { Button, Input } from 'antd';
import WatchVideo from '../../public/icons/watch-video.svg';
import Doctors from '../../public/pageImages/well-qualified-doctors.svg';
import Appointment from '../../public/pageImages/book-appointment.svg';
import Mental from '../../public/images/Mentalnew.svg';
import SearchIcon from '../../public/pageImages/search-icon.svg';
import LocationIcon from '../../public/pageImages/location-icon.svg';
import SecurityIcon from '../../public/pageImages/security-icon.svg';
import Consult from '../../public/images/Consultnew.svg';
import Find from '../public/images/Findnew.svg';
import Doctor from '../../public/images/Doctornew.svg';
import Hospital from '../../public/images/hospitalnew.svg';
import Ambulance from '../../public/images/Ambulancenew.svg';
import Esg from '../../components/Home/Esg';
import Footer from '../../components/Home/Footer';
import Jobs from '../../components/Home/Travaltime';
import DoctorProfileCard from '../../components/Reuseable/Cards/DoctorProfileCards';
import ProfileImage from '../../public/pageImages/doctor-profile.svg';
import Helpmobile from '../../public/images/how-it-works.svg'
import PatientCare from '../../public/pageImages/primary-patient.svg';
import WeightManagement from '../../public/pageImages/weight-management.svg';
import UrgentCare from '../../public/pageImages/urgent-care.svg';
import MentalHealth from '../../public/pageImages/mental-health.svg';
import RightIcon from '../../public/icons/right-icon.svg';
import BookAppointment from '../../public/images/book-appointment.svg';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Explore = () => {
    const doctor = {
        profileImage: ProfileImage,
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
            imgSrc: PatientCare,
            title: "Primary Care",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: WeightManagement,
            author: "author name",
            title: "Weight Management",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: UrgentCare,
            author: "author name",
            title: "Urgent Care",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        },
        {
            imgSrc: MentalHealth,
            title: "Mental Health",
            tags: ["Type 2 diabetes", "Acid reflex", "Migrane"]
        }
    ];

    return (
        <>
            <div>
                <div className='main-wrapper-explore'>
                    <Navbar />
                    <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
                        <div className="grid grid-cols-12 gap-5 2xl:gap-20 mt-10">
                            <div className="col-span-12 xl:col-span-6">
                                <div className='explore-header-titles'>
                                    <h2 className="f-f-m text-[45px] sm:text-11xl explore-header-h2 primary-color">
                                        We care
                                    </h2>
                                    <h2 className="f-f-m text-[45px] sm:text-11xl text-white">
                                        about your health
                                    </h2>
                                </div>
                                <div className="w-full sm:w-[435px] ">
                                    <h5 className="mt-2 f-f-r text-lg sm:text-2xl text-white p-title-explore">
                                        Good health is the state of mental, physical and social well being
                                        and it does not just mean absence of diseases.
                                    </h5>
                                </div>

                                <div className=" mt-5 pb-5 sm:mt-[76px] f-f-m text-2xl text-white ">
                                    <div className='flex gap-5'>
                                        <Button className='explore-hero-button primary-color-bg'>Book Best Doctor Near You!</Button>
                                        <img className='img-explore-watch' src={WatchVideo} width={130} height={100} alt='watch-video' />
                                    </div>
                                    <p className='subtitle-explore mt-3'>Become member of our community?</p>
                                </div>

                            </div>
                            <div className='col-span-12 xl:col-span-6 hero-text-card-explore hidden xl:block'>
                                <div className='image-explores'>
                                    <img src={Doctors} alt='well-qualified-doctors' width={270} />
                                    <img src={Appointment} alt='book-online-appointment' width={270} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search bars */}
                <div className='explore-second-wrapper'>
                    <div className='w-11/12 pt-[72px] mx-auto 2xl:max-w-[1154px]'>
                        <div className='pt-3 pb-5 px-5 flex flex-col sm:flex-row searchtabs'>
                            <div className='smClass'>
                                <label className='ml-3 labelclass'>Search</label>
                                <Input className='inputclass sm:text-sm' size="large" placeholder="Condition, Physician or Pharmacy" prefix={<img src={SearchIcon} alt="search-icon" />} />
                            </div>
                            <div className='smClass'>
                                <label className='ml-3 labelclass'>Location</label>
                                <Input className='inputclass sm:text-sm' size="large" placeholder="City, State or Zip/Post Code" prefix={<img src={LocationIcon} alt="search-icon" />} />
                            </div>
                            <div className='smClass'>
                                <label className='ml-3 labelclass'>Have Insurance</label>
                                <Input className='inputclass sm:text-sm' size="large" placeholder="Choose Insurance" prefix={<img src={SecurityIcon} alt="search-icon" />} />
                            </div>
                        </div>
                        <div className="bg-green-vlight  pt-8  rounded-b-[25px]  ">
                            <div className="mx-auto w-11/12">
                                <div className="grid grid-cols-12 items-center gap-5">

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px]  py-3 px-5 optionsetting">
                                            <img src={Consult} className='w-[61px] h-[50px] ml-auto ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Consult  Online</h5>
                                        </div>
                                    </div>

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-5 optionsetting">
                                            <img src={Find} className='w-[46px] h-[50px] ml-auto ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Find
                                                Pharmacy</h5>
                                        </div>
                                    </div>

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-5 optionsetting">
                                            <img src={Doctor} className='w-[49px] h-[50px] ml-auto ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Find a
                                                Doctors</h5>
                                        </div>
                                    </div>

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-5 optionsetting">
                                            <img src={Hospital} className='w-[50px] h-[50px] ml-auto ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Find a
                                                Hospital</h5>
                                        </div>
                                    </div>

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-5 optionsetting">
                                            <img src={Ambulance} className='w-[54px] h-[50px] ml-auto  ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Emergency
                                                Ambulance</h5>
                                        </div>
                                    </div>

                                    <div className="  col-span-6 md:col-span-4 xl:col-span-2">
                                        <div className="bg-white mt-[15px] h-[160px] mb-[25px] py-3 px-5 optionsetting">
                                            <img src={Mental} className='w-[51px] h-[50px] ml-auto ' alt="" />
                                            <h5 className='f-f-r text-2xl text-green-dark mt-[35px] hover:text-white leading-normal '>Mental
                                                Health</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Available Speciality */}
                    <div className='w-11/12 pt-[72px] mx-auto 2xl:max-w-[1154px] pb-10'>
                        <div className='available-speciality-header flex justify-center'>
                            <h1 className='available-speciality-title'>Available Specialty</h1>
                        </div>
                        <div>
                            <Slider {...settings}>
                                <DoctorProfileCard doctor={doctor} />
                                <DoctorProfileCard doctor={doctor} />
                                <DoctorProfileCard doctor={doctor} />
                                <DoctorProfileCard doctor={doctor} />
                                <DoctorProfileCard doctor={doctor} />
                                <DoctorProfileCard doctor={doctor} />
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* How it Works */}
                <div className="bg-white-light pt-[71px]">
                    <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
                        <div className="grid grid-cols-12 gap-5 pb-[70px] sm:pt-10 lg:py-[70px]  ">
                            <div className="col-span-12 lg:col-span-5">
                                <img src={Helpmobile} className='w-full mb-5 lg:mb-0 h-[525px]' alt="" />
                            </div>
                            <div className="col-span-12 lg:col-span-7">
                                <ul className='inline-flex items-center space-x-5'>
                                    <h1 style={{ fontFamily: "serif" }} className='  text-xl sm:text-9xl text-black '>How it Works</h1>

                                </ul>
                                <div className='pl-10 ml-5'>
                                    <ul className='inline-flex items-center space-x-5 mt-9'>
                                        {/* <li><img src={Intuitive} className='h-[80px] w-80px]' alt="" /></li> */}
                                        <li><h1 className='f-f-b font-extrabold text-xl sm:text-2xl text-black mb-3'>Create your account.</h1>
                                            <h2 className='f-f-r text-md sm:text-1xl'>Sign up and complete your registration.Once done, you'll instantly view the visit cost.</h2>
                                        </li>
                                    </ul>
                                    <ul className='inline-flex items-center space-x-5 mt-9'>
                                        {/* <li><img src={Patientrecord} className='h-[80px] w-80px]' alt="" /></li> */}
                                        <li><h1 className='f-f-b font-extrabold text-xl sm:text-2xl text-black mb-3 '>Choose a provider or schedule an appointment:</h1>
                                            <h2 className='f-f-r text-lg sm:text-1xl '>
                                                Select the next available healthcare professional
                                                or book an appointment at your convenience.
                                                Share your concerns and provide background
                                                information by answering a few quick questions.
                                            </h2>
                                        </li>
                                    </ul>
                                    <ul className='inline-flex items-center space-x-5 mt-9'>
                                        {/* <li><img src={Smart} className='h-[80px] w-80px]' alt="" /></li> */}
                                        <li><h1 className='f-f-b font-bold text-xl sm:text-2xl text-black mb-3 '>Begin your live virtual consultation</h1>
                                            <h2 className='f-f-r text-lg sm:text-1xl '>
                                                Connect with one of our board-certified doctors who will assess
                                                your symptoms and provide a personalized treatment plan. If
                                                necessary, receive prescriptions conveniently delivered to you or
                                                sent directly to your local pharmacy.
                                            </h2>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Health is our speciality */}
                <div className='pt-16'>
                    <div className='w-11/12 mx-auto 2xl:max-w-[1154px]'>
                        <div className="grid grid-cols-12 items-center">
                            <div className="col-span-12 sm:col-span-12">
                                <h4 className='f-f-m text-black text-center'>Your whole Health is Our Specialty</h4>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-[18px] mt-[41px]">
                            {contentData.map((data, index) => (
                                <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
                                    <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto sm:h-[400px] md:h-[440px] xl:h-[430px]">
                                        <div className="w-full h-[256px] rounded-b-[25px]">
                                            <img style={{ width: "inherit" }} src={data.imgSrc} alt="" />
                                        </div>
                                        <div className="text-start sm:mt-[15px] for-smallscreen-title">
                                            <h1 className=' text-black text-sm mt-3 leading-normal font-for-title pl-3'>
                                                {data.title}
                                            </h1>
                                        </div>
                                        <div className="text-center xl:text-start">
                                            <ul className='inline-flex items-center space-x-3 mt-[14px] mb-3'>
                                                {data.tags.map((tag, tagIndex) => (
                                                    <li key={tagIndex}>
                                                        <button className='w-auto px-3 h-[25px] border rounded-[24px] border-green-dark text-sm text-black font-for-tags'>{tag}</button>
                                                        <button className='w-auto px-3 h-[25px] border rounded-[24px] border-green-dark text-sm text-black font-for-tags mt-1'>{tag}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className='flex justify-between w-full px-2'>
                                                <div className='mt-2'>
                                                    <h2 className='primary-color'>LEARN MORE</h2>
                                                </div>
                                                <div className='right-arrow-down'>
                                                    <img className='primary-color' src={RightIcon} alt='RightIcon' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Book Appointmnet */}
                <div className='flex justify-center mt-10'>
                    <img src={BookAppointment} alt='' />
                </div>
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
