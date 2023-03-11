import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip: addionnal information appear on mouse entering Line chart.
 * Information is the value of Y according the place of the mouse in chart
 * @param {boolean} active
 * @param {array} payload
 * @param {label} string
 * @return {JSX.ElementElement}
 */
export const CustomContentTooltipLinechart = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    //console.log('PAYLOAD', payload[0].value);
    //console.log('Label', typeof label);
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
CustomContentTooltipLinechart.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.number,
};
