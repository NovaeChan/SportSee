import React from 'react';

/**
 * 
 * @param {*} param0 
 * @param {*} param1 
 * @returns 
 */
const SideBarButton = ({image}, {iconType}) => {
    return (
        <div className='sideBar__icon'>
            <img src={image} alt={iconType} />
        </div>
    );
};

export default SideBarButton;