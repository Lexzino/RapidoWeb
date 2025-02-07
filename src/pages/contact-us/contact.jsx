import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="lg:w-[1155px] w-full m-auto min-h-screen flex flex-col items-center pt-[100px] lg:mb-0 mb-[20px] px-4">
      <h2 className="text-center text-[#0000008A] text-3xl lg:text-[30px] font-medium mb-6">
        We’re here to help! Whether you have a question, need support, or want to share feedback, feel free to reach out to us.
      </h2>

      <div className="w-full max-w-[1200px] flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="h-auto bg-[rgba(26,68,2,1)] lg:text-[23px] text-[rgba(234,249,214,1)] p-6 lg:w-[402px] mb-8 lg:mb-0">
          <h3 className="font-medium mb-4">Get in Touch</h3>
          <p className="mb-2">📧 <strong>Email Us:</strong></p>
          <p className="mb-2">
            For general inquiries: <a href="mailto:support@rapidorelief.com" className="text-green-500">support@rapidorelief.com</a>
          </p>
          <p className="mb-2">
            For partnerships: <a href="mailto:partnerships@rapidorelief.com" className="text-green-500">partnerships@rapidorelief.com</a>
          </p>
          <br />
          <p className="mb-2">
            💬 <strong>Live Chat:</strong> Use our live chat feature for instant assistance. <br />
            <a href="#chat" className="text-green-500 hover:underline">Start Chat</a>
          </p>

          {/* Social Links */}
          <div className="mt-[70px] flex gap-4">
            {[
              { href: 'https://web.facebook.com/RapidoReliefApp/', src: "/images/Gfacebook.svg", alt: 'Facebook' },
              { href: 'https://www.instagram.com/rapidreliefapp/', src: "/images/Ginstagram.svg", alt: 'Instagram' },
              { href: 'https://twitter.com/rapidoreliefapp', src: "/images/Gsocial.svg", alt: 'Twitter' },
              { href: 'https://www.linkedin.com/company/rapidreliefapp', src: "/images/Glinkedin.svg", alt: 'LinkedIn' },
              { href: 'https://www.linkedin.com/company/rapidreliefapp', src: "/images/Gyoutube.svg", alt: 'YouTube' },
            ].map(({ href, src, alt }) => (
              <li key={alt} className="h-10 w-10 flex justify-center items-center">
                <a href={href}>
                  <img src={src} className="w-8 h-8" alt={alt} />
                </a>
              </li>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full flex-1 h-auto bg-[rgba(234,249,214,1)] flex items-center justify-center">
          <form onSubmit={handleSubmit} className="w-[70%] py-4 lg:w-[650px]">
            <div className="flex flex-col lg:flex-row gap-6 mb-4">
              <div className="w-full lg:w-1/2">
                <label htmlFor="firstName" className="block text-sm mb-2 text-[#1A4402]">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-[#1A440280] focus:border-green-500 outline-none bg-[#EAF9D6] placeholder-[#1A440280]"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="lastName" className="block text-sm mb-2 text-[#1A4402]">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-[#1A440280] focus:border-green-500 outline-none bg-[#EAF9D6] placeholder-[#1A440280]"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mb-4">
              <div className="w-full lg:w-1/2">
                <label htmlFor="email" className="block text-sm mb-2 text-[#1A4402]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-[#1A440280] focus:border-green-500 outline-none bg-[#EAF9D6] placeholder-[#1A440280]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label htmlFor="phone" className="block text-sm mb-2 text-[#1A4402]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border-b-2 border-[#1A440280] focus:border-green-500 outline-none bg-[#EAF9D6] placeholder-[#1A440280]"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

     

            {/* Message */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm mb-2 text-[#1A4402]">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border-b-2 border-[#1A440280] focus:border-green-500 outline-none bg-[#EAF9D6] placeholder-[#1A440280]"
                placeholder="Write your message here"
                required
              />
            </div>

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="bg-[#1A4402] w-full lg:w-[214px] text-white py-2 rounded-md mt-4 hover:underline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}