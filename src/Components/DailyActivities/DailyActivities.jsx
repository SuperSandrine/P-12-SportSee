import React from 'react';
// donnée dans activity/index/sessions
// US#11: En tant qu’utilisateur, je veux voir mon activité quotidienne sous forme d’un BarChart. Ce dernier montre les informations relatives au poids et aux calories brûlées. L’axe des abscisses correspond aux jours du mois courant. Un tooltip apparaît au survol.

import PropTypes from 'prop-types';
import { BarChart } from 'recharts';
import { CartesianGrid } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { Bar } from 'recharts';
import { Label } from 'recharts'; // à quoi sert label, TODO, utile pour titre?

const DailyActivities = (props) => {
  console.log('props dans DailyActivities', props);
  return (
    // <figure>
    //   <h2>Activité quotidienne</h2>
    <BarChart
      title="Activité quotidienne"
      // layout="horizontal"
      width={835}
      height={320}
      data={props.data}
      style={{ backgroundColor: '#FBFBFB' }}
      margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
      barGap={8}
      radius={[5, 5, 5, 5]}

      // barCategoryGap="20%"
      // maxBarSize={2}
    >
      <text x={30} y={38} fill="black" dominantBaseline="central">
        <tspan fontSize="15">Activité quotidienne</tspan>
      </text>
      <Bar
        dataKey="kilogram"
        name="Poids (kg)"
        fill="#282D30"
        yAxisId="kil"
        barSize={7}
        radius={[3.5, 3.5, 0, 0]}
      />
      <Bar
        dataKey="calories"
        name="Calories brûlées (kCal)"
        fill="#E60000"
        yAxisId="cal"
        barSize={7}
        radius={[3.5, 3.5, 0, 0]}

        // shape={{ borderRadius: '3,5 3,5 0 0' }}
        // label={{ fill: 'red', fontSize: 40 }}
      />
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      {/* // les pointillés */}
      <XAxis dataKey="day" />
      <YAxis
        hide={true}
        yAxisId="cal"
        dataKey="calories"
        orientation="left"
        domain={[0, 'dataMax + 20']}
      />
      <YAxis
        yAxisId="kil"
        dataKey="kilogram"
        orientation="right"
        domain={['dataMin - 2', 'dataMax + 2']}
      />

      <Tooltip
        // viewBox={{ x: 50, y: 0, width: 400, height: 400 }}
        contentStyle={{
          backgroundColor: 'red',
          color: 'blue',
          border: 'none',
          textDecoration: 'none',
        }}
        itemStyle={{ color: 'white', fontSize: 14 }}
        label=""
        // content={TODO: custom content}
      />
      {/* <Label value={'Activité quotidienne'} position="insideTopLeft" /> */}

      <Legend
        fontSize="10"
        verticalAlign="top"
        align="right"
        iconType="circle"
        height={36}
        // fill="#808080" // TODO: couleur du texte? / TODO fontsize??
      />
      {/* <Legend
          payload={[{ value: 'Activité quotidienne' }]}
          verticalAlign="top"
          align="left"
          height={40}
          // POur mettre un titre, mais ne fonctionne pas
        /> */}
    </BarChart>
    // </figure>
  );
};

//DailyActivities.propTypes = {};

export default DailyActivities;
