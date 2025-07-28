import React from 'react';
import AllDonationtable from './AllDonationtable';

const MydonationRequest = () => {
    return (
        <div className='px-4 py-6 bg-gray-50 '>
            <div className='bg-white px-4 py-10 rounded-lg shadow-lg'>
                 <h2 className='text-[#D25D5D] text-2xl md:text-4xl lg:text-5xl font-bold' >Manage My Donation</h2>
                 <p className='text-lg font-medium text-gray-400 pt-3'>Find out which donations are pending, in progress, completed, or canceled.</p>
                 <div className='divider'></div>
                 <div>
                    <AllDonationtable></AllDonationtable>
                 </div>
            </div>
        </div>
    );
};

export default MydonationRequest;