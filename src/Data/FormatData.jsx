import React from 'react';
import PropTypes from 'prop-types';

/**
 * Change format of data received to be used in rechart components on profile page.
 * @class
 * @extends React.Component
 */

class FormatData extends React.Component {
  /**
   * represent data received
   * @param {object} props
   * @param {{userId: number, sessions: array}[]} props.USER_ACTIVITY
   * @param {{userId: number, sessions: array}[]} props.USER_AVERAGE_SESSIONS
   * @param {{userId:number, keyData:object, todayScore: number, userInfos:object }[]} props.USER_MAIN_DATA
   * @param {{userId:number, data:array, kind:object}[]} props.USER_PERFORMANCE
   */
  constructor(props) {
    //console.log('les props dans formatData', props);
    super(props);
    this.state = {
      activity: props.USER_ACTIVITY,
      averageSession: props.USER_AVERAGE_SESSIONS,
      mainData: props.USER_MAIN_DATA,
      performance: props.USER_PERFORMANCE,
    };
  }

  /**
   * To welcome on profile page
   * @param {string} [id] id is optional
   * @return {string}
   */
  getFirstNameFromData(id) {
    if (!id) {
      return this.state.mainData.data.userInfos.firstName;
    } else {
      const filteredData = this.state.mainData.data.find(
        (element) => element.id == id
      );
      return filteredData.userInfos.firstName;
    }
  }

  /**
   * For daily activities chart
   * @param {string} [id]
   * @return {array}
   */
  getDataForBarcharts(id) {
    if (!id) {
      return this.state.activity.data.sessions;
    } else {
      const filteredData = this.state.activity.filter(
        (element) => element.userId == id
      );
      return filteredData[0].sessions;
    }
  }

  /**
   * For average sessions chart
   * @param {string} [id]
   * @return {array}
   */
  getDataForLineChart(id) {
    if (!id) {
      return this.state.averageSession.data.sessions;
    } else {
      const { averageSession } = this.state;
      const filteredData2 = averageSession.filter(
        (element) => element.userId == id
      );
      const { sessions } = filteredData2[0];
      return sessions;
    }
  }

  /**
   * For performance chart
   * @param {string} [id]
   * @return {array}
   */
  getDataForRadarChart(id) {
    if (!id) {
      return this.state.performance.data.data;
    } else {
      const filteredData = this.state.performance.filter(
        (element) => element.userId == id
      );
      return filteredData[0].data;
    }
  }

  /**
   * For score chart
   * @param {string} [id]
   * @return {number} is a percentage.
   */
  getDataForRadialChart(id) {
    let scoreData;
    if (!id) {
      scoreData = this.state.mainData.data;
    } else {
      scoreData = this.state.mainData.data.find((element) => element.id == id);
    }
    const news = !scoreData.todayScore ? scoreData.score : scoreData.todayScore;
    return news * 100;
  }

  /**
   * Restructure the data {object} (mocked data or data from api) in an array with new keys.
   * @param {string} [id]
   * @return {{name:string, value:number }[]}
   */
  getDataForCards(id) {
    let arrangedMainData;
    if (!id) {
      arrangedMainData = this.state.mainData.data.keyData;
    } else {
      const filteredData = this.state.mainData.data.filter(
        (element) => element.id == id
      );
      arrangedMainData = filteredData[0].keyData;
    }
    let mainDataRestructured = [];
    // destructuration
    Object.entries(arrangedMainData).forEach(([name, value]) => {
      mainDataRestructured.push({ name, value });
    });
    //console.log(mainDataRestructured);
    return mainDataRestructured;
  }
}
FormatData.propTypes = {
  USER_ACTIVITY: PropTypes.array,
  USER_AVERAGE_SESSIONS: PropTypes.array,
  USER_MAIN_DATA: PropTypes.array,
  USER_PERFORMANCE: PropTypes.array,
};

export default FormatData;
