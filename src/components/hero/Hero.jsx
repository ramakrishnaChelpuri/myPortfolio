import React from "react";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-300 to-blue-300 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              <p>Hello, I'm</p>
              <p>Ramakrishna Chelpuri</p>
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Full-stack Developer",
                2000,
                "Freelancer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-teal-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Looking for someone who can build a robust website?
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-teal-700"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-teal-700"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-8 px-2">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-8"
            >
              <li>
                <a href="https://github.com/ramakrishnaChelpuri">
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rama-krishna-25977a155/">
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ch_v_r_k/">
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-150  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[65%] md:m-auto sm:m-0 transform: scale(0.5)"
              src='https://i.postimg.cc/63XYNY69/fotor-2023-8-26-13-5-29.png'
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-2 right-20 md:right-5">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
