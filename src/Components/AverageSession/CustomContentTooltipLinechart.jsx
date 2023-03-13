import React from 'react';
import PropTypes from 'prop-types';

/**
 * Tooltip: additionnal informations appear on mouse entering Line chart.
 *  * It's a dynamic card appearing on hover
 * @param {boolean} active
 * @param {array} payload
 * @param {label} string
 * @return {JSX.Element}
 */
export const CustomContentTooltipLinechart = ({ active, payload, label }) => {
  //console.log('customtooltipline', payload);
  if (active && payload && payload.length) {
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
