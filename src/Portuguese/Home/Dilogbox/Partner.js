import React from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export default function DialogDefault({open,setOpen,handleOpen}) {

 
  return (
    <>
      
      <Dialog open={open} handler={()=>handleOpen() } className=" bg-green-light 2xl:min-w-[1200px] relative sm:p-5 md:p-9 " >
      
        <DialogBody className="  overflow-y-scroll  "  style={{ height: "80vh" }} >
    <div className="grid grid-cols-12  items-center">
      <div className="col-span-12 2xl:col-span-5">
        <img src="/images/Pindividual.svg" className="w-auto 2xl:-mr-20 2xl:w-[548px] h-auto 2xl:h-full mx-auto" alt="" />

      </div>
      <div className="col-span-12 2xl:col-span-7">
        <div className="bg-red-vlight rounded-[35px] p-[27px]">
          <h1 className="f-f-m text-2xl sm:text-6xl text-white text-center uppercase"> 
          Preencha suas credenciais e
clique no botão Enviar</h1>
          <div className="grid grid-cols-12 gap-2 sm:gap-3 xl:gap-[47px] items-center">
            <div className="col-span-12 xl:col-span-6">
              <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl">Primeiro nome</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[50px] w-full mt-2 outline-none " placeholder="eu primeiro nome" />
            </div>
            <div className="col-span-12 xl:col-span-6">
              <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl">Sobrenome</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[50px] w-full mt-2 outline-none " placeholder="Seu último Nome" />
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
          <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl ">Nome Profissional *</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[45px] sm:h-[50px] w-full mt-2 outline-none " placeholder="Digite o nome aqui" />
              </div>
              <div className="mt-2 sm:mt-3">
          <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl ">Nome da Loja Especializada ou Farmácia *</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[45px] sm:h-[50px] w-full mt-2 outline-none " placeholder="Digite o nome aqui" />
              </div>
              <div className="mt-2 sm:mt-3">
          <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl ">Qual é o seu papel na prática? *</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[45px] sm:h-[50px] w-full mt-2 outline-none " placeholder="CEO, ou..." />
              </div>
              <div className="mt-2 sm:mt-3">
          <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl ">Endereço de email</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[45px] sm:h-[50px] w-full mt-2 outline-none " placeholder="Insira o seu endereço de email" />
              </div>
              <div className="mt-2 sm:mt-3">
          <label htmlFor="" className="f-f-r text-green text-xl sm:text-2xl ">úmero de telefone</label>
              <input type="text" className="rounded-[14px] border-[1.5px] bg-white border-green-dark f-f-m text-lg text-red-vlight pl-5 h-[45px] sm:h-[50px] w-full mt-2 outline-none " placeholder="+91
0123456789" />
              </div>
              <div className="mt-5 ">
              <div className=" items-center " >
                  
  <input type="checkbox" className="green-box" id="vehicle2" name="vehicle2" value="Car"/>
  <label htmlFor="vehicle2" className=" f-f-m text-green-dark ml-[20px] text-2xl relative top-[-6px] " >Aceito todos os <span  className=" text-green " > termos e condições </span> </label>
</div>
  </div>
  <div className="text-center mt-4">
          <button className="w-full sm:w-[298px] h-[50px] sm:h-[63px] bg-green-dark rounded-[14px] border border-green f-f-m text-5xl sm:text-7xl text-white ">Enviar</button>
        </div>
      </div>
        </div>
       
     
    </div>


        </DialogBody>

        <button   onClick={()=>handleOpen()} className="  absolute top-[5px] right-[5px] " >
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