import React from 'react';
import useAuth from '../../../hook/useAuth';
import LoadingSpner from '../../../Component/LoadingSpner';
import { FaUserTie } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdBloodtype } from 'react-icons/md';
import { useLoaderData } from 'react-router';

const VolunteerHome = () => {
    const {count} = useLoaderData()
    const {user ,donation , loading} = useAuth()
    if(loading) return <LoadingSpner/>
    return (
     <div>
             {/* welcome user */}
          <div className='px-4 md:px-10 py-4 md:py-8 bg-white min-h-screen rounded-lg shadow-lg' >
                 <h2 className=' text-2xl md:text-4xl lg:text-5xl font-bold  text-[#33929D]'>Welcome, {user?.displayName}!</h2>
                 <p className=' font-medium pt-4 text-gray-400'>Manage users, donation data, and requests in one simple dashboard.</p>
                  {/* main content */}
             <div className='  bg-white mt-5 py-3 '>
                <div className='divider'></div>
                 <div className='lg:flex justify-around space-y-4 items-center'>
                    {/* 1 */}
                     <div className='py-4 px-12 border-2 border-blue-600 shadow-lg shadow-blue-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                        <span className='text-blue-500 bg-blue-100 p-4 rounded-full'>
                          <FaUserTie size={36}/>
                        </span>
                         <p>{count}</p>
                         <h2 className='text-xl text-gray-500  '>Total User</h2>
                         <p className='text-xs text-gray-500'>Updated: July 2025</p>
                     </div>
                     {/* 2 */}
                     <div className='py-4 px-12 border-2 border-lime-600  shadow-lg shadow-lime-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                        <span className='text-lime-600 bg-lime-100 p-4 rounded-full'>
                          <BsCurrencyDollar   size={36}/>
                        </span>
                         <p>$10,000</p>
                         <h2 className='text-xl text-gray-500  '>Total Funding</h2>
                         <p className='text-xs text-gray-500'>Updated: July 2025</p>
                     </div>
                     {/* 3 */}
                     <div className='py-4 px-12 border-2 border-red-600 shadow-lg shadow-red-100 flex flex-col items-center justify-center rounded-xl transition-all transform duration-300 hover:scale-105'>
                        <span className='text-red-500 bg-red-100 p-4 rounded-full'>
                          <MdBloodtype  size={36}/>
                        </span>
                         <p>{donation}</p>
                         <h2 className='text-xl text-gray-500  '> Blood Requests</h2>
                         <p className='text-xs text-gray-500'>Updated: July 2025</p>
                     </div>
                    
                 </div>
             </div>
             </div>
            
         </div>
    );
};

export default VolunteerHome;