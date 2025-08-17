import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import { LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";

const LoginForm = ({ handleSubmit }) => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-white">
      <div className="w-full mx-auto ">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <fieldset className="fieldset w-xs lg:w-lg  font-medium">
                <label htmlFor="name" className="">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@gmail.com"
                  className="w-full p-3  outline-none font-semibold border-b-2 border-white hover:border-[#D25D5D]"
                />
              </fieldset>
            </div>
            <div className="space-y-2">
              <fieldset className=" relative fieldset w-xs lg:w-lg  font-medium">
                <label htmlFor="password" className="">
                  Password
                </label>
                <input
                  type={isOpen?"text":"password"}
                  name="password"
                  placeholder="*****"
                  className="w-full p-3  outline-none font-semibold border-b-2 border-white hover:border-[#D25D5D]"
                />
                  <span className="absolute  right-4 top-10" >
                                {
                                   isOpen? <span className="" onClick={()=>setIsOpen(false)}> <FiEye size={20}/></span> :<span onClick={()=>setIsOpen(true)}><LuEyeOff size={20}/></span> 
                                }
                              </span>
              </fieldset>
            </div>
          </div>
          <button
            type="submit"
            className=" w-xs lg:w-lg px-8 py-3 font-semibold rounded bg-[#D25D5D] cursor-pointer text-gray-100"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
