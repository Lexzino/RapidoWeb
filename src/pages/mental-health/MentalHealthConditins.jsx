import React from 'react';

const MentalHealthConditions = () => {
  const firstRowButtons = ['DEPRESSION', 'ANXIETY & STRESS', 'RELATIONSHIPS', 'BIPOLAR DISORDER'];
  const secondRowButtons = ['EATING DISORDERS', 'PARANOIA', 'SUICIDAL IDEATION', 'INSOMNIA'];
  const thirdRowButtons = ['BORDERLINE PERSONALITY DISORDER', 'ADDICTION', 'ALCOHOL USE'];
  const fourthRowButtons = ['ANTISOCIAL PERSONALITY', 'SOCIAL ANXIETY', 'SPECIFIC PHOBIA'];
  const fifthRowButtons = ['SEASONAL AFFECTIVE DISORDER', 'OCD', 'ANGER MANAGEMENT'];
  const sixthRowButtons = ['CHILDHOOD ABUSE', 'MOOD DISORDERS', 'TRAUMA & GRIEF'];
  const seventhRowButtons = ['LONELINESS', 'FAMILY CONFLICT', 'AND MORE...'];

  return (
    <div className="bg-[#F6FCF3] w-full">
      <div className="w-11/12 mx-auto 2xl:max-w-[1154px] py-16 px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Side: Header and Description */}
        <div className="lg:w-1/2">
          <h1 className="lg:w-[476px] text-[25px] lg:text-[35px] font-bold text-black mb-4">
            Comprehensive Care for 150+ Mental Health Conditions
          </h1>
          <p className="lg:w-[539px] lg:text-[20px] text-[#1A440280]">
            Our providers specialize in preventative care and a wide range of mental health treatments across 150+ areas of expertise,
            enabling us to support millions of individuals effectively.
          </p>
        </div>

        {/* Right Side: Buttons */}
        <div className="lg:w-1/2">
          {/* First Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {firstRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {secondRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {thirdRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Fourth Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {fourthRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Fifth Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {fifthRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Sixth Row */}
          <div className="flex flex-wrap gap-4 mb-4">
            {sixthRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>

          {/* Seventh Row */}
          <div className="flex flex-wrap gap-4">
            {seventhRowButtons.map((button, index) => (
              <button
                key={index}
                className="py-2 lg:px-4 px-1 border rounded-[24px] border-green-dark text-center font-extrabold text-[8px] lg:text-[10px] text-green-dark"
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* New Section: Enhancing Diagnosis and Treatment */}
      <section className="bg-[#BBDE8E] py-16 px-6 mt-8 w-full relative">
        {/* Camel bump shape using clip-path inline */}
        <div
          style={{
            clipPath: 'polygon(0 100%, 25% 70%, 50% 80%, 75% 70%, 100% 100%, 0 100%)',
            backgroundColor: '#BBDE8E',
            height: '100px',
            position: 'absolute',
            top: '-90px',
            left: '0',
            right: '0',
            margin: 'auto',
            width: '400px',
            zIndex: 10,
          }}
        ></div>

        <div className="w-11/12 mx-auto 2xl:max-w-[1154px] pt-6">
          <h2 className="lg:text-[35px] font-bold text-center mb-8 text-[#1A4402]">
            Enhancing Diagnosis and Treatment
          </h2>

          {/* Flex container for cards */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Card 1 */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A4402] mb-4">
                Machine Learning
              </h3>
              <p className="lg:text-[18x] text-black w-[510px]">
                Our advanced machine learning-powered chatbot, Rapido Precision Therapy™, utilizes natural language processing to analyze communications with therapists for improved precision and support.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A4402] mb-4">
                Patient Insights
              </h3>
              <p className="lg:text-[18x] text-black w-[510px]">
                Rapido Precision Therapy™ equips providers with actionable insights into patient needs and behaviors, delivering suggestions to optimize care and achieve the best clinical outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentalHealthConditions;