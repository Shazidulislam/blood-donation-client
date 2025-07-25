import React from 'react';
import useAuth from '../../../hook/useAuth';
import LoadingSpner from '../../../Component/LoadingSpner';
import Donationtable from '../../../Component/Sheard/DashbordMenu/Table/Donationtable';
import { useRole } from '../../../hook/useRole';
import { Link } from 'react-router';

const DonnerHome = () => {
    const {user , loading} = useAuth()
     const [role , ]= useRole()
    if(loading) return <LoadingSpner/> 

    return (
        <div>
            {/* welcome user */}
            <div className='px-4 md:px-10 py-4 md:py-8 bg-white rounded-lg shadow-lg' >
                <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold  text-[#33929D]'>Welcome, {user?.displayName}!</h2>
                <p className=' font-medium pt-4 text-gray-400'>Thank you for being a part of our blood donation community.</p>
            </div>
            {/* main content */}
            <div className='  px-4 md:px-10 rounded-lg shadow-lg  bg-white mt-5 py-3'>
                 <div className='flex justify-between'>
                    <h2 className='font-medium text-xl md:text-2xl text-[#33929D]'>Your Recent Donation Requests</h2>
                    <Link to="/dashboard/my-donation" className='px-3 md:px-6 py-2 md:py-3 text-sm font-bold text-white rounded bg-[#33929D]'>My Donation</Link>
                 </div>
                 <div>
                   {
                    role === "donner" && <Donationtable></Donationtable>
                   }
                  
                 </div>
            </div>
        </div>
    );
};

export default DonnerHome;