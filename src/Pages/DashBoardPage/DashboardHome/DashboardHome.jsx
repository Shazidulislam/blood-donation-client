import React from 'react';
import DonnerHome from '../HomePages/DonnerHome';
import LoadingSpner from '../../../Component/LoadingSpner';
import { useRole } from '../../../hook/useRole';

const DashboardHome = () => {
    const [role ,roleLoading ]= useRole()
    if( roleLoading) return <LoadingSpner/>
    return (
        <div className='px-4 py-4 md:py-8 min-h-screen bg-gray-50'>
            
            {
                role === "donner" &&  <DonnerHome></DonnerHome>
            }
           
        </div>
    );
};

export default DashboardHome;