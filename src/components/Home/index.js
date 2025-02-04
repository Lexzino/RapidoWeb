import React, { useEffect } from "react";
import Header from "./header.js";
import Hero from "./Hero.js";
import Option from "./Option.js";
import Vision from "./Vision.js";
import Help from "./Help.js";
import Telehealth from "./Telehealth.js";
import Relief from "./Relief.js";
import Feature from "./Feature.js";
import Jobs from "./Jobs.js";
import Esg from "./Esg.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import Subscribe from "./Subscribe.js";
import Joinus from "./Joinus.js";
import Travaltime from "./Travaltime.js";
import Work from "./Works.js";

import ChatBot from "../Chatbot/index.js";
import ProviderMarketplace from "./provider-arketplace.js";
import FAQSection from "./faq-section.js";
import { LanguageProvider } from "../../LanguageContext.js";
import Cookies from '../Cookies/index.jsx'

export default function Index() {

  return (
    <LanguageProvider>
    <div>
      {/* <ChatBot/> */}
      <ChatBot />
      <Cookies />
      <div className={` bg-cover bg-no-repeat bg-center w-full herobg`}>
        {/* <Header/> */}
        <Navbar />
        <Hero />
      </div>
      <div>
      <Work />
      </div>
      <div className="bg-[#f6fbf4]">
        <Option />
        <Vision />
      </div>
      <Help />
      <ProviderMarketplace />
      <Telehealth />
      <FAQSection />
      <Jobs />
      <Travaltime />
      <Joinus />
      <Esg />
      <Subscribe />

      {/* <Relief />
      <Feature /> */}
      <Footer />
    </div>
    </LanguageProvider>
  );
}
