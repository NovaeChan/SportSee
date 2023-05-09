import React, { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/ApiCalls';
import NutritionCard from '../components/NutritionCard/NutritrionCard'

import calories from '../assets/calories.png'
import proteins from '../assets/proteins.png'
import glucides from '../assets/glucides.png'
import lipids from '../assets/lipids.png'


import '../styles/pages/home.scss'

const Home = () => {
    document.title = "SportSee - Home"
    
    const [userData, setUserData] = useState({});
    const [userActivityData, setUserActivityData] = useState({})

    const mock = true;

    useEffect(() => {
        getData(mock, 12, "").then(userD => {
            setUserData(userD);
        });
        getData(mock, 12, "activity").then(userActivity => {
            setUserActivityData(userActivity);
        });
    }, [])
    
    if(!userData){
        console.error("Une erreur est survenue lors du chargement des données");
        return null;
    }

    return (
        <div>
            <div className="title">
                <h1>Bonjour {userData.userInfos?.firstName}</h1>
                <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            </div>
            <section className='charts'>
                <article>

                </article>
                <aside>
                    <NutritionCard 
                        icon={calories}
                        dataType={'Calories'}
                        dataCard={[`${userData.keyData?.calorieCount}`, 'kCal']}
                        id={userData.id}
                    />
                    <NutritionCard 
                        icon={proteins}
                        dataType={'Proteines'}
                        dataCard={[`${userData.keyData?.proteinCount}`, 'g']}
                        id={userData.id}
                    />
                    <NutritionCard 
                        icon={glucides}
                        dataType={'Glucides'}
                        dataCard={[`${userData.keyData?.carbohydrateCount}`, 'g']}
                        id={userData.id}
                    />
                    <NutritionCard 
                        icon={lipids}
                        dataType={'Lipides'}
                        dataCard={[`${userData.keyData?.lipidCount}`, 'g']}
                        id={userData.id}
                    />
                </aside>
            </section>
        </div>
    );
};

export default Home;