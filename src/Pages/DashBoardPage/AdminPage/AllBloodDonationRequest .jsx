import React from 'react';
import AdminallDonationTable from '../../../Component/Sheard/DashbordMenu/Table/AdminallDonationTable';

const  AllBloodDonationRequest  = () => {
    return (
        <div className='px-4 py-6 bg-gray-50 '>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
                 <h2 className='text_primary text-2xl md:text-4xl lg:text-5xl font-bold' >Manage  Donation</h2>
                 <p className='text-lg font-medium text-gray-400 pt-3'>Comprehensive Blood Request Overview</p>
                 <div className='divider'></div>
                 <div>
                    <AdminallDonationTable></AdminallDonationTable>
                 </div>
            </div>
        </div>
    );
};

export default  AllBloodDonationRequest ;