import React from 'react';
import PropTypes from 'prop-types';
import FormatData from './FormatData';
import { useFetch } from './useFetch';

import DATA from '../../mockedData';

/**
 * Prepare and provide to dashboard user data form an API or a mocked files.
 * @param {object} props
 * @param {boolean} props.isMocked condtion to get data moked or from an api
 * @param {string} id user id to filter mocked data
 * @returns {object} an object with data ready to be used.
 */
const ProvideData = ({ isMocked }, id) => {
  if (isMocked) {
    const format = new FormatData(DATA);
    const firstName = format.getFirstNameFromData(id);
    const dailyActivitiesData = format.getDataForBarcharts(id);
    const averageSessionData = format.getDataForLineChart(id);
    const webPerformanceData = format.getDataForRadarChart(id);
    const scoreData = format.getDataForRadialChart(id);
    const dietCountData = format.getDataForCards(id);

    return {
      firstName: firstName,
      dailyActivitiesData: dailyActivitiesData,
      averageSessionData: averageSessionData,
      webPerformanceData: webPerformanceData,
      scoreData: scoreData,
      dietCountData: dietCountData,
    };
  } else {
    const [
      mainData,
      activityData,
      averageSessionsData,
      performanceData,
      error,
      loading,
    ] = useFetch(id);

    const allAPIDataObject = new Object();
    allAPIDataObject.USER_MAIN_DATA = mainData;
    allAPIDataObject.USER_ACTIVITY = activityData;
    allAPIDataObject.USER_AVERAGE_SESSIONS = averageSessionsData;
    allAPIDataObject.USER_PERFORMANCE = performanceData;

    const format = new FormatData(allAPIDataObject);
    if (loading) {
      //console.log('loading');
      return loading;
      // {
      //   firstName: 'Loading ... wait ...',
      //   dailyActivitiesData: undefined,
      //   averageSessionData: undefined,
      //   webPerformanceData: undefined,
      //   scoreData: undefined,
      //   dietCountData: undefined,
      // };
    } else if (error) {
      throw new Error('il y a un problème avec la requete API');
    } else {
      const firstName = format.getFirstNameFromData();
      const dailyActivitiesData = format.getDataForBarcharts();
      const averageSessionData = format.getDataForLineChart();
      const webPerformanceData = format.getDataForRadarChart();
      const scoreData = format.getDataForRadialChart();
      const dietCountData = format.getDataForCards();

      return {
        firstName: firstName,
        dailyActivitiesData: dailyActivitiesData,
        averageSessionData: averageSessionData,
        webPerformanceData: webPerformanceData,
        scoreData: scoreData,
        dietCountData: dietCountData,
      };
    }
  }
};
ProvideData.propTypes = {
  isMocked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
export default ProvideData;
