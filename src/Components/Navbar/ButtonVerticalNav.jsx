import PropTypes from 'prop-types';

/**
 * Button component with dynamic icon
 * @param {object} props
 * @param {string} props.picture
 * @param {string} props.alt

 * @returns
 */
export const ButtonVerticalNavBar = (props) => {
  //console.log('buttonVerticalnavBar', props);
  return (
    <li>
      <button
        style={{
          width: '4.44vw',
          height: '4.44vw',
          background: 'white',
          borderRadius: '6px',
          border: 'none',
        }}
      >
        <img
          src={props.picture}
          alt={props.alt}
          style={{
            height: '3.125vh',
          }}
        />
      </button>
    </li>
  );
};

ButtonVerticalNavBar.propTypes = {
  picture: PropTypes.string,
  alt: PropTypes.string,
};
