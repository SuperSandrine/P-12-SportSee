import React from 'react';

class FormatData extends React.Component {
  constructor(props) {
    console.log('formatData', props);
    super(props); // JE sais pas trop à quoi ça sert
    this.state = {
      activity: props.USER_ACTIVITY,
      averageSession: props.USER_AVERAGE_SESSIONS,
      mainData: props.USER_MAIN_DATA,
      performance: props.USER_PERFORMANCE,
    }; // etat de notre interface

    console.log('encore un truc', this.state.averageSession);
  }

  getDataForBarcharts(id) {
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

  getDataForLineChart(id) {
    //console.log('id dans getData', id);
    //console.log('state average dans getData', this.state.averageSession);
    const filteredData2 = this.state.averageSession.filter(
      (element) => element.userId == id
    );
    //console.log('filtration', filteredData2);
    return filteredData2[0].sessions;
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
    console.log('mainDataFilteredRestructured', mainDataFilteredRestructured);

    // return filteredData[0].keyData;
    return mainDataFilteredRestructured;
  }

  render() {
    return <div></div>;
  }
}

export default FormatData;
