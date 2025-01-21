import React from "react";
import Header from "./header";
import Hero from "./Hero";
import Option from "./Option";
import Vision from "./Vision";
import Help from "./Help";
import Telehealth from "./Telehealth";
import Relief from "./Relief";
import Feature from "./Feature";
import Jobs from "./Jobs";
import Esg from "./Esg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";
import Joinus from "./Joinus";
import Travaltime from "./Travaltime";
import Work from "./Works.js";

import ChatBot from "../Chatbot";
import ProviderMarketplace from "./provider-arketplace";
import FAQSection from "./faq-section";
import { LanguageProvider } from "../../LanguageContext.js";
import Cookies from '../Cookies'

export default function index() {
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
