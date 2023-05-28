import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, Legend } from 'recharts';

const formatedDataRadial = (score) => {
  return [{ value : score * 100}];
}

export default class RadarChart extends PureComponent {
  render(){
    const score = this.props.data?.todayScore ? this.props.data?.todayScore : this.props.data?.score
    const formatedData = formatedDataRadial(score) 
    const perfValue = score * 100
    const startAngle = 90;
      return (
        <>
          <ResponsiveContainer width="100%" height="100%">
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
            <text x="60" y="40" dominantBaseline="hanging" fontSize="26" fontWeight="bold">{perfValue}% de votre objectif</text>
          </RadialBarChart>
          </ResponsiveContainer>
        </>
      );
  }

  }


// export default RadialChart;



// export default class RadarChart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
//           <RadialBar
//             minAngle={15}
//             label={{ position: 'insideStart', fill: '#fff' }}
//             background
//             clockWise
//             dataKey="uv"
//           />
//           <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
//         </RadialBarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

