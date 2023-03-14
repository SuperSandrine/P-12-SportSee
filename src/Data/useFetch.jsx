import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom hook to fetch data from an API.
 * @param {string} id
 * @return {Promise.resolve<{mainData:array, activityData:array, averageSessionsData:array, performanceData:array, hasError:bool, isLoading:bool}[]>|Promise.reject<Error>} 4 different arrays or an error
 */
export const useFetch = (id) => {
  const [mainData, setMainData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [averageSessionsData, setAverageSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  const [hasError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setError(false);
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
        setMainData(result.data);
        setAverageSessionsData(result2.data);
        setActivityData(result3.data);
        setPerformanceData(result4.data);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error('error true');
        //TODO: comment envoyer la route de la page d'erreur?
      }
      setLoading(false);
    })();
  }, []);

  return [
    mainData,
    activityData,
    averageSessionsData,
    performanceData,
    hasError,
    isLoading,
  ];
};

useFetch.propTypes = {
  id: PropTypes.string,
};
