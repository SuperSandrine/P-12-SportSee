import React, { PureComponent } from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// donnée dans mainData/index/todayscore

const Score = () => {
  const data = [
    {
      uv: 0.78,
      fill: 'pink',
    },
    {
      uv: 0.12,
      fill: 'red',
    },
  ];
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

  return (
    <div>
      <RadialBarChart
        width={258}
        height={263}
        style={{ backgroundColor: ' #FBFBFB' }}
        // cx="50%"
        // cy="50%"
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar
          // minAngle={0}
          // label={{ position: 'insideStart', fill: '#fff' }}
          background // à mettre en false pour ne pas avoir le background des barres
          clockWise
          dataKey="uv"
        />
        {/* <Legend
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        /> */}
      </RadialBarChart>
    </div>
  );
}; // donnée dans activity/index/sessions

export default Score;
