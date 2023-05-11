import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import '../../styles/components/_barsChart.scss'

const BarsChart = ({data}) => {
    return (
        <div className='barsChart'>
            <div className='barsChart__legend'>
                <p className='barsChart__activity'>Activité quotidienne</p>
                <ul className='barsChart__legend-list'>
                    <li className='barsChart__legend-item'>Poids (kg)</li>
                    <li className='barsChart__legend-item'>Calories (KCal)</li>
                </ul>
            </div>
            <ResponsiveContainer>
                <BarChart>
                    <CartesianGrid strokeDasharray="3 3">
                    <XAxis dataKey="name"/>
                    <YAxis orientation='right'/>
                    <Tooltip />
                    </CartesianGrid>
                    <Bar dataKey="kg" radius={[10, 10, 0, 0]}
                    barSize={10}
                    />
                    <Bar />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarsChart;