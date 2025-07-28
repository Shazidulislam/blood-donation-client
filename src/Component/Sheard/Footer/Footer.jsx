import React from 'react';
import { Link } from 'react-router';
import ProFirstButton from '../../Button/ProFirstButton';
import { MdEmail, MdNotListedLocation } from 'react-icons/md';
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
            <footer className="px-4 divide-y    bg-[#D25D5D40]    text-gray-800">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link to={"/"}>
                          <ProFirstButton/>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 text-sm gap-x-3 gap-y-8 lg:w-2/3 ">
                        <div className="space-y-3">
                            <h3 className=" uppercase font-semibold  border-b-2 border-[#D25D5D] w-28">Quick Links</h3>
                            <ul className='space-y-4'>
                                <li className='text-gray-500 font-medium hover:text-[#D25D5D]'>About Us</li>
                                <li className='text-gray-500 font-medium hover:text-[#D25D5D]'>Charity</li>
                                <li className='text-gray-500 font-medium hover:text-[#D25D5D]'>FAQ</li>
                                <li className='text-gray-500 font-medium hover:text-[#D25D5D]'>Tream & Contion</li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className=" uppercase font-semibold  border-b-2 border-[#D25D5D] w-28">Useful Links</h3>
                            <ul className='space-y-4'>
                                <li className='text-gray-500 text-sm font-medium flex items-start hover:text-[#D25D5D]'><span className='text-[#D25D5D]'><MdNotListedLocation size={24} /></span>Jl. P.B. Sudirman, Dauh Puri, <br /> Denpasar, Bali</li>
                                <li className='text-gray-500 font-medium flex items-start hover:text-[#D25D5D]'>
                                    <span className='text-[#D25D5D]'><IoCall size={24}/></span>
                                    +0194376305</li>
                                <li className='text-gray-500 font-medium flex justify-start hover:text-[#D25D5D]'><span  className='text-[#D25D5D]'><MdEmail size={24}/> </span>ShazidulIslam910@gmai.com</li>
                            </ul>
                        </div>
                        {/* Work Hours */}
                        <div className="space-y-3">
                            <h3 className=" uppercase font-semibold  border-b-2 border-[#D25D5D] w-28">Work Hours</h3>
                            <ul className='space-y-4'>
                                <li className='text-gray-500 text-sm font-medium flex items-start hover:text-[#D25D5D]'>Mon - Fri : 09:00 AM - 19:00 AM</li>

                                <li className='text-black text-xl font-extrabold font-seconbary  flex items-start hover:text-[#D25D5D]'>
                                   Need For Help? Call Us</li>

                            <button className='px-8 py-4 rounded flex  bg-[#D25D5D] text-white'><span className='text-white ' ><IoCall size={24}></IoCall></span>Contact US</button>
                            </ul>
                        </div>
                       
                       
                        
                    </div>
                </div>
                <div className="py-6 text-sm text-center    text-gray-600">© 1968 Company Co. All rights reserved.</div>
            </footer>
    );
};

export default Footer;