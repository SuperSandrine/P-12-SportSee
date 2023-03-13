import PropTypes from 'prop-types';

import caloryIcon from './../../assets/iconcalory.svg';
import carbsIcon from './../../assets/iconcarbs.svg';
import fatIcon from './../../assets/iconfat.svg';
import proteinIcon from './../../assets/iconprotein.svg';

/**
 * FillUpData fill up object with informations in a pair key/value, needed to display Diet cards.
 * @param {object} element
 * @param {string} element.name
 * @param {number} element.value
 */

export const fillUpData = (element) => {
  //console.log('ELEMENT', element);
  switch (element.name) {
    case 'calorieCount':
      const cal = {
        title: 'Calories',
        unit: 'kCal',
        path: caloryIcon,
        pathAlt: 'icône feu',
      };
      Object.assign(element, cal);

      break;
    case 'proteinCount':
      const prot = {
        title: 'Protéines',
        unit: 'g',
        path: proteinIcon,
        pathAlt: 'icône cuisse de poulet',
      };
      Object.assign(element, prot);
      break;
    case 'carbohydrateCount':
      const carb = {
        title: 'Glucides',
        unit: 'g',
        path: carbsIcon,
        pathAlt: 'icône pomme',
      };
      Object.assign(element, carb);
      break;
    case 'lipidCount':
      const lipi = {
        title: 'Lipides',
        unit: 'g',
        path: fatIcon,
        pathAlt: 'icône burger',
      };
      Object.assign(element, lipi);
      break;
    default:
      console.log('Inconnu au bataillon');
  }
};

fillUpData.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};
