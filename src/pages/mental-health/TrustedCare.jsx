import React from 'react';

const TrustedCare = () => {
    return (
        <div className="bg-white py-12">
            <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                    {/* Left-hand side: Header */}
                    <div className="text-left w-[414px]">
                        <h1 className="text-[42px] font-bold text-[#1A4402]">
                            Trusted Care from
                            Experienced and
                            Certified Therapists
                        </h1>
                    </div>

                    {/* Right-hand side: Image */}
                    <div className='lg:ml-20'>
                        <img
                            src="/images/trusted-care.svg"
                            alt="Trusted Care"
                            className="w-[500px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCare;