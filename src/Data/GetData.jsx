// récupérer la data mocked
import axios from 'axios';
import mockedData from '../../mockedData';

const data = '/mockedData.js';
export const getMockedData = () => {
  const truc = axios.get(data).then((res) => {
    //console.log('res.data', res.data);
    const mockedData = res.data;
    //console.log('mockeddata', mockedData);
    return mockedData;
  });
  return truc;
};
