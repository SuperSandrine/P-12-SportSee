import React from 'react';
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
  console.log('props dans webPerformance', props);
  const dataWP = props.data.data;
  console.log('dataWP', dataWP);

  return (
    <RadarChart
      width={258}
      height={263}
      outerRadius="100%"
      data={dataWP}
      style={{ backgroundColor: ' #282D30' }}
      margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
      radius={[5, 5, 5, 5]} // TODO: ça marche pas
    >
      <PolarGrid stroke="white" gridType="polygon" radialLines={false} />
      <PolarAngleAxis
        dataKey="kind"
        // TODO = récupérer le code kind et aller cherche le nom dans kind
        axisLine={false}
        tick={{ fill: 'white', fontSize: 15 }}
        //axisLineType="circle" //tickLine={false}
        //tick={false} // les identifiants des chiffres // gère le titre des lignes qui tiennent la toile
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
  );
};

export default WebPerformance;
