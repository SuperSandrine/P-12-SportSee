import React from 'react';
import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

// donnée dans main data/index/keydata
import caloryIcon from './../../assets/iconcalory.svg';
import carbsIcon from './../../assets/iconcarbs.svg';
import fatIcon from './../../assets/iconfat.svg';
import proteinIcon from './../../assets/iconprotein.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  figure {
    display: flex;
    width: 17.92vw;
    background-color: #fbfbfb;
    padding: 2.22vw;
    border-radius: 5px;
    article {
      padding-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
      }
      h3 {
        font-size: 14px;
        color: #74798c;
        line-height: 24px;
      }
    }
  }
`;

const DietCount = (props) => {
  const dietsData = props.data;
  //console.log('dietsData', dietsData);
  //console.log('dietsData2', dietsData[0].name); //calCount

  const fillUpData = (element) => {
    switch (element.name) {
      case 'calorieCount':
        //console.log('calories', element.value);
        //console.log('calories', element.value.toLocaleString('en-US'));
        const cal = {
          title: 'Calories',
          unit: 'KCal',
          path: caloryIcon,
          pathAlt: 'icône feu',
        };
        //console.log('cal', cal);
        //console.log('elemen', element);
        Object.assign(element, cal);
        break;
      case 'proteinCount':
        //console.log('prot', element.value);
        const prot = {
          title: 'Protéines',
          unit: 'g',
          path: proteinIcon,
          pathAlt: 'icône cuisse de poulet',
        };
        Object.assign(element, prot);
        break;
      case 'carbohydrateCount':
        //console.log('carb', element.value);
        const carb = {
          title: 'Glucides',
          unit: 'g',
          path: carbsIcon,
          pathAlt: 'icône pomme',
        };
        Object.assign(element, carb);
        break;
      case 'lipidCount':
        //console.log('lipid', element.value);
        const lipi = {
          title: 'Lipides',
          unit: 'g',
          path: fatIcon,
          pathAlt: 'icône burger',
        };
        Object.assign(element, lipi);
        break;
      default:
        console.log('Inconnu au bataillon');
    }
  };

  return (
    <StyledDiv>
      {dietsData &&
        dietsData.map((element, index) => {
          fillUpData(element);
          //console.log('dans render element', element);
          return (
            <figure key={index}>
              <img src={element.path} alt={element.pathAlt}></img>
              <article>
                <p>
                  {element.value.toLocaleString('en-US')}
                  {element.unit}
                </p>
                <h3>{element.title}</h3>
              </article>
            </figure>
          );
        })}
    </StyledDiv>
  );
};

export default DietCount;
