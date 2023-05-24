import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';

const formatedDataRadial = (score) => {
  return [{ value : score * 100}];
}

const RadialChart = ({data}) => {
  const formatedData = formatedDataRadial(data.todayScore)
  console.log(formatedData);
  const perfValue = data.todayScore * 100
  const startAngle = 90;
    return (
      <>
        <RadialBarChart
          width={330}
          height={250}
          innerRadius={65}
          outerRadius={80}
          data={formatedData}
          startAngle={startAngle}
          endAngle={90 + (perfValue * 360) / 100}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <RadialBar
            name="score"
            dataKey="value"
            stroke-linejoin="round"
            fill="#E60000"
            cornerRadius={100}      
          />
        </RadialBarChart>
      </>
    );
  }


export default RadialChart;
