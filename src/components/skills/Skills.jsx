import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";


import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPython,
  SiSelenium,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaReact,FaJava } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";



const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className="container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[85%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p data-aos="fade-up" className=" text-gray-400 font-medium w-[100%]" >
              Here are my skills.
            </p>
            
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col hover:scale-95 gap-6  w-3/4  my-5 md:w-[90%]">
                <ProgressBar logo={<FaReact />} name={"React"} value={70} />
                <ProgressBar logo={<SiJavascript />} name={"JavaScript"} value={80} />
                <ProgressBar logo={<GrMysql />} name={"My SQL"} value={98} />
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML 5"} value={100} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS 3"} value={80} />
                <ProgressBar logo={<SiTailwindcss />} name={"CSS Tailwind"} value={70} />
              </div>
            </div>
          </div>
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 hover:scale-105 items-center justify-center sm:w-full">
            <div className="first2 hover:scale-110 flex flex-col gap-10">
              <SkillBox
                logo={<FaJava />}
                black={"white"}
                white={"black"}
                skill={"Java"}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={"black"}
                white={"white"}
                skill={"MongoDB"}
              />
            </div>
            <div className="last2 flex hover:scale-110 flex-col gap-10">
              <SkillBox
                logo={<SiPython />}
                black={"black"}
                white={"white"}
                skill={"Python"}
              />
              <SkillBox
                className=""
                logo={<SiSelenium/>}
                black={"white"}
                white={"black"}
                skill={"Selenium"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
