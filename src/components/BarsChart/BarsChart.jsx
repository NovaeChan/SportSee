import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarsChart = ({data}) => {
    return (
        <div>
            <div>
                <p>Activité quotidienne</p>
                <ul>
                    <li>Poids (kg)</li>
                    <li>Calories (KCal)</li>
                </ul>
            </div>
            <h2>BarsChart</h2>
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