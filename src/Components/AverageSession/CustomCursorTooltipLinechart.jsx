import React from 'react';
import PropTypes from 'prop-types';
import { Rectangle } from 'recharts';

/**
 * On hover, the background changes color according the mouse mouvement to present a dynamic reference area
 * @param {object} props
 * @param {number} props.height hieght of the chart, or of place that the line took, without padding
 * @param {number} props.width width of the chart
 * @param {{x:number, y:number}} props.points position of the beginning of the rectangle
 * @returns {JSX.Element} Rectangle Component
 */

export const CustomCursorTooltopLinechart = (props) => {
  //console.log(props);
  const { points, width, height } = props;
  const { x, y } = points[0];
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
CustomCursorTooltopLinechart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  payload: PropTypes.array,
  points: PropTypes.array,
};
