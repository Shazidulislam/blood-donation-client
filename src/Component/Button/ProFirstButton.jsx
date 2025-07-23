import React from 'react';
import logo from "../../assets/banner/images2.png"
import { Link } from 'react-router';
const ProFirstButton = ({color}) => {
    return (
        <Link to={"/"} className="flex cursor-pointer   justify-center items-center ">
            <img className={`w-20 h-20 rounded-full ${color?"bg-gray-100 ":"bg-white"}`} src={logo} alt="" />
            <h1 className='text-2xl -ml-5 text-[#403f3f] font-bold '>DonorBridge</h1>
        </Link>
    );
};

export default ProFirstButton;