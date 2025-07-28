import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import MenueItem from '../../../../Component/Sheard/DashbordMenu/MenueItem';
import { BiDonateHeart } from 'react-icons/bi';
import { FaMagnet } from 'react-icons/fa';

const AgentMenu = () => {
    return (
        <div>
            <MenueItem
              address="/dashboard"
              label="Home"
              icon={IoHomeOutline}
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

export default AgentMenu;