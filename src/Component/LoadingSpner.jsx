import React from 'react';
import { BarLoader } from 'react-spinners';

const LoadingSpner = () => {
    return (
        <div className='flex justify-center items-center pt-32'>
            <BarLoader size={100} color='lime' />
        </div>
    );
};

export default LoadingSpner;