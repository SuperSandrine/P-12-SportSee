import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer } from 'recharts';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import { formatKindNumberInName } from './formatKindNumberInName';

/**
 * Display in a Radarchart the performance value in activity kind.
 * @param {object} props
 * @param {{value:number, kind:number}[]} props.data data to be displayed according rechart format https://recharts.org/en-US/api/RadarChart
 * @return {JSX.Element} a graph from rechart library
 */
const WebPerformance = (props) => {
  //console.log('props dans webPerformance', props);
  const dataWP = props.data;

  return (
    <ResponsiveContainer aspect="0.98">
      <RadarChart
        width={258}
        height={263}
        outerRadius="78%"
        data={dataWP}
        style={{ backgroundColor: ' #282D30', borderRadius: '5px' }}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
        startAngle={30}
        endAngle={390}
      >
        <PolarGrid stroke="white" gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={formatKindNumberInName}
          axisLine={false}
          tick={{ fill: 'white', fontSize: '12px', padding: '5px' }}
          //TODO: comment espacer les mots du cercle, (endurance)
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
WebPerformance.propTypes = {
  data: PropTypes.array,
};

export default WebPerformance;
