import { RadialBarChart, RadialBar } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const RadialChart = () => {
    return (
      <div>
        <h2>XX % <span>de votre objectif</span></h2>
        <RadialBarChart 
        width={330}
        height={250}
        innerRadius="65%"
        outerRadius="80%"
        startAngle={90}
        endAngle={170}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        className="gauge-chart__svg-chart"
        data={data}>
          <RadialBar
            name="score"
            dataKey="value"
            stroke-linejoin="round"
            fill="red"
            cornerRadius={100}
            label={{ position: 'insideStart', fill: '#fff' }}
          />
        </RadialBarChart>
      </div>
    );
}

export default RadialChart;
