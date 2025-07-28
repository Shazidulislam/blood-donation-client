import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Component/Sheard/Footer/Footer';
import Navbar from '../Component/Navbar';

const RootLayout = () => {
    return (
        <div className=' bg-[#D25D5D10] pt-2 px-10 mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                  <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;