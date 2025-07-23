import React from 'react';
import { NavLink } from 'react-router';

const MenueItem = ({label , address , icon : Icon  }) => {
    return (
        <NavLink to={address}  end className={({ isActive })=>`flex items-center px-4 py-3 my-5 transition-all duration-300 transform hover:bg-gray-300  hover:text-gray-700 ${isActive?"bg-gray-300 text-gray-700":"text-gray-600 bg-gray-100"}`} >
            <Icon/>
            <span className='px-4 font-medium '>{label}</span>
        </NavLink>
    );
};
export default MenueItem;