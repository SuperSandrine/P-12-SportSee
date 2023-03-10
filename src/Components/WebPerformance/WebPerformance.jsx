import React from 'react';
import { ResponsiveContainer } from 'recharts';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from 'recharts';
// donnée dans performance/index/data et kind
// #US13 : En tant qu’utilisateur, je veux voir mon type d’activité réalisée sous forme d’un radar chart.

const WebPerformance = (props) => {
  //console.log('props dans webPerformance', props);
  const dataWP = props.data;
  console.log('dataWP', dataWP);
  //const dataKindWP = props.data.kind;
  //console.log('dataKindWP', dataKindWP[4]);

  const formatEngToFrKind = (value) => {
    //console.log('VALUE', value);
    //return dataKindWP[value];

    //console.log('TYPE VALUE', typeof value);
    switch (value) {
      case 1:
        return 'Cardio';
      case 2:
        return 'Énergie';
      case 3:
        return 'Endurance';
      case 4:
        return 'Force';
      case 5:
        return 'Vitesse';
      case 6:
        return 'Intensité';
      default:
        console.log('Vérifier la donnée kind dans performance');
    }
  };

  return (
    <ResponsiveContainer aspect="0.98">
      <RadarChart
        width={258}
        height={263}
        outerRadius="80%"
        data={dataWP}
        style={{ backgroundColor: ' #282D30' }}
        margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
        radius={[5, 5, 5, 5]} // TODO: ça marche pas
        startAngle={30}
        endAngle={-330}
      >
        <PolarGrid stroke="white" gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={formatEngToFrKind}
          // TODO = récupérer le code kind et aller cherche le nom dans kind
          axisLine={false}
          tick={{ fill: 'white', fontSize: '1.1rem', padding: '5px' }}
          //radius={20}
          //axisLineType="circle" //tickLine={false}
          //tick={false} // les identifiants des chiffres // gère le titre des lignes qui tiennent la toile
          //TODO: comment espacer les mots du cercle, (endurance)
        />
        {/* <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} //affiche les valeurs des lignes concentriques
       />  */}
        <Radar
          dataKey="value"
          //stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default WebPerformance;
