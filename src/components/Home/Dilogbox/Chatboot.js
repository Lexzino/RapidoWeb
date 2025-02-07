import React from "react";
import {
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

export default function DialogDefault({ open, setOpen, handleOpen }) {

  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={() => handleOpen()}

        className=" bg-green-light 2xl:min-w-[1200px] relative p-5 md:p-9 " >

        <DialogBody className="  overflow-y-scroll  " style={{ height: "80vh" }} >
          <div className="grid grid-cols-12 gap-5 items-center">
            <div className="col-span-12 2xl:col-span-5">
              <img src="/images/Chatmobile.svg" className="w-[75%]  2xl:w-full h-[50%] 2xl:h-full mx-auto" alt="" />

            </div>
            <div className="col-span-12 2xl:col-span-7">
              <h1 className="f-f-m text-5xl sm:text-6xl lg:text-8xl text-black">Welcome to Rapido Chatbot! 🌟</h1>

              <h2 className="f-f-r text-black  sm:text-3xl lg:text-5xl mt-5">Hey there! 👋 I'm your friendly neighborhood Chatbot
                here to assist you with anything you need today.
                Whether you're looking for health tips, mental wellness
                resources, or just need someone to chat with,
                I'm here for you!</h2>
              <h3 className="f-f-m text-black text-xl sm:text-3xl lg:text-5xl mt-7">
                First things first, how are you feeling today? 💬
              </h3>
              <h2 className="f-f-r text-black text-xl sm:text-3xl lg:text-5xl mt-6">Are you experiencing any health concerns or mental health
                issues you'd like to talk about? Let's start by addressing your
                needs and see how I can help make your day a little brighter.
                Remember, you're not alone – we're in this together! 🌈</h2>
              <h2 className="f-f-r text-black text-xl sm:text-3xl lg:text-5xl mt-10">Feel free to type your thoughts or questions below,
                and let's kickstart this conversation! 💬✨</h2>
              <div className="relative mt-3">

                <textarea name="" id="" rows="6" className=" rounded-[20px] border border-green-dark bg-white pl-5 pt-2 outline-none w-full"></textarea>
                <img src="/images/Textareaimg.svg" className="h-[70px] w-[70px] absolute bottom-3 right-2" alt="" />

              </div>
            </div>
          </div>


        </DialogBody>

        <button onClick={handleOpen} className="  absolute top-[5px] right-[5px] " >
          <svg className=" w-[25px] md:w-[30px] h-[25px] md:h-[30px] " viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z" fill="#1A4402" />
          </svg>

        </button>

      </Dialog>
    </>
  );
}