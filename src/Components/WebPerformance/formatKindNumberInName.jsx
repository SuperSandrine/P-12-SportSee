import PropTypes from 'prop-types';

/**
 * Change the assigned number in a proper name of kind, french.
 * @param {number} value
 * @return {string}
 */
export const formatKindNumberInName = (value) => {
  //console.log('VALUE', value);
  switch (value) {
    case 1:
      return 'Cardio';
    case 2:
      return 'Énergie';
    case 3:
      return 'Endurance';
    case 4:
      return 'Force';
    case 5:
      return 'Vitesse';
    case 6:
      return 'Intensité';
    default:
      console.log('Vérifier la donnée kind dans performance');
  }
};
formatKindNumberInName.propTypes = {
  value: PropTypes.number,
};
