import React from 'react';
import logo from "../../assets/banner/logo3.webp"
import { Link } from 'react-router';
const ProFirstButton = () => {
    return (
        <Link to={"/"} className='flex cursor-pointer   justify-center items-center'>
            <img className='w-20 h-20 rounded-full' src={logo} alt="" />
            <h1 className='text-2xl -ml-5  font-bold '>DonorBridge</h1>
        </Link>
    );
};

export default ProFirstButton;