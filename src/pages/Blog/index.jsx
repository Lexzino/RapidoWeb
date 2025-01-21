import React from 'react';
import Navbar from '../../components/Home/Navbar';
import { FaArrowAltCircleDown, FaArrowCircleDown, FaGreaterThan } from 'react-icons/fa';
import HealthQuestions from './HealthQuestions';
import Trends from './Trends';
import RecentBlogPosts from './RecentBlogs';
import Allblogs from './Allblogs';
import Subscribe from '../../components/Home/Subscribe';
import Footer from '../../components/Home/Footer';

const Explore = () => {
    return (
        <>
            <div>
                <div className="main-wrapper-explore">
                    <Navbar />
                    <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
                        <div className="grid grid-cols-12 gap-5 2xl:gap-20 mt-10">
                            <div className="col-span-12 xl:col-span-6">
                                {/* Breadcrumb */}
                                <ul className="inline-flex items-center">
                                    <li>
                                        <div className="bg-[#1A4402] w-[50px] md:w-[70px] h-[1px]"></div>
                                    </li>
                                    <li className="ml-[10px] md:ml-[22px]">
                                        <h2 className="text-[#1A4402] text-[10px] md:text-[12px] lg:text-xl f-f-m">
                                            RAPIDO RELIEF
                                        </h2>
                                    </li>
                                    <li className="text-[#1A4402] text-[10px] md:text-[12px] ml-2 md:ml-4 font-light">
                                        <FaGreaterThan />
                                    </li>
                                    <li>
                                        <p className="text-[#1A4402] text-[10px] md:text-[12px] lg:text-xl ml-2">
                                            Blog
                                        </p>
                                    </li>
                                </ul>

                                {/* Welcome Section */}
                                <div className="explore-header-title leading-[1.2] mt-4 md:mt-0">
                                    <h2 className="f-f-m text-[30px] md:text-[45px] lg:text-[65px] text-white inline mr-2">
                                        Welcome
                                    </h2>
                                </div>
                                <div className="w-full md:w-[326px] sm:w-[435px]">
                                    <h5 className="mt-2 f-f-r text-sm md:text-lg sm:text-2xl text-[#1A4402] p-title-explore">
                                        Check out the resources below for more proof on
                                        how Our App is leading and making a lasting impact
                                        in the general healthcare sector.
                                    </h5>
                                </div>

                                {/* Discover Section */}
                                <div className="mt-4 md:mt-8 mb-[30px] md:mb-[70px] pb-5 f-f-m text-base md:text-2xl flex gap-2 md:gap-4 py-4 items-center">
                                    <div className="mt-1 text-[#1A4402] cursor-pointer">
                                        <FaArrowCircleDown size={20} />
                                    </div>
                                    <p className="text-[#1A4402] text-sm md:text-[21px] font-light cursor-pointer hover:underline">
                                        DISCOVER
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <HealthQuestions />
                <Trends />
                <RecentBlogPosts />
                <Allblogs />
                <Subscribe />
                <Footer />
            </div>
        </>
    );
};

export default Explore;