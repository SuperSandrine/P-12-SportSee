import React from 'react';

import PropTypes from 'prop-types';

const CustomTooltipBarchart = ({ active, payload, label }) => {
  //console.log('customtooltipbar', payload);
  if (active && payload && payload.length) {
    //console.log('PAYLOAD', payload);
    console.log('Label', label);
    return (
      <div
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
