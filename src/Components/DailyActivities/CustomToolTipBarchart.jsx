import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip: additionnal informations appear on mouse entering Barchart.
 * It's a dynamic card appearing on hover
 * @param {boolean} active
 * @param {array} payload
 * @param {label} string
 * @return {JSX.ElementElement}
 */
const CustomTooltipBarchart = ({ active, payload, label }) => {
  //console.log('customtooltipbar', payload);
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          color: 'white',
          backgroundColor: 'red',
          border: 'none',
          outline: 'none',
          padding: '0.6vw',
          fontSize: '1.05vh',
          lineHeight: '2.34vh',
          textAlign: 'center',
          outline: 'none',
        }}
      >
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
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

export default CustomTooltipBarchart;
