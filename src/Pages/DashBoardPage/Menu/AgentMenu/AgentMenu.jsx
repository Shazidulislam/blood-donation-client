import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import MenueItem from '../../../../Component/Sheard/DashbordMenu/MenueItem';

const AgentMenu = () => {
    return (
        <div>
            <MenueItem
              address="/dashboard"
              label="Home"
              icon={IoHomeOutline}
            />
        </div>
    );
};

export default AgentMenu;