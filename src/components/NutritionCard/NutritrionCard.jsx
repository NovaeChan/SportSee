import React from 'react';

const NutritionCard = ({icon, dataType, dataCard, id}) => {
    return (
        <div className='nutriCard' key={id}>
            <img src={icon} alt="Nutrition card" />
            <div>
                <div>{dataCard}</div>
                <div>{dataType}</div>
            </div>
        </div>
    );
};

export default NutritionCard;