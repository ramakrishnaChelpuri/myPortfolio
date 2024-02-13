import React from "react";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt,FaUserGraduate } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";


const Resume = () => {
  return (
    <div id="experience" className=" container m-auto mt-16">
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
          Experience & Qualification
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      
      <div className="card-wrapper p-5 w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex-start items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="flex gap-2 w-auto ml-[50%] translate-x-[-50%] rounded-3xl py-1 px-8 font-semibold text-xl text-white bg-black">
            <HiBuildingOffice2 />Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-teal-200"></div>
                <div className="line w-[230px] bg-teal-200 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-teal-200"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-teal-300 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.2rem] font-semibold">
                  Full-Stack Developer
                </h1>
                <span className="text-[1.1rem] font-semibold  text-gray-500 sm:text-base">
                  Speridian Technologies
                </span>
                <span className="flex gap-2 text-align-center">
                  <MdLocationPin/>Albuquerque, NM
                </span>
                <span className=" flex gap-2 text-align-center text-[.9rem] font-semibold text-black sm:text-base">
                  <FaRegCalendarAlt />Aug 2022 - Present
                </span>
               
                <h1 className="text-[1.2rem] font-semibold pt-10">
                  Associate Software Developer
                </h1>
                <span className="text-[1.1rem] font-semibold  text-gray-500 sm:text-base">
                  Highradius
                </span>
                <span className="flex gap-2 text-align-center">
                  <MdLocationPin/>Hyderabad, IND
                </span>
                <span className=" flex gap-2 text-align-center text-[.9rem] font-semibold text-black sm:text-base">
                  <FaRegCalendarAlt />Aug 2018 - Dec 2020
                </span>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex-start items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className="flex gap-2 w-auto ml-[50%] translate-x-[-50%] rounded-3xl py-1 px-8 font-semibold text-xl text-white bg-black">
            <FaUserGraduate />Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-teal-200"></div>
                <div className="line w-[230px] bg-teal-200 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-teal-200"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-teal-300 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.2rem] font-semibold">
                  Master's Degree in Computer Science
                </h1>
                <span className="text-[1.1rem] font-semibold  text-gray-500 sm:text-base">
                  University of New Haven
                </span>
                <span className="flex gap-2 text-align-center">
                  <MdLocationPin/>New Haven, CT
                </span>
                <span className=" flex gap-2 text-align-center text-[.9rem] font-semibold text-black sm:text-base">
                  <FaRegCalendarAlt />Jan 2021 - Dec 2022
                </span>

                <h1 className="text-[1.2rem] font-semibold pt-10">
                Bachelor's Degree in Computer Science
                </h1>
                {/* <IoSchoolSharp/> */}
                <span className="text-[1.1rem] font-semibold  text-gray-500 sm:text-base">
                  SRM University
                </span>
                <span className="flex gap-2 text-align-center">
                  <MdLocationPin/>Chennai, India
                </span>
                <span className=" flex gap-2 text-align-center text-[.9rem] font-semibold text-black sm:text-base">
                  <FaRegCalendarAlt />Aug 2014 - May 2018
                </span>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
