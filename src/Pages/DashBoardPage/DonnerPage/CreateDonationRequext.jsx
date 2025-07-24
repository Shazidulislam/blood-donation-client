import React from 'react';
import DonationFrom from '../../../Component/Form/DonationRequestFrom/DonationFrom';

const CreateDonationRequext = () => {
    return (
        <div className='px-4 py-4 md:py-8 min-h-screen bg-gray-50'>
            <div className='bg-white px-4 py-8 rounded-lg shadow-lg transition scale-3d duration-150'>
               <h2 className='text-3xl font-bold text_primary '>Be a Donner</h2>
               <p className='text-gray-600 font-medium lg:w-7/12'>In someone’s darkest hour, your voice can spark hope. Request blood today be the reason someone lives tomorrow.</p>
                <div className='divider py-10'></div>
                <div>
                    <h2 className='text-xl font-bold text_primary'>Speak Hope, Save a Soul Today</h2>
                    <DonationFrom></DonationFrom>
                </div>
            </div>
           
        </div>
    );
};

export default CreateDonationRequext;