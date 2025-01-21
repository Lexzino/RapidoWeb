import React from "react";

const products = [
  {
    img: "./image/product/product (1).jpeg",
    title: "In this section, we delve into various aspects of health",
    time: "01 Nov, 2024",
    document:
      "Explore the world of medical specialties through our blog's spotlight feature. From cardiology to pediatrics, we share in-depth articles written by our expert physicians.",
  },
  {
    img: "./image/product/product (2).jpeg",
    title: "Discover a treasure trove of practical tips for enhancing",
    time: "01 Nov, 2024",
    document:
      "From nutrition advice to exercise routines, we're here to support your journey toward a healthier",
  },
  {
    img: "./image/product/product (3).jpeg",
    title:
      "Our patients' journeys are filled with courage, resilience, and triumph.",
    time: "01 Nov, 2024",
    document:
      "In this section, we share inspiring narratives of individuals who have overcome health challenges.",
  },
  {
    img: "./image/product/product (4).jpeg",
    title:
      "From organizing health fairs to partnering with local organizations",
    time: "01 Nov, 2024",
    document:
      "Find out how you can participate in community events and contribute to the health.",
  },
];

const TrendingProduct = () => {
  return (
    <>
  <div className="w-11/12 mx-auto 2xl:max-w-[1325px] py-[0px] ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-4 xl:col-span-2 xl:row-span-3 ">
            <div className="h-full border border-[#EDF5FD] rounded-[14px] overflow-hidden">
              <img
                src={products[0].img}
                alt="Pills in blister packs"
                width={600}
                height={400}
                className="rounded-lg object-cover h-[200px] md:h-[360px] w-full"
              />
              <div className=" bg-white bg-opacity-80 p-[14px] rounded-b-lg">
                <p className="text-sm text-gray-600 flex justify-start items-center gap-4">
                  <span className="text-[#28A745] bg-[#f1f8ff] px-2 py-1">
                    Reviews
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none">
                    <path
                      d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z"
                      fill="#373D45"
                    />
                    <path
                      d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z"
                      fill="#373D45"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10Z"
                      fill="#373D45"
                    />
                  </svg>
                  {products[0].time}
                </p>
                <h2 className=" text-[20px] md:text-[36px] font-medium leading-normal text-[#020A13] font-[Nunito]">
                  {products[0].title}{" "}
                </h2>
                <p
                  className="text-[16px] font-[General] font-normal leading-normal text-[#373D45]
">
                  {products[0].document}
                </p>
                <button
                  className="mt-[12px] bg-[#28A745] rounded-[8px] px-[24px] py-[8px]  md:py-[14px] text-[14px] font-normal leading-normal text-white font-[Poppins-Light]
">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {products.slice(1, 4).map((item, index) => (
            <div
              key={index}
              className="col-span-4 xl:col-span-2 bg-white border border-[#EDF5FD] rounded-[14px]  overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    width={150}
                    height={100}
                    className="h-[200px] w-full md:w-[280px] lg:w-[440px] xl:w-[240px] object-cover"
                  />
                </div>
                <div className="ml-[20px] py-3 flex flex-col justify-between">
                  <div>
                    <p className="text-[13px] text-gray-600 flex justify-start items-center gap-4">
                      <span className="text-[#28A745] text=[14px] bg-[#f1f8ff] px-[12px] ">
                        Reviews
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none">
                        <path
                          d="M5.33464 8C4.96645 8 4.66797 8.29847 4.66797 8.66667C4.66797 9.03487 4.96645 9.33333 5.33464 9.33333H10.668C11.0362 9.33333 11.3346 9.03487 11.3346 8.66667C11.3346 8.29847 11.0362 8 10.668 8H5.33464Z"
                          fill="#373D45"
                        />
                        <path
                          d="M4.66797 11.3332C4.66797 10.965 4.96645 10.6665 5.33464 10.6665H8.0013C8.3695 10.6665 8.66797 10.965 8.66797 11.3332C8.66797 11.7014 8.3695 11.9998 8.0013 11.9998H5.33464C4.96645 11.9998 4.66797 11.7014 4.66797 11.3332Z"
                          fill="#373D45"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.66536 1.3335C5.03355 1.3335 5.33203 1.63198 5.33203 2.00016V2.66683H10.6654V2.00016C10.6654 1.63198 10.9638 1.3335 11.332 1.3335C11.7002 1.3335 11.9987 1.63198 11.9987 2.00016V2.73351C13.5202 3.04236 14.6654 4.38752 14.6654 6.00016V11.3335C14.6654 13.1744 13.173 14.6668 11.332 14.6668H4.66536C2.82442 14.6668 1.33203 13.1744 1.33203 11.3335V6.00016C1.33203 4.38752 2.4772 3.04236 3.9987 2.73351V2.00016C3.9987 1.63198 4.29718 1.3335 4.66536 1.3335ZM13.332 6.66683H2.66536V11.3335C2.66536 12.4381 3.5608 13.3335 4.66536 13.3335H11.332C12.4366 13.3335 13.332 12.4381 13.332 11.3335V6.66683Z"
                          fill="#373D45"
                        />
                      </svg>
                      {item.time}
                    </p>
                    <h3 className="text-[20px] font-medium leading-normal text-[#020A13] font-[Nunito]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-normal text-[#373D45] font-[General ]">
                      {item.document}
                    </p>
                  </div>
                  <button
                    className="mt-[12px] bg-[#28A745] w-fit rounded-[8px] px-[24px] py-[8px] text-[14px] font-normal leading-normal text-white font-[Poppins-Light]
">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingProduct;
