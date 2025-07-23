import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpner = () => {
    return (
        <div className='flex justify-center items-center'>
            <CircleLoader size={100} color='lime' />
        </div>
    );
};

export default LoadingSpner;