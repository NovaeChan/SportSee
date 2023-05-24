import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import '../../styles/components/_barsChart.scss'

const formatDataBarsChart = (data) => {
    let formatedSessions = [];
    for(let i = 0; i < data.sessions.length; i++){
      const sessions = data.sessions[i];
      const { kilogram, calories } = sessions;
    
      formatedSessions.push({
        day: i++,
        kg: kilogram,
        calories: calories
      })
    }
    return formatedSessions
  }
  
const  BarsChart = ({data}) => {
    const formatedData = formatDataBarsChart(data);
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={formatedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="kg" fill="#8884d8" />
            <Bar dataKey="calories" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
    }

export default BarsChart;