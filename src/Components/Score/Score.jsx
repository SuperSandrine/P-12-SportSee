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

import { CustomLegendRadialBarchart } from './CustomLegendRadialBarchart';

/**
 * Create an array with the data and display the daily score in a radial chart with a specific legend.
 * @param {object} props
 * @param {number} props.data
 * @returns {JSX.Element} a graph from rechart libray: https://recharts.org/en-US/api/RadialBarChart
 */
const Score = (props) => {
  //console.log('props dans Score', props); // props.data = 30
  const scoreData = props.data;

  const data = [
    {
      dataCatched: `${scoreData}`,
      fill: 'red',
    },
  ];

  return (
    <ResponsiveContainer aspect="0.98">
      <RadialBarChart
        width={258}
        height={263}
        style={{ backgroundColor: ' #FBFBFB', borderRadius: '5px' }}
        innerRadius="70%"
        //outerRadius="100%"
        barSize={7}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey={'dataCatched'}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          label={false}
          background // à mettre en false pour ne pas avoir le background des barres
          clockWise
          dataKey="dataCatched"
          cornerRadius={5}
        />
        <text fill="#20253A" fontSize={15}>
          <tspan x={22} y={28}>
            Score
          </tspan>
        </text>
        <Legend
          content={<CustomLegendRadialBarchart data={scoreData} />}
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
