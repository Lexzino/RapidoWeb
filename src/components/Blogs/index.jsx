import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import RightArrow from "../../assets/icons/right-arrow.svg";
import DownArrow from "../../assets/icons/down-arrow.svg";
import { Avatar, Card, Spin } from "antd";
import Subscribe from "../../components/Home/Subscribe";
import "./style.css";
import Footer from "../Home/Footer";
import sanityClient from "../../client.js";
import { Link } from "react-router-dom";
import CustomLoader from "../Loader/index.jsx";
import CardComponent from "../Reuseable/Cards/index.jsx";

const { Meta } = Card;

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] {
                        _id,
                        _type,
                        _createdAt,
                        _updatedAt,
                        title,
                        slug,
                        author->,
                        mainImage {
                            ...,
                            asset->
                        },
                        categories[]->,
                        publishedAt,
                        body
                        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  console.log(blogs, "blogsdata");

  // Function to filter blogs by category
  const filterBlogsByCategory = (category) => {
    return blogs.filter((blog) =>
      blog.categories.some((cat) => cat.title === category)
    );
  };

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <>
          <div className="main-wrapper">
            <Navbar />
            <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
              <div className="grid grid-cols-12 gap-5 2xl:gap-20 mt-24">
                <div className="col-span-12 xl:col-span-6">
                  <ul className="inline-flex items-center space-x-1">
                    <li>
                      <div className="w-[100px] sm:w-[100px] h-[2px] bg-parrot dash-line "></div>
                    </li>
                    <li>
                      <h4 className="small-screen-heading pl-10 f-f-m text-xl sm:text-2xl text-white">
                        RAPIDO RELIEF
                      </h4>
                    </li>
                    <li>
                      <img
                        className="pl-4 small-screen-arrow"
                        src={RightArrow}
                        alt="right-arrow"
                      />
                    </li>
                    <li>
                      <h4 className="pl-4 f-f-m text-xl sm:text-2xl text-white small-screen-text">
                        Blog
                      </h4>
                    </li>
                  </ul>

                  <h1 className="f-f-m text-[55px] sm:text-12xl text-green mt-2">
                    Welcome
                  </h1>
                  <div className="w-full sm:w-[435px] ">
                    <h5 className="mt-2 f-f-r text-xl sm:text-4xl text-white">
                      Check out the resources below for more proof on how Our
                      App leading and making lasting impart in the general
                      healthcare sector
                    </h5>
                  </div>

                  <h3 className=" mt-12 pb-5 sm:mt-[76px] f-f-m text-2xl text-white flex ">
                    <img className="" src={DownArrow} alt="right-arrow" />
                    <h3 className="pl-3 dicoverHeading">Discover</h3>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-11/12 2xl:max-w-[1154px] mx-auto mt-10">
            <ul
              style={{ listStyleType: "disc" }}
              className="flex flex-wrap justify-between w-12/12 mx-4">
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Healthcare Trends
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Telemedicine
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Mental Health
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Medical Tourism
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Patient Stories
              </li>
              <li className="w-full sm:w-1/2 md:w-auto lg:w-auto">
                Diversity & Inclusion
              </li>
            </ul>
            <div className="mt-10 w-full h-[2px] primary-color-bg"></div>
          </div>

          {/* Cards */}
          <div className="mt-10 w-11/12 mx-auto 2xl:max-w-[1154px]">
            {/* Blogs category */}
            <div className="flex gap-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filterBlogsByCategory("Blogs").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 w-full h-[2px] primary-color-bg"></div>
            {/* Healthcare category */}
            <div className="mt-10">
              <div className="flex justify-center w-full pb-10 heading-css primary-color">
                <h2>Top Healthcare Trends</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filterBlogsByCategory("Healthcare").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 w-full h-[2px] primary-color-bg"></div>
            {/* Mental Heal Tips */}
            <div className="mt-10">
              <div className="flex justify-center w-full pb-10 heading-css primary-color">
                <h2>Mental Heal Tips</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filterBlogsByCategory("Mental Heal Tips").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 w-full h-[2px] primary-color-bg"></div>
            {/* Patient Stories */}
            <div className="flex justify-center w-full  mt-10 heading-css primary-color">
              <h2>Patient Stories</h2>
            </div>
            <div className="flex gap-10 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filterBlogsByCategory("Patient Stories").map((blog) => (
                  <div key={blog._id}>
                    <CardComponent blog={blog} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Subscribe />
          <Footer />
        </>
      )}
    </>
  );
};

export default Blogs;
