import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col md:flex-start justify-end items-center gap-7 md:justify-center md:h-[160] md:w-[92%] "
          >
            <POPUP className="img-content hover:scale-125">
              <div className="h-[260px] w-[360px] transitionduration-900 cursor-pointer shadow-xl rounded-md overflow-hidden  md:flex-row md:h-[150px] md:w-[98%] md:bg-cover mx-auto ">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" w-full h-full overflow-hidden transition duration-500 cursor-pointer"
                />
              </div>

              <div
                className={` popup w-full  h-[260px] shadow-xl rounded-md overflow-hidden md:h-[150px]  p-2`}
              >
                <p className=" text-gray-900  leading-[1.2] text-justify w-[90%] text-xl md:text-xs">
                  {data.desc}
                </p>
                <div className=" flex md:p-5 items-center justify-center gap-4 md:h-[5px] md:w-[5px] md:text-xs">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-[0px_0px_16px_12px_rgba(0,0,0,0.3)] p-1 px-2 flex gap-2 items-center justify-center font-medium "
                  >
                    <RxExternalLink className=" text-white bg-black rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black md:hidden">Demo</p>
                  </Link>
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md  p-1 px-2 flex gap-2 items-center justify-center font-medium shadow-[0px_0px_16px_12px_rgba(0,0,0,0.3)]"
                  >
                    <AiOutlineGithub className="  text-white bg-black rounded-full border  w-[35px] h-[35px] p-2 " />
                    <p className=" text-black md:hidden">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg ">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.8s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(3px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 2;
    color: #fff;
  }
`;
