import React from 'react';
import logo from "../../assets/banner/logo.png"
import { Link } from 'react-router';
const ProFirstButton = () => {
    return (
        <Link to={"/"} className='flex cursor-pointer   justify-center items-center'>
            <img className='mb-4 ' src={logo} alt="" />
            <h1 className='text-2xl -ml-3  font-bold '>ProFast</h1>
        </Link>
    );
};

export default ProFirstButton;