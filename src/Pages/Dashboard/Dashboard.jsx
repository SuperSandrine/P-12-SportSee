import React from 'react';
import styled from 'styled-components';

import DataCalls from '../../Data/DataCalls';
import DATA from '../../../mockedData.js';
import { useFetch } from '../../Data/GetData.jsx';

import Navbar from '../../Components/Navbar/Navbar';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import FormatData from '../../Data/FormatData';
import AverageSession from '../../Components/AverageSession/AverageSession';
import WebPerformance from '../../Components/WebPerformance/WebPerformance';
import Score from '../../Components/Score/Score';
import DietCount from '../../Components/DietCount/DietCount';
import { useParams } from 'react-router-dom';

//import { test } from 'vitest';
//import { buildErrorMessage } from 'vite';
//import { getData } from '../../Data/GetData.jsx';
//import { useLoaderData } from 'react-router-dom';

//export async function loader() {
//const test = new
//const contacts = await getFirstNameFromData();
//return { contacts };
//}

// export async function loaderDesData() {
//   const desData = await getData();
//   return { desData };
// }

export const StyledMain = styled.main`
  padding-left: 15.5vw;
  padding-top: 6.4vh;
  h1 {
    font-size: 48px;
    span {
      color: red;
    }
  }
  .welcomeSentence {
    font-weight: 400;
    font-size: 18px;
    padding: 30px 0 70px 0;
  }
  .mainGraphs {
    // width: 82.78vw;
    display: flex;
    column-gap: 2.22vw;
    .mainGraphsBoxes {
      width: 57.99vw;
      display: flex;
      flex-direction: column;
      gap: 3.12vh;
      .mainGraphsBoxesSection {
        width: 57.99vw;
        display: flex;
        justify-content: space-between;
        gap: 2.22vw;
      }
    }
    aside {
      display: flex;
    }
  }
`;

