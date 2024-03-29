import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const date=new Date();
let year=date.getFullYear();

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-gradient-to-r from-blue-300 to-green-300 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
          data-aos="zoom-in"
          className=" font-bold text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-10 sm:gap-5">
          <a 
            data-aos="fade-up" data-aos-duration="1000"
            href=""
            className="box font-medium text-black gap-2 flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-150 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
            data-aos="fade-up" data-aos-duration="1200"
            href=""
            className="box font-medium text-black gap-2 flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-150 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
            data-aos="fade-up" data-aos-duration="1400"
            href=""
            className="box font-medium text-black  gap-2 flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-150 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="text-[12px]">
          | Copyright&copy; <span>{`${year} Ramakrishna Chelpuri`} </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
