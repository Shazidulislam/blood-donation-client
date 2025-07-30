import React from 'react';
import DonnerHome from '../HomePages/DonnerHome';
import LoadingSpner from '../../../Component/LoadingSpner';
import { useRole } from '../../../hook/useRole';
import AdminHomePage from '../HomePages/AdminHomePage';
import VolunteerHome from '../HomePages/VolunteerHome';

const DashboardHome = () => {
    const [role  ]= useRole()
    //console.log(role)
    // if( roleLoading) return <LoadingSpner/>
    return (
        <div className='px-4 py-4 md:py-8 min-h-screen bg-gray-50'>
            {/* donner home */}
            {
                role === "donner" &&  <DonnerHome></DonnerHome>
            }
            {/* admin home */}
            {
                role === "admin" && <AdminHomePage></AdminHomePage>
            }
            {/* Volunteer home */}
            {
                role === "volunteer" && <VolunteerHome></VolunteerHome>
            }
           
        </div>
    );
};

export default DashboardHome;