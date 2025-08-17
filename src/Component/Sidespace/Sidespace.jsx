import React from 'react';

const Sidespace = ({children}) => {
    return (
        <div className='md:max-w-7xl mx-auto' >
            {children}
        </div>
    );
};

export default Sidespace;