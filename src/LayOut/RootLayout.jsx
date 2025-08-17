import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Component/Sheard/Footer/Footer';
import Navbar from '../Component/Navbar';

const RootLayout = () => {
    return (
        <div className=' bg-[#D25D5D10]   mx-auto'>
            <Navbar></Navbar>
            <div className=''>
                  <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;