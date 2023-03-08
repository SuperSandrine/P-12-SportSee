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
        <img src={props.picture} />
      </button>
    </li>
  );
};
