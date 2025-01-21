import React from "react";
import Pharmaciest from "../../assets/images/pharmacist.svg";
import Professional from "../../assets/images/professional 01.svg";
import Button1 from "../../assets/images/Button1.svg";
import Partnerdlg from "./Dilogbox/Partner";

export default function Relief() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="bg-white-light py-10">
        <div className="w-11/12 mx-auto 2xl:max-w-[1154px] py-10 xl:py-[75px]">
          <h1 className="f-f-m text-3xl sm:text-5xl text-center text-grey-dark">
            rapido relief marketplace for healthcare professional
          </h1>
          <h2 className="f-f-m text-3xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-10xl text-center text-black-dark mt-3 ">
            Are you a provider & interested in reaching new patients?
          </h2>
          <h3 className="f-f-r text-3xl sm:text-5xl text-center text-parrot-light mt-5 ">
            List your practice on Rapido Relief Marketplace & be discovered by
            more new patients.
          </h3>

          <div className="grid grid-cols-12 gap-6 mt-[37px]">
            <div className="col-span-12 xl:col-span-6  ">
              <div className="bg-grey-light h-auto xl:h-[390px] relative">
                {/* inner grid start */}
                <div className="grid grid-cols-12 gap-4 xl:gap-9">
                  <div className="col-span-12 xl:col-span-5">
                    <img
                      src={Pharmaciest}
                      className="w-full h-[170px] -ml-[6px]"
                      alt=""
                    />
                  </div>
                  <div className="col-span-12 xl:col-span-7">
                    <div className="px-10 xl:px-0">
                      <h1 className="f-f-m text-lg sm:text-2xl text-grey-dark mt-5 xl:mt-[62px]">
                        For PHARMACIES
                      </h1>
                      <p className="f-f-r text-lg sm:text-2xl text-grey-dark mt-5 leading-normal sm:leading-7 ">
                        Step into the spotlight and let your pharmacy shine! Be
                        discovered by countless patients in your
                      </p>
                    </div>
                  </div>
                </div>
                {/* inner grid end */}

                <h4 className="f-f-r text-lg sm:text-2xl text-grey-dark px-10 pb-[61px] ">
                  neighborhood seeking nearby drugstores. Experience the joy of
                  delivering medications right to their doorstep, making their
                  lives easier even amid busy schedules and festive gatherings.
                </h4>

                <div className=" w-full text-center absolute -bottom-5 ">
                  <button
                    onClick={handleOpen}
                    className="w-full sm:w-[356px] h-[50px] sm:h-[64px] bg-green-dark rounded-2xl  ">
                    <ul className="inline-flex items-center space-x-4">
                      <li className="f-f-m text-xl text-white">
                        Enlist your Store on RapidoRelief
                      </li>
                      <li>
                        <img src={Button1} className="h-6 w-6" alt="" />
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6 ">
              <div className="bg-grey-light h-auto xl:h-[390px] mt-10 xl:mt-0 relative">
                {/* inner grid start */}
                <div className="grid grid-cols-12 gap-4 xl:gap-9">
                  <div className="col-span-12 xl:col-span-5">
                    <img
                      src={Professional}
                      className="w-full h-[189px] -ml-[6px]"
                      alt=""
                    />
                  </div>
                  <div className="col-span-12 xl:col-span-7">
                    <div className="px-10 xl:px-0">
                      <h1 className="f-f-m text-lg sm:text-2xl text-grey-dark mt-5 xl:mt-[62px]">
                        For Doctor
                      </h1>
                      <p className="f-f-r text-lg sm:text-2xl text-grey-dark mt-5 leading-normal xl:leading-[25px] ">
                        Unlock a world of opportunities to connect with patients
                        globally. Whether they're seeking professional
                        healthcare solutions
                      </p>
                    </div>
                  </div>
                </div>
                <h4 className="f-f-r text-lg sm:text-2xl text-grey-dark px-10 pb-[61px] xl:leading-[25px]   ">
                  nor embracing medical tourism, your expertise is in demand.
                  Ensuring no time goes to waste, and enhance your online
                  presence with authentic, verified reviews, solidifying your
                  reputation as a trusted healthcare provider."
                </h4>

                <div className=" w-full text-center absolute -bottom-5 ">
                  <button
                    onClick={handleOpen}
                    className="w-full sm:w-[356px] h-[50px] sm:h-[64px] bg-green-dark rounded-2xl  ">
                    <ul className="inline-flex items-center space-x-4">
                      <li className="f-f-m text-xl text-white">
                        Enlist your Practice on RapidoRelief
                      </li>
                      <li>
                        <img src={Button1} className="h-6 w-6" alt="" />
                      </li>
                    </ul>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Partnerdlg open={open} setOpen={setOpen} handleOpen={handleOpen} /> */}
    </>
  );
}
