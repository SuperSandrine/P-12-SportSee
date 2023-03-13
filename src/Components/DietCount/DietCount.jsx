import React from 'react';
import PropTypes from 'prop-types';

import { StyledDietDiv } from './StyledDietDiv';
import { fillUpData } from './fillUpData';

/**
 * DietCount displays on cards informations about diets.
 * @param {object} props
 * @param {{name:string, value: number}[]} props.data
 * after fillUpData, the object props.data is filled up with additional informations to display cards
 * @returns {JSX.Element}
 */
const DietCount = (props) => {
  //console.log('diets', props);
  const dietsData = props.data;
  return (
    <StyledDietDiv>
      {dietsData &&
        dietsData.map((element, index) => {
          fillUpData(element);
          return (
            <figure key={index}>
              <img src={element.path} alt={element.pathAlt}></img>
              <article>
                <p>
                  {/* Display calorieCount in a american english format (with a comma on thousands) */}
                  {element.value.toLocaleString('en-US')}
                  {element.unit}
                </p>
                <h3>{element.title}</h3>
              </article>
            </figure>
          );
        })}
    </StyledDietDiv>
  );
};
DietCount.propTypes = {
  data: PropTypes.array,
};

export default DietCount;
