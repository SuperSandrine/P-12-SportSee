import PropTypes from 'prop-types';

/**
 * Function to transform a number in a letter (abreviation of day)
 * @param {number} value
 * @return {string}
 */
export const formatNumberInDay = (value) => {
  switch (value) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    case 0:
      return '';
    case 8:
      return '';
    default:
      console.log('Vérifier la donnée des average Session');
  }
};
formatNumberInDay.propTypes = {
  value: PropTypes.number,
};
