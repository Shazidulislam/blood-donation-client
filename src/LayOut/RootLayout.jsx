import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className=' bg-gray-300'>
            <div className='max-w-7xl mx-auto'>
                  <Outlet></Outlet>
            </div>
        </div>
    );
};

export default RootLayout;