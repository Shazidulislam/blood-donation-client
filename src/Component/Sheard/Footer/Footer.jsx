import React from 'react';
import { Link } from 'react-router';
import ProFirstButton from '../../Button/ProFirstButton';
import { MdEmail, MdNotListedLocation } from 'react-icons/md';
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
            <footer className="   bg-[#D25D5D90]   text-black">
                <div className="grid grid-cols-4 py-10">

                    <div className="">
                        <Link to={"/"}>
                          <ProFirstButton/>
                        </Link>
                    </div>
                        <div className="space-y-3">
                            <h3 className=" uppercase font-semibold  ">Quick Links</h3>
                            <ul className='space-y-4'>
                                <li className='text-white font-medium hover:text-[#D25D5D]'>
                                     <Link to={"/"} >Home</Link>
                                </li>
                                <li className='text-white font-medium hover:text-[#D25D5D]'>
                                    <Link to={"/search"} >Search</Link>
                                </li>
                                <li className='text-white font-medium hover:text-[#D25D5D]'>
                                     <li><Link to="/all-blood-donation-request">Donation</Link></li>
                                </li>
                                <li className='text-white font-medium hover:text-[#D25D5D]'>
                                       <li><Link to="/published-blog">Blog</Link></li>
                                </li>
                                  <li  className='text-white font-medium hover:text-[#D25D5D]'><Link to="/funding">Funding</Link></li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className=" uppercase font-semibold  ">Useful Links</h3>
                            <ul className='space-y-4'>
                                <li className='text-white text-sm font-medium flex items-start hover:text-[#D25D5D]'><span className='text-[#D25D5D]'><MdNotListedLocation size={24} /></span>Jl. P.B. Sudirman, Dauh Puri, <br /> Denpasar, Bali</li>
                                <li className='text-white font-medium flex items-start hover:text-[#D25D5D]'>
                                    <span className='text-[#D25D5D]'><IoCall size={24}/></span>
                                    +8801605199098</li>
                                <li className='text-white text-sm font-medium flex items-start hover:text-[#D25D5D]'><span  className='text-[#D25D5D]'><MdEmail size={24}/> </span>ShazidulIslam910@gmai.com</li>
                            </ul>
                        </div>
                    
                </div>
                <div className="py-6 text-sm text-center    text-gray-600">© 1968 Company Co. All rights reserved.</div>
            </footer>
    );
};

export default Footer;