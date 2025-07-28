import React from 'react';
import logo from "../../assets/banner/logoblood2.png"
import { Link } from 'react-router';
const ProFirstButton = ({color}) => {
    return (
        <div>
            <div className="flex cursor-pointer   justify-center items-center ">
                <img className={`w-16 h-16 bg-white rounded-full ${color?"bg-gray-100":"bg-white"}`} src={logo} alt="" />
                <h1 className='text-3xl -ml-4 font-seconbary  '><span className='text-[#B9375D]'>RED</span>irect</h1>
            </div>
        </div>
    );
};

export default ProFirstButton;