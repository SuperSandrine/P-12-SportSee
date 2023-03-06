// récupérer la data mocked
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import mockedData from '/mockedData.js';

//const data = '/mockedData.js'; //

// export const getMockedData = () => {
//   const truc = axios.get(mockedData).then((res) => {
//     //console.log('res.data', res.data);
//     const mockedData = res.data;
//     console.log('mockeddata', mockedData);
//     return mockedData;
//   });
//   return truc;
// };
// cf P11
// authentification en plus
// vérifier si au même format

// export const getData = () => {
//   const [userData, setUserData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       setError(false);
//       setLoading(true);
//       try {
//         const result = await axios.get('http://localhost:3000/user/12');
//         console.log('RESULT', result.data);
//         setUserData(result.data);
//       } catch (error) {
//         setError(true);
//         console.error('error true');
//       }
//       setLoading(false);
//       // loading
//       // error
//     })();
//   }, []);

//   return userData;
// };

export const useFetch = (id) => {
  const [mainData, setMainData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [averageSessionsData, setAverageSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setError(false);
      setLoading(true);
      try {
        const result = await axios.get(`http://localhost:3000/user/${id}`);
        const result2 = await axios.get(
          `http://localhost:3000/user/${id}/average-sessions`
        );
        const result3 = await axios.get(
          `http://localhost:3000/user/${id}/activity`
        );
        const result4 = await axios.get(
          `http://localhost:3000/user/${id}/performance`
        );
        console.log('RESULT', result.data);
        setMainData(result.data);
        setAverageSessionsData(result2.data);
        setActivityData(result3.data);
        setPerformanceData(result4.data);
      } catch (error) {
        setError(true);
        console.error('error true');
      }
      setLoading(false);
      // loading
      // error
    })();
  }, []);

  return [
    mainData,
    activityData,
    averageSessionsData,
    performanceData,
    error,
    loading,
  ];
};
