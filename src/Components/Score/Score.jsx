import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { PolarAngleAxis } from 'recharts';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// donnée dans mainData/index/todayscore

const CustomLegend = (props) => {
  //console.log('PROPS CUSTOMLEGEND', props.payload[0].payload.uv * 100); //0.12
  //const customLegendData = props.payload[0].payload.uv * 100;
  //console.log('custom legend', props);
  const customLegendData = props.data;

  return (
    <div style={{ maxWidth: '95px', margin: 'auto' }}>
      <p
        style={{
          fontSize: '26px',
          fontWeight: '700',
          color: '#282D30',
          textAlign: 'center',
        }}
      >
        {customLegendData}%
      </p>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#74798C',
          textAlign: 'center',
        }}
      >
        de votre objectif
      </p>
    </div>
  );
};

CustomLegend.propTypes = {
  data: PropTypes.number,
};

const Score = (props) => {
  // créer la data dynamiquement
  //console.log('props dans Score', props); // props.data = 30
  const scoreData = props.data;
  //console.log(typeof scoreData);

  const data = [
    {
      uv: `${scoreData}`,
      fill: 'red',
    },
  ];

  // const style = {
  //   color: 'blue',
  //   top: '50%',
  //   right: 0,
  //   transform: 'translate(0, -50%)',
  //   lineHeight: '24px',
  // };

  return (
    <ResponsiveContainer aspect="0.98">
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
        domain={(0, 1)}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey={'uv'}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          label={false}
          // minAngle={0}
          // label={{ position: 'insideStart', fill: '#fff' }}
          background // à mettre en false pour ne pas avoir le background des barres
          clockWise
          dataKey="uv"
          domain
          data={data}
          //legendType="circle"
          angleAxisId={0}
          cornerRadius={10 / 2}
        />
        {/* <Legend
          iconSize={10}
          verticalAlign="middle"
          wrapperStyle={style}
          align="center"
        /> */}
        <text fill="#20253A" fontSize={15}>
          <tspan x={29} y={34}>
            Score
          </tspan>
        </text>
        <Legend
          content={<CustomLegend data={scoreData} />}
          align="center"
          verticalAlign="middle"
        />
        ;
      </RadialBarChart>
    </ResponsiveContainer>
  );
}; // donnée dans activity/index/sessions

Score.propTypes = {
  data: PropTypes.number,
};

export default Score;
