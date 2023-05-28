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

const CustomToolTip = ({active, data}) => {
  console.log(data);
  if(active && data){
    return (
      <div className="tooltip">
        <p className="tooltip__calories">{data[0].value + "kcal"}</p>
        <p className="tooltip__kg">{data[1].value + "kg" }</p>
      </div>
    )
  }
  return null
}
  
const  BarsChart = ({data}) => {
  const formatedData = formatDataBarsChart(data);
  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          barSize={7}
          barGap={8}
          margin={{
            bottom: 60,
          }}
          data={formatedData}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tickMargin={15}/>
          <YAxis />
          <Tooltip content={<CustomToolTip />} offset={50} />
          <Legend data={[
            {
              value: "Calories brûlées (kCal)",
              type: "circle",
              id: "ID01",
              color: "#E60000"
            },
            {
              value: "Poids (kg)",
              type: "circle",
              id: "ID02"
            }
          ]}
            align="right"
            verticalAlign="top"
            iconSize={8}
            wrapperStyle={{ top: "-50px", right: "-10px" }}
          />
          <Bar dataKey="kg" fill="#282D30" radius={[10, 10, 0, 0]}/>
          <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
  );
}



export default BarsChart;