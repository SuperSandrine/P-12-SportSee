import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Line } from 'recharts';
// donnée dans averageSession/index/sessions
// #US12 : En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.

const AverageSession = (props) => {
  return (
    // <div>
    //   // <h2>Activité moyenne</h2>
    <LineChart
      width={258}
      height={263}
      data={props.data}
      style={{ backgroundColor: ' #FF0000' }}
      margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
      radius={[5, 5, 5, 5]} //comme Barchart
    >
      <text x={30} y={38}>
        <tspan>Durée moyenne des sessions</tspan>
      </text>
      <XAxis
        dataKey="day"
        padding={{ top: 10 }}
        itemStyle={{ color: 'blue' }}
      />
      <YAxis hide={true} dataKey="sessionLength" domain={[0, 'dataMax + 10']} />
      <Tooltip
        contentStyle={{
          backgroundColor: 'white',
          color: 'blue',
          border: 'none',
          textDecoration: 'none',
          outline: 'none', // TODO: ça a marché 2 secondes... étrange
        }}
        itemStyle={{ color: 'black', fontSize: 14 }}
      />
      <Line
        type="monotone"
        dataKey="sessionLength"
        dot={false}
        stroke="#FFFFFF"
        activeDot={{ stroke: 'white', r: 3 }}
        //activeDot={{ stroke: 'pink', strokeWidth: 1, r: 1 }}
        //label={{ fill: 'blue', fontSize: 20 }}
        strokeWidth={2} //épaisseur de la ligne // François: customized
        //strokeDasharray="4 4 9" //pointillés
      />
    </LineChart>
    //</div>
  );
};

AverageSession.propTypes = {};

export default AverageSession;
