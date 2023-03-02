import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Line } from 'recharts';
import { ResponsiveContainer } from 'recharts';
// donnée dans averageSession/index/sessions
// #US12 : En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //console.log('PAYLOAD', payload[0].value);
    //console.log('Label', label);
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: 'white',
          border: 'none',
          padding: '0.6vw',
          fontSize: '8px',
        }}
      >
        <p className="label">{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

//TODO: faire sortir la ligne (
//  -ajouter des datas dynamiquement)
//  -enlever le padding

const AverageSession = (props) => {
  const formatNumberInDay = (value) => {
    //FRANcois, pourquoi quand je mets un console.log ici, il est publier bcp de fois dans la console,
    //FRANCOIS, est-ce que un return dans switch c'est mal?
    //console.log('VALUE', value);
    //console.log('TYPE VALUE', typeof value);
    switch (value) {
      case 1:
        return 'L';
      case 2:
        return 'M';
      case 3:
        return 'M';
      case 4:
        return 'J';
      case 5:
        return 'V';
      case 6:
        return 'S';
      case 7:
        return 'D';
      case 0:
        return '';
      case 8:
        return '';
      default:
        console.log('Vérifier la donnée des average Session');
    }
  };

  return (
    <ResponsiveContainer aspect="0.98">
      <LineChart
        width={258}
        height={263}
        data={props.data}
        style={{ backgroundColor: ' #FF0000' }}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
        radius={[5, 5, 5, 5]} //TODO : comme Barchart ??
      >
        <text
          fill="#FFFFFF"
          opacity={0.5}
          fontSize={15}
          //scaleToFit={true}
          //width={70}
          //style={{ display: 'block', maxWidth: '50px', margin: 'auto' }}
          //TODO gérer le retour à la ligne du text
          // FRANCOIS: 2 Tspan, c'est mal?
        >
          <tspan
            x={29}
            y={34}
            //width={70}
          >
            Durée moyenne des
          </tspan>
          <tspan x={29} y={54}>
            sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          padding={{ top: 10 }}
          itemStyle={{ color: 'blue' }}
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#FFFFFF', fontSize: '12px', opacity: '0.5' }}
          dy={15}
          tickFormatter={formatNumberInDay}
          //ticks={['L', 'M', 'M', 'J', 'V', 'S', 'D']}
        />
        <YAxis
          hide={true}
          dataKey="sessionLength"
          domain={[0, 'dataMax + 10']}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: 'black',
            strokeOpacity: 0.7,
            strokeWidth: 40,
          }}
          // contentStyle={{
          //   backgroundColor: 'white',
          //   color: 'blue',
          //   border: 'none',
          //   //textDecoration: 'none',
          //   //outline: 'none', // TODO: ça a marché 2 secondes... étrange
          // }}
          //itemStyle={{ color: 'blue', fontSize: 8 }}
        />
        <Line
          type="monotone"
          //type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="#FFFFFF"
          activeDot={{ stroke: 'white', r: 3 }}
          //activeDot={{ stroke: 'pink', strokeWidth: 1, r: 1 }}
          //label={{ fill: 'blue', fontSize: 20 }}
          strokeWidth={2} //épaisseur de la ligne // François: customized
          //strokeDasharray="4 4 9" //pointillés
          style={{
            filter: `drop-shadow(0px 2px 3px blue)`,
            //TODO: chercher le linear gradient à mettre à la place de dropshadow, est-ce un filter?
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

AverageSession.propTypes = {};

export default AverageSession;
