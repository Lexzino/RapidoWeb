import React, { useState, useEffect } from "react"
import { useLanguage } from "../../LanguageContext" // Import the context
import { translations } from "../../translations" // Import translations


export default function Esg() {
  const { selectedLanguage, changeLanguage } = useLanguage() // Use context for language
  const [open, setOpen] = React.useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [langUpdated, setLangUpdated] = useState(false) // State to trigger re-render on language change

  const t = translations[selectedLanguage] // Get the translation for the selected language

  // Use effect to force re-render when language changes
  useEffect(() => {
    setLangUpdated(false) // Reset state before language change
    const timeout = setTimeout(() => {
      setLangUpdated(true) // Update state after a brief delay
    }, 100) // Delay to allow the context to update
    return () => clearTimeout(timeout) // Cleanup timeout
  }, [selectedLanguage]) // Dependency on language change

  return (
    <div className="py-20 pt-0">
      <div className=" max-w-[1440px] mx-auto">
        <div className="w-full h-28 flex flex-col justify-end items-end gap-2 mb-3 group">
          <div className="hidden group-hover:block text-[20px] font-semibold leading-normal text-[#1A4402] rounded-[25px_1px_25px_25px] bg-[#58FD0A] py-2 px-4">
            {t.needSupport}
          </div>
          <div className="text-[20px] h-11 cursor-pointer group font-semibold leading-normal text-[#1A4402] rounded-[25px_1px_25px_25px] bg-[#58FD0A] py-2 px-4 flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
            >
              <path
                d="M0 25.1193L1.76568 18.6689C0.676128 16.7807 0.103617 14.6404 0.104664 12.4456C0.107804 5.58381 5.69162 0 12.5523 0C15.8817 0.00104664 19.0069 1.29783 21.3577 3.65067C23.7074 6.00352 25.001 9.13087 25 12.4571C24.9969 19.3199 19.413 24.9037 12.5523 24.9037C10.4695 24.9027 8.41706 24.3804 6.59905 23.3882L0 25.1193ZM6.90467 21.1348C8.65884 22.1762 10.3335 22.8 12.5481 22.801C18.2502 22.801 22.8952 18.1602 22.8983 12.455C22.9004 6.73826 18.2774 2.10374 12.5565 2.10165C6.85025 2.10165 2.20841 6.74244 2.20631 12.4466C2.20527 14.7754 2.88767 16.5191 4.03374 18.3434L2.98815 22.1615L6.90467 21.1348ZM18.8227 15.4159C18.7453 15.2861 18.5381 15.2087 18.2262 15.0527C17.9153 14.8968 16.3862 14.1443 16.1004 14.0407C15.8157 13.937 15.6085 13.8847 15.4002 14.1966C15.193 14.5075 14.5964 15.2087 14.4153 15.4159C14.2343 15.6232 14.0522 15.6493 13.7413 15.4934C13.4305 15.3374 12.4278 15.0098 11.2398 13.9496C10.3157 13.1248 9.69082 12.1065 9.50975 11.7946C9.32868 11.4837 9.49091 11.3152 9.64582 11.1603C9.78607 11.0211 9.95667 10.7971 10.1126 10.615C10.2707 10.435 10.3219 10.3052 10.4266 10.0969C10.5302 9.88968 10.4789 9.70757 10.4004 9.55162C10.3219 9.39672 9.70024 7.86549 9.44172 7.24274C9.18844 6.63673 8.93201 6.71837 8.74152 6.70895L8.14494 6.69848C7.9377 6.69848 7.60069 6.77594 7.316 7.08783C7.03131 7.39973 6.2275 8.15122 6.2275 9.68245C6.2275 11.2137 7.34217 12.6926 7.49707 12.8998C7.65302 13.107 9.68978 16.2491 12.8098 17.5961C13.5519 17.9164 14.1317 18.1079 14.5828 18.2513C15.328 18.4878 16.0062 18.4543 16.5421 18.3748C17.1397 18.2858 18.3821 17.6222 18.6417 16.8959C18.9012 16.1685 18.9012 15.5457 18.8227 15.4159Z"
                fill="#1A4402"
              />
            </svg>
            <span className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
              {t.talkWhatsapp}
            </span>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto 2xl:max-w-[1161px]">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-12 sm:col-span-7">
            <h1 className="text-[#1A4402]  f-f-b text-[45px] font-bold leading-[56px] tracking[-1.35px]">
              <span className="">{t.esgTrends}</span>
              <span className="text-[32px]"> & </span>
              <span
                style={{ fontFamily: "Rock Salt" }}
                className="text-[32px]  text-[#58FD0A] tracking[-0.96px]"
              >
                {t.esgInsights}
              </span>
            </h1>
          </div>
          <div className="col-span-12 sm:col-span-5">
            <div className="text-end mt-4 sm:mt-0">
              <button className="w-full sm:w-[215px] h-[50px] lg:h-[64px] bg-green-dark rounded-3xl  ">
                <ul className="inline-flex items-center space-x-4">
                  <li className="f-f-b font-extrabold text-xl text-white">
                    {t.seeAllNews}
                  </li>
                  <li>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 2.00134C12.8322 1.99991 12.6541 1.99997 12.463 2.00002L11.3572 2.00004C10.2734 2.00003 9.39926 2.00002 8.69138 2.05786C7.96253 2.11741 7.32234 2.24322 6.73005 2.54501C5.78924 3.02438 5.02434 3.78928 4.54497 4.73009C4.24318 5.32238 4.11737 5.96257 4.05782 6.69142C3.99998 7.3993 3.99999 8.27345 4 9.35723V14.6428C3.99999 15.7266 3.99998 16.6008 4.05782 17.3087C4.11737 18.0375 4.24318 18.6777 4.54497 19.27C5.02434 20.2108 5.78924 20.9757 6.73005 21.4551C7.32234 21.7569 7.96253 21.8827 8.69138 21.9422C9.39923 22.0001 10.2733 22.0001 11.3571 22H12.6428C13.7266 22.0001 14.6008 22.0001 15.3086 21.9422C16.0375 21.8827 16.6777 21.7569 17.27 21.4551C18.2108 20.9757 18.9757 20.2108 19.455 19.27C19.7568 18.6777 19.8826 18.0375 19.9422 17.3087C20 16.6008 20 15.7266 20 14.6428L20 9.53706C20.0001 9.34596 20.0001 9.16781 19.9987 9L17.1615 9C16.6343 9.00002 16.1795 9.00003 15.805 8.96943C15.4096 8.93713 15.0164 8.86581 14.638 8.67302C14.0735 8.3854 13.6146 7.92646 13.327 7.36197C13.1342 6.98359 13.0629 6.59037 13.0306 6.19503C13 5.82046 13 5.36569 13 4.83854L13 2.00134ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13L15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11L9 11ZM8 16C8 15.4477 8.44772 15 9 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H9C8.44772 17 8 16.5523 8 16Z"
                        fill="white"
                      />
                      <path
                        d="M19.7175 7C19.6004 6.66675 19.4483 6.34638 19.2632 6.0444C18.953 5.53819 18.5277 5.11309 17.9132 4.49897L17.5011 4.08685C16.8869 3.47238 16.4619 3.04705 15.9556 2.73684C15.6536 2.55178 15.3333 2.39959 15 2.28254V4.8C15 5.37655 15.0008 5.74883 15.0239 6.03216C15.0461 6.30383 15.0838 6.40455 15.109 6.45399C15.2049 6.64215 15.3578 6.79513 15.546 6.89101C15.5955 6.9162 15.6962 6.95388 15.9678 6.97607C16.2512 6.99922 16.6234 7 17.2 7H19.7175Z"
                        fill="white"
                      />
                    </svg>
                  </li>
                </ul>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-[18px] mt-[41px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img
                  src="/images/News.svg"
                  className="w-[72px] h-[72px] mx-auto"
                  alt=""
                />{" "}
              </div>
              <div className="text-center mt-[15px] h-auto">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.esgDate}
                  </li>
                  <li>
                    <img
                      src="/images/OslerPillow.svg"
                      className="w-1 h-1"
                      alt=""
                    />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.authorName}
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-18px mt-3 leading-normal">
                  {t.breakingBarriers}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telehealth}
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telemedicine}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img
                  src="/images/News.svg"
                  className="w-[72px] h-[72px] mx-auto"
                  alt=""
                />{" "}
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.esgDate}
                  </li>
                  <li>
                    <img
                      src="/images/OslerPillow.svg"
                      className="w-1 h-1"
                      alt=""
                    />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.authorName}
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-18px mt-3 leading-normal">
                  {t.empoweringPatients}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telehealth}
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telemedicine}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px]  ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img
                  src="/images/OslerPillow.svg"
                  className="w-[72px] h-[72px] mx-auto"
                  alt=""
                />{" "}
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.esgDate}
                  </li>
                  <li>
                    <img
                      src="/images/OslerPillow.svg"
                      className="w-1 h-1"
                      alt=""
                    />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.authorname}
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-18px mt-3 leading-normal">
                  {t.rapidoAIDriven}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[114px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telehealth}
                    </button>
                  </li>
                  <li>
                    <button className="w-[131px] h-[34px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.telemedicine}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <div className="bg-grey-light p-[9px] rounded-b-[24px] h-auto md:h-[440px] xl:h-[430px] ">
              <div className="w-full h-[256px] bg-white rounded-b-[25px] py-[91px]">
                <img
                  src="/images/News.svg"
                  className="w-[72px] h-[72px] mx-auto"
                  alt=""
                />
              </div>
              <div className="text-center mt-[15px]">
                <ul className="inline-flex items-center space-x-3">
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.esgDate}
                  </li>
                  <li>
                    <img
                      src="/images/OslerPillow.svg"
                      className="w-1 h-1"
                      alt=""
                    />
                  </li>
                  <li className="f-f-b font-extrabold text-sm text-grey-dark uppercase">
                    {t.authorname}
                  </li>
                </ul>
                <h1 className="f-f-m font-bold text-green-dark text-18px mt-3 leading-normal">
                  {t.futureOfTelemedicine}
                </h1>
              </div>
              <div className="text-center xl:text-start">
                <ul className="inline-flex items-center space-x-3 mt-[14px] mb-3">
                  <li>
                    <button className="w-[59px] h-[35px] border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.AI}
                    </button>
                  </li>
                  <li>
                    <button className="w-[178px] py-1 h-35px border rounded-[24px] border-green-dark f-f-b font-extrabold text-18px text-green-dark">
                      {t.machineLearning}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
