import React from 'react';
import PropTypes from 'prop-types';

import { LineChart } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Line } from 'recharts';
import { ResponsiveContainer } from 'recharts';

import { CustomContentTooltipLinechart } from './CustomContentTooltipLinechart';
import { CustomCursorTooltopLinechart } from './CustomCursorTooltipLinechart';
import { formatNumberInDay } from './formatNumberInDay';

// donnée dans averageSession/index/sessions
// #US12 : En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.

/**
 * Display in a Linechart the average sport session lenght in a day accross a week. A tooltip appears on mouse hover.
 * @param {Object} props
 * @param {{day: number, sessionLength:number}[]} props.data data to be displayed according rechart format https://recharts.org/en-US/api/LineChart
 * @return {JSX.Element} a graph from rechart library
 */

const AverageSession = (props) => {
  //console.log('averagesession', props);

  return (
    <ResponsiveContainer aspect="0.98">
      <LineChart
        width={258}
        height={263}
        data={props.data}
        style={{ backgroundColor: ' #FF0000', borderRadius: '5px' }}
        margin={{ top: 1, right: 15, left: 15, bottom: 4 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
          </linearGradient>
        </defs>
        <text fill="#FFFFFF" opacity={0.5} fontSize={15}>
          <tspan x={22} y={28}>
            Durée moyenne des
          </tspan>
          <tspan x={22} y={46}>
            sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#FFFFFF', fontSize: '1rem', opacity: '0.5' }}
          tickFormatter={formatNumberInDay}
        />
        <YAxis
          hide={true}
          dataKey="sessionLength"
          domain={['dataMin', 'dataMax + 15']}
        />
        <Tooltip
          content={<CustomContentTooltipLinechart />}
          offset={20}
          cursor={<CustomCursorTooltopLinechart />}
        />
        <Line
          type="monotone"
          //type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="url(#colorGradient)"
          activeDot={{
            fill: 'white',
            r: 4,
            strokeWidth: 8,
            strokeOpacity: 0.4,
            stroke: 'white',
          }}
          strokeWidth={3} //épaisseur de la ligne
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

AverageSession.propTypes = {
  data: PropTypes.array,
  //data:PropTypes.array.isRequired,
  //FRANCOIS, j'aurai préféré mettre un isRequired, mais j'ai une erreur qui s'affiche le temps du chargement, comment ne pas avoir d'erreur et isrequired??
};

export default AverageSession;
