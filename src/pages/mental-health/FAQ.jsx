import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'; // Import Heroicons

const FAQ = () => {
  // Define state for all dropdowns using an array
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // FAQ items with questions and answers
  const faqs = [
    {
      question: 'How Much Does Rapido Relief Online Therapy Cost?',
      answer:
        'The cost depends on your payment method. Many employers offer Rapido Relief for free, either through a direct employer code or as part of an Employee Assistance Program (EAP). Additionally, most major health insurance plans cover Rapido Relief therapy, meaning you may only need to pay a small copay (typically around $25). For out-of-pocket payments, Rapido Relief therapy plans start at just $69 per week.'
    },
    {
      question: 'Does Insurance Cover Online Therapy?',
      answer:
        'Typically, yes. Rapido Relief is in-network with many major insurance plans, and most covered members pay only a copay of $30 or less. Online therapy through Rapido Relief may also be covered by your employer’s healthcare plan, or you could receive it for free as a direct benefit from your employer. Learn more about insurance coverage for therapy.'
    },
    {
      question: 'Is Online Therapy Effective?',
      answer:
        'Yes, online therapy is proven to be as effective, if not more effective, than traditional face-to-face therapy. A study conducted by Rapido Relief & the Journal of Telemedicine and e-Health showed that text-based therapy through Rapido Relief was highly effective and comparable to traditional therapy. Rapido Relief also generated higher satisfaction in terms of delivery, accessibility, and affordability. Learn more from Rapido Relief research.'
    },
    {
      question: 'What is the Difference Between Therapy and Psychiatry?',
      answer:
        'Therapy and psychiatry both play vital roles in your mental health treatment plan. In therapy, licensed therapists work with you to discuss personal challenges and create a tailored plan, but they are unable to prescribe medication. Psychiatry is a medical field that involves prescribing and monitoring medications to treat mental health symptoms. Psychiatrists and psychiatric providers are licensed medical professionals who specialize in mental health and can offer psychiatric care and personalized medication management.'
    },
    {
      question: 'How Do I Get Matched with a Therapist?',
      answer:
        'After answering a few questions with Rapido Relief’s Chatbot about your symptoms and preferences, you’ll be matched with a therapist who is licensed in your state and suited to your needs. Rapido Relief therapists come from a diverse range of specialties. If you don’t feel the connection with your therapist, switching is easy. Learn how to change your provider.'
    }
  ];

  return (
    <div className="w-full py-16 px-6 bg-[#F6FCF3]">
      <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
        {/* Header */}
        <h1 className="text-[35px] text-center font-bold text-[#1A4402] mb-4">FAQ's</h1>
        <p className="text-[#1A440280] lg:text-center text-[18px] mb-8">
          Find Reliable Answers to All Your Mental Health Questions at Rapido Relief
        </p>

        {/* FAQ Dropdowns */}
        {faqs.map((faq, index) => (
          <div key={index} className="mb-0.5">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-[820px] flex justify-between items-center mx-auto text-left font-bold text-[#1A4402] py-4 px-6 bg-white border rounded-lg shadow-md transition-all ease-in-out duration-300"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openDropdown === index ? (
                  <ChevronUpIcon className="w-6 h-6 text-[#1A4402]" />
                ) : (
                  <ChevronDownIcon className="w-6 h-6 text-[#1A4402]" />
                )}
              </span>
            </button>
            {openDropdown === index && (
              <div className="transition-all ease-in-out duration-300 mt-2 w-[820px] mx-auto py-4 px-6 bg-[#F6F9F4] text-[#1A440280] rounded-lg shadow-md">
                <p className="text-[16px]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;