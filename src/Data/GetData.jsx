// récupérer la data mocked
import axios from 'axios';
import { useState, useEffect } from 'react';

export const useFetch = (id) => {
  const [mainData, setMainData] = useState([]);
  const [activityData, setActivityData] = useState([]);
  const [averageSessionsData, setAverageSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // setError(false);
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
        setMainData(result.data);
        setAverageSessionsData(result2.data);
        setActivityData(result3.data);
        setPerformanceData(result4.data);
      } catch (error) {
        setError(true);
        console.error('error true');
      }
      setLoading(false);
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
