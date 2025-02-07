import React from "react";

export default function Subscribe() {
  return (
    <div>
      <div className="py-9 bg-grey-vlight mt-20  ">
        <div className="w-11/12 mx-auto 2xl:max-w-[964px]">
          <div className="grid grid-cols-12 items-center gap-4 xl:gap-16">
            <div className="col-span-12 lg:col-span-4">
              <img src="/images/Rock.svg" className="w-[189px] h-[120px]" alt="" />
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="mt-3 sm:mt-0 w-full rounded-[50px] sm:rounded-none  sm:rounded-l-[50px] h-11 sm:h-[50px] py-4 border border-green-dark f-f-r text-base text-grey-dark pl-10 outline-none namein "
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <input
                    type="text"
                    className="mt-3 sm:mt-0 w-full rounded-[50px] sm:rounded-none  h-11 sm:h-[50px] py-4 border border-green-dark f-f-r text-base text-grey-dark pl-10 outline-none namein "
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <button className="mt-3 sm:mt-0 w-full h-11 sm:h-[50px] f-f-m text-xl md:text-5xl text-green bg-green-dark rounded-[50px] sm:rounded-none sm:rounded-r-[50px] ">
                    <ul className="inline-flex items-center space-x-3">
                      <li>SUBSCRIBE</li>
                      <li>
                        <img
                          src="/images/Grightarrows.svg"
                          className="w-[30px] h-[30px] "
                          alt=""
                        />
                      </li>
                    </ul>
                  </button>
                </div>
              </div>

              <div className="flex mt-[18px]">
                <div className="flex items-center h-5">
                  <input
                    id="helper-checkbox"
                    aria-describedby="helper-checkbox-text"
                    type="checkbox"
                    value=""
                    className="w-4 h-4  bg-white border border-green-dark rounded-[5px] subscribe-set"
                  />
                </div>

                <div className="ml-2 text-sm sm:text-base f-f-r text-red-vdark">
                  <label for="helper-checkbox">
                    {" "}
                    By checking this box, you confirm that you have read and are
                    agreeing to our terms of use regarding the storage of the
                    data submitted through this form.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-[rgba(26, 68, 2, 0.50)] mt-20 "></div>
    </div>
  );
}
