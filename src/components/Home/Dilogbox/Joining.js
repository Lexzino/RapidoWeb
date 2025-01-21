import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function DialogDefault({
  joiningbox,
  setjoiningbox,
  handleOpenjoin,
}) {
  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <div
        className={`absolute top-40 w-full left-0 z-[99999999] transition-all duration-300 ease-in-out transform ${
          joiningbox
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}>
        <div className=" flex justify-center items-center w-full px-10 lg:px-0">
          <div className=" bg-green-light lg:w-[900px] relative p-5 md:p-11 rounded-[25px] ">
            <div className=" overflow-y-scroll  " style={{ height: "80vh" }}>
              <h1 className="f-f-b text-3xl lg:text-6xl text-black mt-7 sm:mt-0">
                Thank You for Joining the Waiting List! 🌟
              </h1>

              <p className="f-f-r text-lg sm:text-lg md:text-3xl text-black mt-7">
                Congratulations! 🎉 You've successfully submitted your
                information to join the waiting list on Rapido Relief. Thank you
                for taking this important step towards accessing our healthcare
                services. <br />
                <br />
                We'll keep you updated every step of the way as we work to
                connect you with the healthcare resources you need. <br />
                <br />
                In the meantime, did you know we have a Chatbot available to
                assist you with any related issues or concerns? Before heading
                to the hospital or seeking consultation, feel free to chat with
                our Chatbot for quick answers, helpful tips, or guidance on
                managing your health and well-being.
                <br />
                <br />
                If you have any questions or need assistance, our Chatbot is
                here to help 24/7. Simply click on the{" "}
                <span className="f-f-b  text-black">
                  {" "}
                  Need Help on the menu
                </span>{" "}
                to start a conversation. We're committed to providing you with
                the support you need on your healthcare journey.
                <br />
                <br />
                Thank you again for choosing Rapido Relief. We're excited to
                embark on this journey with you!
                <br />
                <br />
                Warm regards,
                <br />
                The Rapido Relief Team
              </p>
            </div>

            <button
              onClick={() => handleOpenjoin()}
              className="  absolute top-[26px] right-[30px] 2xl:right-[50px] ">
              <svg
                className=" w-[25px] md:w-[30px] h-[25px] md:h-[30px] "
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
                  fill="#1A4402"
                />
              </svg>
            </button>
            {/* <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button  onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter> */}
          </div>
        </div>
      </div>
    </>
  );
}
