import React from 'react';
import MenueItem from '../../../../Component/Sheard/DashbordMenu/MenueItem';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineBloodtype, MdOutlineCreateNewFolder } from 'react-icons/md';

const DonnerMenu = () => {
    return (
        <div>
            {/* donner home */}
            <MenueItem
              address="/dashboard"
              label="Home"
              icon={IoHomeOutline}
              
            />
            {/* my donation request */}
            <MenueItem
              address="/dashboard/my-donation"
              label="My Donation"
              icon={MdOutlineBloodtype }
              
            />
            {/* create new donation  */}
            <MenueItem
              address="/dashboard/create-donation-request"
              label="Create Donation"
              icon={MdOutlineCreateNewFolder  }
              
            />
        </div>
    );
};

export default DonnerMenu;