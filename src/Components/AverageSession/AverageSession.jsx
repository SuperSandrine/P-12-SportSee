import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { Line } from 'recharts';
import { ResponsiveContainer } from 'recharts';
import { ReferenceArea } from 'recharts';
import { Rectangle } from 'recharts';
// donnée dans averageSession/index/sessions
// #US12 : En tant qu’utilisateur, je veux voir ma durée moyenne des sessions sous la forme d’un LineChart. L’axe des abscisses correspond à la durée moyenne des sessions. Un tooltip apparaît au survol.

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //console.log('PAYLOAD', payload[0].value);
    //console.log('Label', label);
    return (
      <div
        //className="custom-tooltip"
        style={{
          backgroundColor: 'white',
          border: 'none',
          padding: '0.6vw',
          paddingTop: '0.8vw',
          fontSize: '0.8rem',
          height: 'inherit',
        }}
      >
        <p>{`${payload[0].value}min`}</p>
      </div>
    );
  }
  return null;
};

const CustomCursor = (props) => {
  //console.log(props)
  const { points, width, height } = props;
  //console.log('customcurso props', height, width);

  const { x, y } = points[0];
  //const { x1, y1 } = points[1];
  //console.log(props);
  return (
    <Rectangle
      fill="black"
      opacity={0.2}
      x={x}
      y={y}
      width={width + 50}
      height={height + 100}
    />
  );
};
// FRANCOIS: est-ce qu'il faut faire les proptypes de customCursor?
CustomCursor.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  payload: PropTypes.array,
  points: PropTypes.array,
};

//TODO: faire sortir la ligne (
//  -ajouter des datas dynamiquement)
//  -enlever le padding

const AverageSession = (props) => {
  //console.log('averagesession', props);
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
  // const ajout = {{ day: 0, sessionLength: 30 }{props.data}};
  // const ajout2 = { day: 8, sessionLength: 20 };
  // const origin = [props.data];
  // //const dataxtended = ajout.push(ajout2);
  // console.log('origin', origin);
  // console.log('dataextende', dataxtended);
  // console.log('ajout après', ajout);

  return (
    <ResponsiveContainer aspect="0.98">
      <LineChart
        width={258}
        height={263}
        data={props.data}
        style={{ backgroundColor: ' #FF0000' }}
        margin={{ top: 1, right: 15, left: 15, bottom: 4 }}
        radius={[5, 5, 5, 5]} //TODO : comme Barchart ??
      >
        <defs>
          <linearGradient id="colorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity={0.4} />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
            {/* <stop offset="50%" stop-color="white" /> */}
            {/* //<stop offset="95%" stop-color="#blue" /> */}
          </linearGradient>
        </defs>
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
            x={22}
            y={28}
            //width={70}
          >
            Durée moyenne des
          </tspan>
          <tspan x={22} y={46}>
            sessions
          </tspan>
        </text>
        <XAxis
          dataKey="day"
          //padding={{ top: -10 }}
          //itemStyle={{ color: 'blue' }}
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#FFFFFF', fontSize: '1rem', opacity: '0.5' }}
          //dy={}
          tickFormatter={formatNumberInDay}
          //ticks={['L', 'M', 'M', 'J', 'V', 'S', 'D']}
        />
        <YAxis
          hide={true}
          dataKey="sessionLength"
          domain={['dataMin - 10', 'dataMax + 20']} // réduire le domain?
        />
        <Tooltip
          content={<CustomTooltip />}
          offset={20}
          // position={{ y: 5 }}
          cursor={<CustomCursor />}
          // cursor={{
          //   stroke: 'black',
          //   strokeOpacity: 0.3,
          //   strokeWidth: 40,
          //   // TODO: afficher à partir du point et e toute hauteur et largeur du container parent
          // }}
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
          stroke="url(#colorGradient)"
          //activeDot={{ stroke: 'white', r: 3 }}
          activeDot={{
            fill: 'white',
            r: 4,
            strokeWidth: 8,
            strokeOpacity: 0.4,
            stroke: 'white',
          }}
          //label={{ fill: 'blue', fontSize: 20 }}
          strokeWidth={3} //épaisseur de la ligne // François: customized
          //strokeDasharray="4 4 9" //pointillés
        />

        {/* <ReferenceArea
          x1={5}
          //TODO: rempli dynamiquement x1 avec le côté actif de la souris
          y1={0}
          y2={60} // TODO: Je n'arrive pas à sortir du domaine, normal je suis dans un reference area
          fill="black"
          opacity={0.2} // TODO: mettre sur 0.1
          //viewBox={{ x: 0, y: 0, width: 1, height: 1 }} //??

          //height="150px"
          //x2={}
          //y1={}
          //y2={100}
          //stroke="blue"
          //strokeWidth={20}
          //strokeOpacity={0.3}
        /> */}
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
