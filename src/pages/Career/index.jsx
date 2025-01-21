import React from "react";
import Hero from "./Hero";
import BenefitsSection from "./Benefits";
import ProvideMarketplace from "../../components/Home/provider-arketplace";
import CareerOpenings from "./Careeropenings";
import Footer from "../../components/Home/Footer";

export default function career() {
    return (
        <>
                 <div
        className=""
        style={{
          background: "radial-gradient(86.15% 279.11% at 86.15% 79.75%, #43B307 0%, #1D4D03 27.83%)",
        }}
      >
  <Hero/>

      </div>
      <BenefitsSection />

       <ProvideMarketplace />

    <CareerOpenings />

       <Footer />
        </>
   
    )
}