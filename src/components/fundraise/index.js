import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Subscribe from "../Home/Subscribe";
import Esg from "../Home/Esg";
import Travaltime from "../Home/Travaltime";
import ProviderMarketplace from "../Home/provider-arketplace";
import HeroSection from "./hero-section";
import HelpSection from "./help-section";
import ProductSection from "./product-section";
import ProductAds from "./product-ads";
import TrendingProduct from "./trending-product";
import TrendingProductBlog from "./trending-product-blog";

const Fundraise = () => {
  return (
    <>
      <div className={` bg-cover bg-no-repeat bg-center w-full herobg`}>
        {/* <Header/> */}
        <Navbar />
        <HeroSection />
      </div>
      <HelpSection />
      <ProductSection />

      <Travaltime />
      <ProductAds />
      <ProviderMarketplace />
      <TrendingProduct />
      <TrendingProductBlog />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Fundraise;
