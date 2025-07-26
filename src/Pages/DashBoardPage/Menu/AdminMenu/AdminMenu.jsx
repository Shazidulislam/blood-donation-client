import React from 'react';
import MenueItem from '../../../../Component/Sheard/DashbordMenu/MenueItem';
import { IoHomeOutline } from 'react-icons/io5';
import { FaMagnet, FaUserSecret, FaUserTie } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';

const AdminMenu = () => {
    return (
        <div>
            <MenueItem
              address="/dashboard"
              label="Home"
              icon={IoHomeOutline}
            />
            <MenueItem
              address="/dashboard/all-donner-info"
              label="All User"
              icon={FaUserSecret  }
            />
            <MenueItem
              address="/dashboard/all-blood-donation-request"
              label="All Donation"
              icon={BiDonateHeart  }
            />
            <MenueItem
              address="/dashboard/content-management"
              label="Management"
              icon={FaMagnet  }
            />
        </div>
    );
};

export default AdminMenu;