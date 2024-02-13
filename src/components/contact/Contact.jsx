import {React,useState} from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";




const Contact = () => {

  const [yourEmail,setYourEmail]=useState('');
  const [yourSubject,setYourSubject]=useState('');
  const [yourBody,setYourBody]=useState('');

  const onEmailChange=(e)=>{
    setYourEmail(e.target.value);
  }
  const onSubjectChange=(e)=>{
    setYourSubject(e.target.value);
  }
  const onBodyChangeHandler=(e)=>{
    setYourBody(e.target.value);
  }

  const contactSubmitHandler=(e)=>{
    e.preventDefault();
    document.location=`mailto:ramakrishnachelpuri44@gmail.com?subject=${yourSubject}&body=${yourBody}`
    setYourBody('');
    setYourEmail('');
    setYourSubject('');
  }

  return (
    <div id="contact" className="container m-auto mt-16">
      <div 
      data-aos="fade-up"
      className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>

      <div className="card-wrapper w-[90%] md:w-[100%] mx-auto mt-5 flex items-center justify-center md:p-10 md:flex-col">
        <div className="left w-[70%] flex-1 flex items-center justify-center md:flex-col md:w-full">
          <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col md:w-3/4">
            <div 
            data-aos="zoom-in"
            >
              <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
              <h3 className="text-xl md:text-lg">
                beautiful design for your website leave a request?
              </h3>
            </div>
          </div>
          <div className=" flex p-5 items-center justify-center ">
            <button
              data-aos="zoom-in"
              className= " text-blue-400 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] "
            >
              <BsArrowRight className=" md:rotate-90" />
            </button>
          </div>
        </div>
        <div className="right flex-1">
          <form
            data-aos="zoom-in"
            className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
            action="mailto:ramakrishnachelpuri44@gmail.com"
            method="get"
            encType="text/plain"
            onSubmit={contactSubmitHandler}
            
          >
            <input
              className="px-3 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
              type="emai"
              placeholder="sample@email.com"
              name="email"
              value={yourEmail}
              onChange={onEmailChange}
            />
            <input
              className="px-3 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
              type="text"
              placeholder="Your name"
              name="subject"
              value={yourSubject}
              onChange={onSubjectChange}
            />
            <textarea
              className="px-3 shadow-[0_0_10px_0px_rgba(0,0,0,0.3)] p-2 rounded-lg w-full"
              rows="4"
              cols="50"
              placeholder="Enter your message here..!!"
              name="body"
              value={yourBody}
              onChange={onBodyChangeHandler}
              id=""
            />

            <button
            className="w-full text-black font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
            type="submit"
            onSubmit={contactSubmitHandler}
              //write logic on submit outside the return function
            >
              <a href="#_" className="relative w-full py-2 font-bold text-black group ">
                  <span className="absolute rounded-lg inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-teal-300 group-hover:translate-x-0 group-hover:translate-y-0 "></span>
                  <span className="absolute rounded-lg inset-0 w-full h-full border-2 border-black "></span>
                  <span className="relative flex items-center justify-center space-x-1">
                    <span>Send</span>
                    <RiSendPlaneFill/>
                  </span>
              </a>
            </button>
              
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
