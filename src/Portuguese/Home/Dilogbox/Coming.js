import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DialogDefault() {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={open} handler={handleOpen} className=" bg-green-light 2xl:min-w-[900px] relative p-5 md:p-9 " >
      
        <DialogBody className="  overflow-y-scroll  "  style={{ height: "80vh" }} >
     <h1 className="f-f-b text-3xl lg:text-6xl text-black mt-7 sm:mt-0">EM BREVE!</h1>

     <p className="f-f-r text-lg sm:text-lg md:text-3xl text-black mt-7">
     Atualmente estamos trabalhando em algo incrível nos bastidores.
Fique ligado enquanto nos preparamos para revelar atualizações 
interessantes e novos recursos. Sua paciência é muito apreciada!
 <br /><br />

 Enquanto isso, fique à vontade para explorar outras áreas da nossa 
plataforma ou entre em contato conosco para obter assistência. 
Nós estamos aqui para ajudar!
<br /><br />

Obrigado pela sua compreensão,
<br /><br />


A equipe de socorro do Rapido

     </p>


        </DialogBody>

        <button   onClick={handleOpen} className="  absolute top-[26px] right-[30px] 2xl:right-[50px] " >
        <svg  className=" w-[25px] md:w-[30px] h-[25px] md:h-[30px] "  viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z" fill="#1A4402"/>
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
      </Dialog>
    </>
  );
}