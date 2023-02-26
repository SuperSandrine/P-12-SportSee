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

    console.log('encore un truc', this.state.activity);
  }

  getDataForBarcharts(id) {
    console.log('id dans getData', id);
    console.log('state dans getData', this.state.activity);
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

  render() {
    return <div></div>;
  }
}

export default FormatData;
