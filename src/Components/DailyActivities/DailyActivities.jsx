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

import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';
import { Rectangle } from 'recharts';

//import CustomTooltipBarchart from './CustomTooltipBarchart.jsx';

// pas utilisé
const CustomCursorBar = (props) => {
  const { x, y, width, height, stroke } = props;

  return (
    <Rectangle
      //backgroundColor="pink"
      fill="pink"
      //stroke="red"
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

const CustomTooltipBarchart = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //console.log('PAYLOAD', payload);
    //console.log('Label', label);
    return (
      <div
        //className="custom-tooltip"
        style={{
          color: 'white',
          backgroundColor: 'red',
          border: 'none',
          padding: '0.6vw',
          fontSize: '0.8rem',
          lineHeight: '24px',
          textAlign: 'center',
          outline: 'none',
        }}
      >
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

CustomTooltipBarchart.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

const DailyActivities = (props) => {
  //console.log('props dans DailyActivities', props);
  const formatDate = (tick) => {
    //console.log('TICK', tick);
    const cut = tick.split('-');
    const Ynnumber = parseInt(cut[2]);
    return Ynnumber;
  };
  return (
    // <figure>
    //   <h2>Activité quotidienne</h2>
    <ResponsiveContainer
      aspect="2.61" // width / height. If specified, the height will be calculated by width / aspect.
      // width="57.99vw"
      // height="31.25vh" // avec les vw et vh, j'ai le bon format mais mon graph disparait
      // width="100%"
      // height="100%"
    >
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
        //viewBox="0 0 8 3"
        // FRANCOIS: viewbox ne marche pas, avec styledBar non plus
        className="bar"
        // barCategoryGap="20%"
        // maxBarSize={2}
      >
        <text x={30} y={38} fill="black" dominantBaseline="central">
          <tspan fontSize="15" color="#20253A">
            Activité quotidienne
          </tspan>
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
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          x={4}
          // TODO: faire correspondre les pointillés au poids
        />
        {/* // les pointillés */}
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickFormatter={formatDate}
          //contentStyle={{ color: 'blue' }}
          tick={{ fill: '#9B9EAC', fontSize: '14px' }}
          dy={15} // décale le text de la ligne de graph
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
          tick={{ fill: '#9B9EAC', fontSize: '14px' }}
          dx={15} // décale le text de la ligne de graph
        />

        <Tooltip
          // viewBox={{ x: 50, y: 0, width: 400, height: 400 }}
          //separator="***"
          offset={50}
          //coordinate={{ x: 0, y: 500 }}
          //active={true}
          //position={{ x: 200, y: 0 }}
          label={false}
          // contentStyle={{
          //   backgroundColor: 'red',
          //   color: 'blue',
          //   border: 'none',
          //   textDecoration: 'none',
          //   outline: 'none', // TODO: ça a marché 2 secondes... étrange, y a un truc avec le clic.
          // }}
          //itemStyle={{ color: 'white', fontSize: 14 }}
          // content={TODO: custom content}
          content={<CustomTooltipBarchart />}
          cursor={
            //<CustomCursorBar />
            {
              //   //stroke: 'grey',
              fill: 'rgba(196, 196, 196, 0.5)',
              //stroke: 'grey',
              strokeOpacity: 0.3,
            }
          }
          // TODO: mette le fonc derrière
          //cursor={<CustomCursorBar />}
        />
        {/* <Label value={'Activité quotidienne'} position="insideTopLeft" /> */}

        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={36}
          wrapperStyle={{ fontSize: '14px' }} //OK=TODO pourquoi la tailel passe mais pas la couleur?
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
          //color="#74798C"
          //fontSize="40"
          //fill="#808080" // TODO: couleur du texte? / TODO fontsize??
        />
        {/* <Legend
          payload={[{ value: 'Activité quotidienne' }]}
          verticalAlign="top"
          align="left"
          height={40}
          // POur mettre un titre, mais ne fonctionne pas
        /> */}
      </BarChart>
      {/* // </figure> */}
    </ResponsiveContainer>
  );
};

DailyActivities.propTypes = {
  data: PropTypes.array,
};

export default DailyActivities;
