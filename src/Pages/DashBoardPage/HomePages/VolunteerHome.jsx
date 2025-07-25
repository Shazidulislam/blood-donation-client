import React from 'react';
import useAuth from '../../../hook/useAuth';
import LoadingSpner from '../../../Component/LoadingSpner';

const VolunteerHome = () => {
    const {user , loading} = useAuth()
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
                        <h2 className='font-medium text-2xl text-[#33929D]'>Your Recent Donation Requests</h2>
                        <div>
                        {/* {
                            role === "donner" && <Donationtable></Donationtable>
                        } */}
                        {/* <Donationtable></Donationtable> */}
                        </div>
                    </div>
                </div>
    );
};

export default VolunteerHome;