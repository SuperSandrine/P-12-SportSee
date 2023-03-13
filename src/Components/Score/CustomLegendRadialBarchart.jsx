import PropTypes from 'prop-types';

/**
 * Create the appropriate legend with different font-size and a dynamic value
 * @param {object} props
 * @param {number} props.data
 * @return {JSX.Element} a div with two paragraph
 */

export const CustomLegendRadialBarchart = (props) => {
  //console.log('custom legend', props);
  const customLegendData = props.data;

  return (
    <div
      //style={{ maxWidth: '95px', margin: 'auto' }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '11vw',
        height: '11vw',
        margin: 'auto',
        backgroundColor: 'white',
        borderRadius: '50%',
      }}
    >
      <p
        style={{
          fontSize: '26px',
          fontWeight: '700',
          color: '#282D30',
          textAlign: 'center',
        }}
      >
        {customLegendData}%
      </p>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#74798C',
          textAlign: 'center',
        }}
      >
        de votre objectif
      </p>
    </div>
  );
};

CustomLegendRadialBarchart.propTypes = {
  data: PropTypes.number,
};
