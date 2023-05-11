import { LineChart as LineC, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function formatDataLineChart(data){
  const sessionsDay = ["L", "M", "M", "J", "V", "S", "D"];
  let formatedSessions = [];
  for(let i = 0; i < data.sessions.length; i++){
    const sessions = data.sessions[i];
    const { day, sessionLength } = sessions;
  
    formatedSessions.push({
      day: sessionsDay[day],
      sessionL: sessionLength
    })
  }
  return formatedSessions
}

const LineChart = ({data}) => {
  const formatedSessions = formatDataLineChart(data);
    return (
      <>
        <h3 className='lineChart__title'>Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height="100%">
        <LineC
            width={500}
            height={300}
            data={formatedSessions}
            margin={{
                top: 60, right: 20, left: 20, bottom: 5
            }}
            >
            <XAxis dataKey="day" axisLine={false} tickLine={false} stroke='white'/>
            <Tooltip filterNull={false} separator="" 
            itemStyle={{
              color: "#000000",
              backgroundColor: "#ffffff",
              fontSize: "9px",
              padding: "px",
              margin: 7,
              border: 0,
              fontWeight: "500"
            }}
            formatter={(day, value) => [" min", day]}
            contentStyle={{
              padding: ".4rem",
              backgroundColor: "#ffffff",
              border: 0,
            }}
            labelStyle={{
              display: "none",
            }}/>
            <Line
                type="monotone"
                dataKey="sessionL"
                stroke="#FFFFFF"
                dot={false}
                strokeWidth={2}
            />
        </LineC>
      </ResponsiveContainer>
      </>
    );
}

export default LineChart
