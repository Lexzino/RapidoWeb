import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import flags from "../../assets/images/flags-pt-BR.svg";
import engFlag from "../../assets/images/eng-flag.png";
import Chatbot from "../Home/Dilogbox/Chatboot";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [drop, setdrop] = useState(false);
  const [navbar, setnavbar] = useState(false);
  const [open, setOpen] = React.useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("selectedLanguage") || "English"
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
  }, [selectedLanguage]);

  useEffect(() => {
    if (selectedLanguage === "Portuguese" && window.location.pathname === "/") {
      // navigate("/homeportuguese");
      navigate("/");
    } else if (
      selectedLanguage === "English" &&
      window.location.pathname === "/homeportuguese"
    ) {
      navigate("/");
    }
    if (
      selectedLanguage === "Portuguese" &&
      window.location.pathname === "/aboutus"
    ) {
      // navigate("/aboutusportuguese");
      navigate("/aboutus");

    } else if (
      selectedLanguage === "English" &&
      window.location.pathname === "/aboutusportuguese"
    ) {
      navigate("/aboutus");
    }
  }, [selectedLanguage, window.location.pathname, navigate]);

  const handleOpen = () => setOpen(!open);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selecting a language
  };
  return (
    <>
      <nav className=" border-gray-200 ">
        <div className="  w-11/12 xl:w-[1154px]   flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className=" w-[50px] h-[50px]  "
              alt="Flowbite Logo"
            />
          </Link>
          <button
            onClick={() => setnavbar(!navbar)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center lg:hidden "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="#B2FF87"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#B2FF87"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={` ${
              navbar ? "block" : "hidden"
            } w-full lg:block lg:w-auto`}
            id="navbar-dropdown"
          >
            <ul className=" text-left items-baseline flex flex-col p-4 lg:p-0 mt-4 border border-green-light rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0  ">
              
              <Link to='/aboutusportuguese'>
              <li className="text-left w-full lg:w-auto">
                  Conheça o Rapido Relief?
              </li>
              </Link>
              <li className="text-left w-full lg:w-auto">
                <a
                  href="#"
                  className="block py-2 px-3  text-green-light   f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  lg:p-0  "
                >
                  Blog
                </a>
              </li>
              {/* <li>
                {selectedLanguage === "English" ? (
                  <Link
                    to="/aboutus"
                    className="block py-2 px-3 text-green-light f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:p-0"
                  >
                    <li className="text-left w-full lg:w-auto">About us</li>
                  </Link>
                ) : (
                  <Link
                    to="/aboutusportuguese"
                    className="block py-2 px-3  text-green-light f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 lg:p-0"
                  >
                    <li className="text-left w-full lg:w-auto">About us</li>
                  </Link>
                )}
              </li> */}

              <li className="text-left w-full lg:w-auto">
                <button
                  onClick={handleOpen}
                  className="block py-2 px-3  text-green-light   f-f-r text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  lg:p-0  "
                >
                  RápidoChatbot
                </button>
              </li>
              <li className="text-left w-full lg:w-auto relative">
                <a
                  href="#"
                  onClick={() => setdrop(!drop)}
                  className="block py-2 px-3  text-green-light   f-f-b text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  lg:p-0 f-f-b "
                >
                  Para parceiros
                </a>
                {drop && (
                  <div
                    id="dropdownNavbar"
                    className="z-10 lg:absolute lg:right-0 lg:top-[35px] rounded-lg shadow w-full lg:w-[250px] bg-green-light py-[49px] px-[28px] "
                  >
                    <button className=" bg-green-dark w-full rounded-[25px] h-[40px] text-white-light f-f-b  text-sm ">
                      Entrar
                    </button>
                    <h2 className=" text-green-dark  f-f-b  text-sm text-center pt-[10px] ">
                      Criar uma conta
                    </h2>
                    {/* <button className=' mt-[28px] text-green-dark w-full rounded-[25px] h-[40px] bg-white border border-green-dark f-f-b  text-sm ' >
                Business sign in
                </button>
                <h2 className=' text-green-dark  f-f-b  text-sm text-center pt-[17px] ' >Create account</h2> */}
                  </div>
                )}
              </li>
              <li className=" hidden lg:block ">
                <a
                  href="#"
                  className="block py-2 px-3 border border-white h-[27px]   lg:p-0 f-f-b "
                ></a>
              </li>
              {/* <li className=" relative  text-left w-full lg:w-auto py-2">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3  lg:p-0 md:w-auto "
                >
                  <img src={flags} className=" w-[33px] h-[23px] " />
                  <svg
                    className=" ml-[9px] "
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                  >
                    <path
                      d="M0 1.11158L0.729927 0.325928L5 4.96131L9.27007 0.325928L10 1.11158L5 6.49333L0 1.11158Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </li> */}
              <li className="relative text-left w-full lg:w-auto py-2">
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  onClick={toggleDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 lg:p-0 md:w-auto"
                >
                  <img src={flags} className="w-[33px] h-[23px]" />
                  <svg
                    className="ml-[9px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="7"
                    viewBox="0 0 10 7"
                    fill="none"
                  >
                    <path
                      d="M0 1.11158L0.729927 0.325928L5 4.96131L9.27007 0.325928L10 1.11158L5 6.49333L0 1.11158Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 bg-white shadow-md">
                    <li>
                      <button
                        className="w-full py-2 px-3 text-left"
                        onClick={() => handleLanguageChange("English")}
                      >
                        <img
                          src={engFlag}
                          className="w-[33px] h-[23px]"
                          alt="English"
                        />
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full py-2 px-3 text-left"
                        onClick={() => handleLanguageChange("Portuguese")}
                      >
                        <img
                          src={flags}
                          className="w-[33px] h-[23px]"
                          alt="Portuguese"
                        />
                      </button>
                    </li>
                  </ul>
                )}
              </li>

              <li className="text-left w-full lg:w-auto py-2">
                <button
                  href="#"
                  className="block py-2 px-3  f-f-b text-base rounded-[50px]    lg:p-0 f-f-r text-white-light w-full lg:w-[165px] h-[35px] border border-green   "
                >
                  TRABALHE CONOSCO
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Chatbot open={open} setOpen={setOpen} handleOpen={handleOpen} /> */}
    </>
  );
}
