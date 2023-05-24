import React from 'react';
import { Radar, RadarChart as RadarC, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const formatDataRadarChart = (data) => {
  let dataRadarChart = []
  for(let i = 0; i < data.data.length; i++){
    const perf = data.data[i];
    dataRadarChart.push({
      subject: data.kind[perf.kind],
      grade: perf.value,
      fullMark: 250
    })
  }
  return dataRadarChart
}

const RadarChart = ({data}) => {
  const formatedData = formatDataRadarChart(data);
  return (
    <div className="radarChart">
        <RadarC 
          outerRadius={90}
          width={300}
          height={300} 
          data={formatedData}
          background={{fill: "#282D30"}}
        >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="subject" tick={{fill: "white", fontSize: 15}}/>
          <PolarRadiusAxis
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Mike"
            dataKey="grade"
            stroke="#8884d8"
            fill="red"
            fillOpacity={0.7}
          />
        </RadarC>
    </div>
  );
};

export default RadarChart;