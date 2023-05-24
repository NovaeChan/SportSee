import React, { useEffect } from 'react';
import { useState } from 'react';
import { getData } from '../utils/ApiCalls';
import NutritionCard from '../components/NutritionCard/NutritrionCard'
import BarsChart from '../components/BarsChart/BarsChart';
import RadarChart from '../components/RadarChart/RadarChart'
import LineChart from '../components/LineChart/LineChart'
import RadialChart from '../components/RadialChart/RadialChart'

import calories from '../assets/calories.png'
import proteins from '../assets/proteins.png'
import glucides from '../assets/glucides.png'
import lipids from '../assets/lipids.png'


import '../styles/pages/home.scss'

const Home = () => {
    document.title = "SportSee - Home"
    
    const [userData, setUserData] = useState({});
    const [userActivityData, setUserActivityData] = useState({})
    const [userPerformance, setUserPerformance] = useState({})
    const [userAverageSession, setUserAverageSession] = useState({})

    const [isLoading, setIsLoading] = useState(true);
    const mock = true;

    useEffect( () => {
        const data = async (mock, userId) => {
            const userD = await getData(mock, userId, "");
            const userAct = await getData(mock, userId, "activity");
            const userPerf = await getData(mock, userId, "performance");
            const userAvg = await getData(mock, userId, "average");
            
            setUserData(userD);
            setUserActivityData(userAct);
            setUserPerformance(userPerf);
            setUserAverageSession(userAvg);
            setIsLoading(false);
        };
        data(mock, 12);
        // getData(mock, 12, "").then(userD => {
        //     setUserData(userD);
        // });
        // getData(mock, 12, "activity").then(userAct => {
        //     setUserActivityData(userAct);
        // });
        // getData(mock, 12, "performance").then(userPerf => {
        //     setUserPerformance(userPerf);
        // });
        // getData(mock, 12, "average").then(userAvg => {
        //     setUserAverageSession(userAvg);
        // })
    }, [mock])
    
    if(!userData || !userActivityData || !userPerformance || !userAverageSession){
        console.error("Une erreur a eu lieu lors du chargement des données");
        return null;
    }

    return (
        <>
        {!isLoading && (
            <div className='profile'>
                <h1 className='profile__hello'>Bonjour <span>{userData.userInfos?.firstName}</span></h1>
                <p className='profile__congrats'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                <div className='profile__data-container'>
                    <section className='profile__data-charts'>
                        <article className="profile__charts">
                            <div className='chart barChart'>
                                <BarsChart data={userActivityData}/>
                            </div>
                            <div className='chart lineChart'>
                                <LineChart data={userAverageSession}/>
                            </div>
                            <div className='chart radarChart'>
                                <RadarChart data={userPerformance}/>
                            </div>
                            <div>
                                <RadialChart data={userData}/>
                            </div>
                        </article>
                        <aside className="profile__nutritionCard">
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
            </div>
        )}
        </>
    );
};

export default Home;