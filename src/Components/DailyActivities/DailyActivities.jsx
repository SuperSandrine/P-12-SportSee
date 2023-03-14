import React from 'react';

import PropTypes from 'prop-types';
import { BarChart } from 'recharts';
import { CartesianGrid } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Legend } from 'recharts';
import { Bar } from 'recharts';
import { ResponsiveContainer } from 'recharts';

import CustomTooltipBarchart from './CustomTooltipBarchart.jsx';

/**
 * DailyActivities displays on a barchart from rechart information about weight and calories burnt according days from current month. A tooltip appears on hover.
 * @param {object} props
 * @param {{day:string, kilogram: number, calories: number}[]} props.data data to be displayed according rechart format https://recharts.org/en-US/api/BarChart
 * @return {JSX.Element} a graph from rechart library
 */
const DailyActivities = (props) => {
  //console.log('props dans DailyActivities', props);

  /**
   * Change the format of the date from the day string prop.data
   * @param {string} tick date on a yyyy-mm-dd  string format
   * @returns {number} keep only the day from the date string
   */
  const formatDate = (tick) => {
    const cut = tick.split('-');
    const day = parseInt(cut[2]);
    return day;
  };
  //TODO = FRANCOIS: est-ce que je sors cette fonction de ce composant pour la mettre dans un fichier spécial
  // TODO = FRANcOIS: est-ce que cette fonction doit avoir une JSdoc

  return (
    <ResponsiveContainer
      aspect="2.61" // width / height. If specified, the height will be calculated by width / aspect.
    >
      <BarChart
        title="Activité quotidienne"
        width={835}
        height={320}
        data={props.data}
        style={{ backgroundColor: '#FBFBFB', borderRadius: '5px' }}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
        barGap={8}
        className="bar"
      >
        <text
          x={30}
          y={38}
          fill="#20253A"
          dominantBaseline="central"
          fontSize={'1.46vh'}
        >
          <tspan>Activité quotidienne</tspan>
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
        />
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          x={4}
          // TODO: faire correspondre les pointillés au poids
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={formatDate}
          tick={{ fill: '#9B9EAC', fontSize: '1.37vh' }}
          dy={15} // move the text from the tick line
        />
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
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#9B9EAC', fontSize: '1.37vh' }}
          dx={15} // move the text from the tick line
        />

        <Tooltip
          offset={50}
          label={false}
          content={<CustomTooltipBarchart />}
          cursor={{
            fill: 'rgba(196, 196, 196, 0.3)',
            strokeOpacity: 0.3,
          }}
          // TODO: mettre le fond derrière
        />
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={36}
          wrapperStyle={{ fontSize: '1.37vh' }}
          formatter={(value, entry, index) => (
            <span
              className="text-color-class"
              style={{
                color: '#74798C',
                paddingLeft: '5px',
                paddingRight: '10px',
              }}
            >
              {value}
            </span>
          )}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

DailyActivities.propTypes = {
  data: PropTypes.array,
};

export default DailyActivities;