// dashboard récupère le paramètre et la donnée mockée
// ensuite affichage conditionnelle
// TODO : sortir les fonction dans d'autres fichier pour n'avoir que l'affichage
const Dashboard = (props) => {
  const paramsId = useParams();
  const userId = paramsId.id;
  //const { magicHappens } = useLoaderData();
  //console.log('does magic really happens?', magicHappens);
  // console.log('contacts', contacts.lenght);

  //console.log('USER-ID from params', userId); // 12
  //console.log('dash props', props);
  let firstName,
    dailyActivitiesData,
    averageSessionData,
    webPerformanceData,
    dietCountData,
    scoreData;

  if (props.mocked === true) {
    //console.log("****C'est bien mocké !!! ****");
    //console.log('data mockée', DATA);
    const format = new FormatData(DATA);
    firstName = format.getFirstNameFromData(userId);

    //console.log('instanciation', format);
    dailyActivitiesData = format.getDataForBarcharts(userId);
    //console.log('methode1', dailyActivitiesData);

    averageSessionData = format.getDataForLineChart(userId);
    //console.log('methode2', averageSessionData);

    webPerformanceData = format.getDataForRadarChart(userId);
    //console.log('methode3', webPerformanceData);

    scoreData = format.getDataForRadialChart(userId);
    //console.log('méthode4', scoreData);

    dietCountData = format.getDataForCards(userId);
    //console.log('methode5', dietCountData);

    //return DATA, firstName;
  } else {
    console.log("____C'est pas mocké !!! ____");
    const [
      mainData,
      activityData,
      averageSessionsData,
      performanceData,
      error,
      loading,
    ] = useFetch(userId);

    //console.log('********************', useFetch(userId));
    console.log('le fecth a t-il fonctionné avec activityData', activityData);
    //const retrouverlesdata = async () => {
    const azerty = new Object();
    azerty.USER_MAIN_DATA = mainData;
    azerty.USER_ACTIVITY = activityData;
    azerty.USER_AVERAGE_SESSIONS = averageSessionsData;
    azerty.USER_PERFORMANCE = performanceData;
    console.log('est-ce que j"ai mon nouvel objet avec ttes les data?', azerty);

    const format = new FormatData(azerty);

    console.log(
      'est)ce que il se passe qqchose quand jappelle la classe format',
      format
    );
    //console.log('le format de length', format.props.USER_ACTIVITY.length === 0);
    //console.log(format ? 'yes' : 'no');

    // if (format.props.USER_ACTIVITY.length === 0) {
    //   <h1>Loading ...</h1>;
    // } else {
    //firstName = format.getFirstNameFromData();
    //console.log("est-ce que j'ai un prénom", firstName);

    // const jetravaille = async () => {
    //   const [
    //     mainData,
    //     activityData,
    //     averageSessionData,
    //     performanceData,
    //     error,
    //     loading,
    //   ] = await useFetch(userId);

    //   console.log('le fecth a t-il fonctionné avec activityData', activityData);
    //   //const retrouverlesdata = async () => {
    //   const azerty = new Object();
    //   azerty.USER_MAIN_DATA = mainData;
    //   azerty.USER_ACTIVITY = activityData;
    //   azerty.USER_AVERAGE_SESSIONS = averageSessionData;
    //   azerty.USER_PERFORMANCE = performanceData;
    //   console.log(
    //     'est-ce que j"ai mon nouvel objet avec ttes les data?',
    //     azerty
    //   );

    //   const format = new FormatData(azerty);
    //   console.log(
    //     'est)ce que il se passe qqchose quand jappelle la classe format',
    //     format
    //   );
    //   firstName = format.getFirstNameFromData();
    //   console.log("est-ce que j'ai un prénom", firstName);
    // };
    // jetravaille();

    //let prénom = retrouverlesdata();
    //console.log('prénom qui es tu', prénom);

    //const newDat = useFetch(userId);
    //console.log('NewDat', newDat); //renvoit un tableau de 6 arrays mais vide

    // ON DESTRUCTURE ET ON RECRÉE UN TABLEAU LES DATA POUR AVOI LE MÊME QUE LE MOCKED

    // avec ça j'importe qu'un élement de la data
    // est-ce que je dois écrire une autre fonction pour la traiter

    // const newData = activityData;
    // console.log('NEW DATA', newData);
    //const format = new FormatData(azerty);

    //const format = new FormatData(azerty);
    //console.log('format pas mocké', format); // ya les props mais ya pas les states?
    //firstName = 'blue';
    //firstName = format.getFirstNameFromData(userId);
    //console.log('firstname', firstName);

    console.log('françois,maindata', mainData);
    console.log('françois', azerty);
    console.log('françois loading', loading);

    return (
      <div>
        {loading && <p>Loading ...</p>}
        {error ? (
          <p>Something went wrong</p>
        ) : (
          <div>
            <p>ça marche !!!</p>
            <h3>
              Bonjour {userId}
              <span>
                {console.log('*******', mainData, mainData.data)}
                {console.log('*******2222222', azerty)}

                {mainData && mainData.data && mainData.data.id && (
                  <p>
                    {console.log(
                      'françois format cards',
                      format.getDataForCards()
                    )}
                  </p>
                )}
                {
                  //FRAN9OIS: quand j'appelle une méthode alors ça se plante quand les données ne sont pas chargées comment faire pour attendre que mes données soient chargées avant de les travailler?
                  // const format = new FormatData(azerty)
                  // format.getFirstNameFromData()
                  // firstName=format.getFirstNameFromData()
                  // firstName
                  // console.log(
                  //   'françois format linechart',
                  //   format.getDataForLineChart()
                  // )
                  // console.log(
                  //   'françois format linechart',
                  //   format.getDataForRadarChart()
                  // )
                  // console.log(
                  //   'françois format linechart',
                  //   format.getDataForRadialChart()
                  // )
                  // dietCountData = format.getDataForCards();
                  //               console.log(
                  //                 'françois format barchart',
                  //                 format.getDataForLineChart()
                  //               )
                }
              </span>
              <br />
              le barChart:
              {
                //format.getDataForBarcharts()
              }
              ;
            </h3>
          </div>
        )}
      </div>
    );
  }
  //   return (
  //     <div>
  //       {loading && <p>Loading ...</p>}
  //       {error ? (
  //         <p>Something went wrong</p>
  //       ) : (
  //         <div>
  //           <p>ça marche !!!</p>
  //           <h3>
  //             Bonjour {userId}
  //             <span>
  //               {
  //                 // const format = new FormatData(azerty)
  //                 format.getFirstNameFromData()
  //                 // firstName=format.getFirstNameFromData()
  //                 // firstName
  //               }
  //             </span>
  //             <br />
  //             le barChart:
  //             {
  //               //format.getDataForBarcharts()
  //             }
  //             ;
  //           </h3>
  //         </div>
  //       )}
  //     </div>
  //   );
  //   //patienter pour recevoir les data
  // }

  // comment afficher le dashboard à partir d'un mock et/ou d'un fetch
  // si

  // const [userData, error, loading] = useFetch('http://localhost:3000/user/18');
  // console.log('DATAAAAAAA', userData); // correspond à UserMainData[0]
  //console.log('Data comparaison acec data1', userData.data.score);//0.3
  // problème d'asynchrone,TODO: gérer le temps de chargement
  // if (userData) {
  //   console.log(
  //     'Data comparaison acec data1',
  //     userData.data.userInfos.firstName
  //   );
  // }

  //console.log('data 2', getData());
  //const data3 = getData();
  //console.log('data 3', data3);
  //console.log('data 1', DATA);
  //console.log('data 2', DATA.USER_MAIN_DATA[0].userInfos.firstName);
  //const firstName = DATA.USER_MAIN_DATA[0].userInfos.firstName; // TODO: ça c'est pas dynamique

  // trouver un moyen dynamique à cette id
  //const id = 12;

  // const filteredData = DATA.filter((array) => array.includes(id));
  // console.log('les data Filtrés', filteredData);

  // const format = new FormatData(DATA);
  // console.log('instanciation', format);
  // const dailyActivitiesData = format.getDataForBarcharts(userId);
  // console.log('methode1', dailyActivitiesData);

  // const averageSessionData = format.getDataForLineChart(userId);
  // console.log('methode2', averageSessionData);

  // const webPerformanceData = format.getDataForRadarChart(userId);
  // console.log('methode3', webPerformanceData);

  // const dietCountData = format.getDataForCards(userId);
  // console.log('methode5', dietCountData);

  return (
    <div>
      <Navbar />
      <StyledMain>
        {/* //{error && <p>Something went wrong</p>} */}
        <h1>
          Bonjour <span>{firstName}</span>
        </h1>
        <p className="welcomeSentence">
          Félicitations ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="mainGraphs">
          <article className="mainGraphsBoxes">
            <DailyActivities data={dailyActivitiesData} />
            <section className="mainGraphsBoxesSection">
              <AverageSession data={averageSessionData} />
              <WebPerformance data={webPerformanceData} />
              <Score data={scoreData} />
            </section>
          </article>
          <aside>
            <DietCount data={dietCountData}></DietCount>
          </aside>
        </div>
        <DataCalls />
      </StyledMain>
    </div>
  );
};

export default Dashboard;
