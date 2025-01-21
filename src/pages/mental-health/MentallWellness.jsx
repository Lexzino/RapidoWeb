import React from 'react';
import Helpmobile from '../../assets/images/how-it-works.svg';

const MentalWellness = () => {
    const cards = [
        {
            header: "Verify Your Insurance Coverage",
            description:
                "We partner with most major insurance plans, making it easy to check your coverage in just minutes. Prefer to pay directly? No problem—you can conveniently complete your payment right on our platform.",
        },
        {
            header: "Find Your Perfect Therapist",
            description:
                "Simply answer a few questions through our expertly designed chatbot, and it will connect you with a licensed provider tailored to your needs.",
        },
        {
            header: "Begin Your Therapy Journey",
            description:
                "Connect with your therapist through live sessions, messaging, or a combination of both—whichever works best for you.",
        },
        {
            header: "Change Providers Anytime",
            description:
                "If your initial therapist isn't the right match, you can easily switch to a new one at no extra cost.",
        },
    ];

    return (
        <div className="bg-white-light pt-[71px]">
            <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-7xl font-bold text-[#1A4402] uppercase">
                        Enhance Mental Wellness, Boost Productivity
                    </h1>
                </div>

                {/* Subheaders */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                    <div className="text-center sm:text-left">
                        <h3 className="text-[18px] font-semibold text-gray-800">
                            24/7 Easy Access, Wherever You Are
                        </h3>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-[18px] font-semibold text-gray-800">
                            Expert Support from Licensed Therapists
                        </h3>
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-[18px] font-semibold text-gray-800">
                            Customizable Plans to Fit Your Needs and Budget
                        </h3>
                    </div>
                </div>

                {/* Content: Image on Left and Text on Right using Flex */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/2 w-full">
                        <img
                            src={Helpmobile}
                            className="w-[150px] sm:w-[250px] lg:w-[410px] object-cover mx-auto"
                            alt="How it Works"
                        />
                    </div>

                    {/* Text and Cards Section */}
                    <div className="lg:w-1/2 w-full">
                        {/* Header */}
                        <h1 className="text-4xl sm:text-6xl font-bold text-[#1A4402] uppercase mb-8">
                            How does it work
                        </h1>

                        {/* Cards */}
                        <div className="space-y-6">
                            {cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="border border-black bg-[#EAF9D6] rounded-t-none rounded-b-[18px] p-6 max-w-[800px] mx-auto"
                                >
                                    <h3 className="text-[20px] font-bold text-[#1A4402] ">
                                        {card.header}
                                    </h3>
                                    <p className="text-[#1A440280] text-[15px] leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentalWellness;