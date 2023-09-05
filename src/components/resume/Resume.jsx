import React from "react";
// import {IoSchoolSharp} from 'react-icons/io';

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto mt-16">
      {/* Full-stack Java Developer */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex-start items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] rounded-3xl py-1 px-8 font-semibold text-xl text-white bg-black">
              Experience
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
                <h1 className="text-[1.4rem] font-semibold">
                  Associate Software Developer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Highradius
                </span>
                <span className=" text-[.9rem] font-semibold text-black sm:text-base">
                  Aug 2018 - Dec 2020
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-400">
                  I have demonstrated expertise in Java J2EE and Front-end technologies like React and Angular for almost 3 years. 
                  Skilled in building RESTful Webservices & APIs, Java Spring Boot, and Microservice architecture with hands-on 
                  experience in DevOps tools.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex-start items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] rounded-3xl py-1 px-8 font-semibold text-xl text-white bg-black">
              Education
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
                <h1 className="text-[1.4rem] font-semibold">
                  Master of Science, Computer Science
                </h1>
                {/* <IoSchoolSharp/> */}
                 <span>
                  <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                    University of New Haven
                  </span>
                  <span className=" italic right-5 absolute text-[.8rem] text-gray-500 sm:text-base">
                    Connecticut, USA
                  </span>
                </span>
                <span className=" text-[.9rem] font-semibold sm:text-base">
                    Jan 2021 - Dec 2022
                </span>
               
                
                <p className=" text-[.9rem] text-justify text-gray-400">
                  <a className="italic text-[.9rem] text-gray-600">Coursework: </a> 
                    <a>Cloud Computing, Data Mining, Data Structures, Script Programming/Python, Enterprise 
                      Network Design, Database Systems, Java Programming, Distributed Database Systems, Intro to Artificial 
                      Intelligence, Web-Database Application Development
                    </a>
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
