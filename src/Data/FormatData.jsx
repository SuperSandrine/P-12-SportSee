import React from 'react';

class FormatData extends React.Component {
  constructor(props) {
    console.log('les props dans formatData', props);
    super(props); // JE sais pas trop à quoi ça sert
    this.state = {
      activity: props.USER_ACTIVITY,
      averageSession: props.USER_AVERAGE_SESSIONS,
      mainData: props.USER_MAIN_DATA,
      performance: props.USER_PERFORMANCE,
    }; // etat de notre interface

    //console.log('encore un truc', this.state.averageSession);
  }
  // sauvegarde
  // getFirstNameFromData(id) {
  //   const filteredData = this.state.mainData.find(
  //     (element) => element.id == id
  //   );
  //   console.log("qu'ai-je", filteredData.userInfos.firstName);
  //   return filteredData.userInfos.firstName;
  // }
  getFirstNameFromData(id) {
    if (!id) {
      //console.log('fonction "avoir le prénom en cours');
      //const filteredData = this.props;
      //console.log('fonction "avoir le prénom en cours2', this.state);
      //console.log('fonction "avoir le prénom en cours3', filteredData);
      console.log(
        'fonction "avoir le prénom en cours4',
        this.state.mainData.data.userInfos.firstName
      );

      //console.log("qu'ai-je", filteredData.userInfos.firstName);
      return this.state.mainData.data.userInfos.firstName;
    } else {
      const filteredData = this.state.mainData.find(
        (element) => element.id == id
      );
      console.log("qu'ai-je", filteredData.userInfos.firstName);
      return filteredData.userInfos.firstName;
    }
  }

  getDataForBarcharts(id) {
    if (!id) {
      // console.log('fonction "avoir data bar" en cours', this.state);
      console.log(
        'fonction "avoir data bar" en cours2',
        this.state.activity.data.sessions
      );
      return this.state.activity.data.sessions;
    } else {
      //console.log('id dans getData', id);
      //console.log('state dans getData', this.state.activity);
      const filteredData = this.state.activity.filter(
        (element) => element.userId == id
      );
      //console.log('les data Filtrés', filteredData); // un tableau contenant l'objet avec id et sessions
      // TODO : trouver un moyen de supprimer ce niveau d'index qui sert à rien
      // TODO: format, chaque elment est un objet
      //[{ name: 'a', value: 12 }]
      //[{ name: 'a', value: [5, 12] }]
      return filteredData[0].sessions;
    }
  }

  getDataForLineChart(id) {
    const { averageSession } = this.state;
    //console.log('id dans getData', id);
    //console.log('state average dans getData', this.state.averageSession);
    const filteredData2 = averageSession.filter(
      (element) => element.userId == id
    );
    const { sessions } = filteredData2[0];
    //console.log('filtration', filteredData2);
    return sessions;
  }

  getDataForRadarChart(id) {
    //console.log('id dans getData', id);
    //console.log('state performance dans getData', this.state.performance);
    const filteredData = this.state.performance.filter(
      (element) => element.userId == id
    );
    //console.log('filtration', filteredData[0].data);
    return filteredData[0];
  }

  getDataForRadialChart(id) {
    const filteredData = this.state.mainData.find(
      (element) => element.id == id
    );
    //console.log("qu'ai-je", filteredData.todayScore || filteredData.Score);
    //const scoreDataFiltered = filteredData.todayScore || filteredData.Score;
    const news = !filteredData.todayScore
      ? filteredData.score
      : filteredData.todayScore;
    //console.log('TEST DE NEws', news);
    return news * 100;
  }

  getDataForCards(id) {
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

    // return filteredData[0].keyData;
    return mainDataFilteredRestructured;
  }

  render() {
    return <div></div>;
  }
}

export default FormatData;
