import React from 'react';
import logo from "../../assets/bg/logo.jpeg"
const ProFirstButton = () => {
    return (
        <div>
            <div className="flex cursor-pointer   justify-center items-center ">
                <img className={`w-14 h-14 bg-white rounded-full bg-[#D25D5D] `} src={logo} alt="" />
                <h1 className='text-3xl -ml-2 font-seconbary  '><span className='text-[#B9375D]'>RED</span>irect</h1>
            </div>
        </div>
    );
};

export default ProFirstButton;