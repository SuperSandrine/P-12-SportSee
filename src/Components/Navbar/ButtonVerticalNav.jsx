import PropTypes from 'prop-types';

export const ButtonVerticalNavBar = (props) => {
  return (
    <li>
      <button
        style={{
          width: '64px',
          height: '64px',
          background: 'white',
          borderRadius: '6px',
          border: 'none',
        }}
      >
        <img src={props.picture} alt={props.alt} />
      </button>
    </li>
  );
};

ButtonVerticalNavBar.propTypes = {
  picture: PropTypes.string,
  alt: PropTypes.string,
};
