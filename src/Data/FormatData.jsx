import React from 'react';
import PropTypes from 'prop-types';

class FormatData extends React.Component {
  constructor(props) {
    //console.log('les props dans formatData', props);
    super(props); // JE sais pas trop à quoi ça sert
    this.state = {
      activity: props.USER_ACTIVITY,
      averageSession: props.USER_AVERAGE_SESSIONS,
      mainData: props.USER_MAIN_DATA,
      performance: props.USER_PERFORMANCE,
    }; // etat de notre interface
  }

  getFirstNameFromData(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir le prénom en cours4',
      //   this.state.mainData.data.userInfos.firstName
      // );
      return this.state.mainData.data.userInfos.firstName;
    } else {
      const filteredData = this.state.mainData.find(
        (element) => element.id == id
      );
      //console.log("qu'ai-je", filteredData.userInfos.firstName);
      return filteredData.userInfos.firstName;
    }
  }

  getDataForBarcharts(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir data bar" en cours2',
      //   this.state.activity.data.sessions
      // );
      return this.state.activity.data.sessions;
    } else {
      //console.log('state dans getData', this.state.activity);
      const filteredData = this.state.activity.filter(
        (element) => element.userId == id
      );
      //console.log('les data Filtrés', filteredData); // un tableau contenant l'objet avec id et sessions
      // TODO : trouver un moyen de supprimer ce niveau d'index qui sert à rien

      return filteredData[0].sessions;
    }
  }

  getDataForLineChart(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir line bar" en cours',
      //   this.state.averageSession.data.sessions
      // );
      return this.state.averageSession.data.sessions;
    } else {
      const { averageSession } = this.state;
      //console.log('state average dans getData', this.state.averageSession);
      const filteredData2 = averageSession.filter(
        (element) => element.userId == id
      );
      const { sessions } = filteredData2[0];
      return sessions;
    }
  }

  getDataForRadarChart(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir radar data" en cours',
      //   this.state.performance.data.data
      // );
      return this.state.performance.data.data;
    } else {
      //console.log('state performance dans getData', this.state.performance);
      const filteredData = this.state.performance.filter(
        (element) => element.userId == id
      );
      return filteredData[0].data;
    }
  }

  getDataForRadialChart(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir radial data" en cours',
      //   this.state.mainData.data.score
      // );

      const scoreData = this.state.mainData.data;

      const news = !scoreData.todayScore
        ? scoreData.score
        : scoreData.todayScore;
      return news * 100;
    } else {
      const filteredData = this.state.mainData.find(
        (element) => element.id == id
      );

      const news = !filteredData.todayScore
        ? filteredData.score
        : filteredData.todayScore;
      return news * 100;
    }
  }

  getDataForCards(id) {
    if (!id) {
      // console.log(
      //   'fonction "avoir cards data" en cours',
      //   this.state.mainData.data.keyData
      // );
      const mainDataFiltered = this.state.mainData.data.keyData;
      let mainDataFilteredRestructured = [];
      Object.entries(mainDataFiltered).forEach(([name, value]) => {
        mainDataFilteredRestructured.push({ name, value });
      });
      // console.log(
      //   'fonction "avoir cards data" en cours2',
      //   mainDataFilteredRestructured
      // );
      return mainDataFilteredRestructured;
    } else {
      //console.log('id dans getData', id);
      //console.log('state mainData dans getData', this.state.mainData);
      const filteredData = this.state.mainData.filter(
        (element) => element.id == id
      );
      //console.log('filtration mainData', filteredData[0].keyData);
      const mainDataFiltered = filteredData[0].keyData;
      let mainDataFilteredRestructured = [];
      //avec destructuration
      Object.entries(mainDataFiltered).forEach(([name, value]) => {
        mainDataFilteredRestructured.push({ name, value });
      });
      //console.log('mainDataFilteredRestructured', mainDataFilteredRestructured);

      return mainDataFilteredRestructured;
    }
  }

  // render() {
  //   return <div></div>;
  // }
}
FormatData.propTypes = {
  USER_ACTIVITY: PropTypes.array,
  USER_AVERAGE_SESSIONS: PropTypes.array,
  USER_MAIN_DATA: PropTypes.array,
  USER_PERFORMANCE: PropTypes.array,
};

export default FormatData;
