import React from 'react';
import Sidebar from '../Pages/DashBoardPage/Sidebar';
import { Outlet } from 'react-router';
import useAuth from '../hook/useAuth';
import LoadingSpner from '../Component/LoadingSpner';

const DashboardLayout = () => {
  const {user , loading} = useAuth()
  if(!user || loading) return <LoadingSpner/>
    return (
        <div className=''>
            <div className=' bg-white relative md:flex min-h-screen'>
                  {/* Left Side: Sidebar Component */}
                  <div>
                    <Sidebar></Sidebar>
                  </div>
                  {/*  Right Side: Dashboard Dynamic Content with outlet*/}
                  <div className='flex-1   md:ml-64'>
                    <Outlet></Outlet>
                  </div>
            </div>
        </div>
    );
};

export default DashboardLayout;