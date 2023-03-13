import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import DATA from '../../../mockedData.js';
import { useFetch } from '../../Data/GetData.jsx';
import FormatData from '../../Data/FormatData';

import Navbar from '../../Components/Navbar/Navbar';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import AverageSession from '../../Components/AverageSession/AverageSession';
import WebPerformance from '../../Components/WebPerformance/WebPerformance';
import Score from '../../Components/Score/Score';
import DietCount from '../../Components/DietCount/DietCount';

import { StyledMain } from './StyledMain';

// dashboard récupère le paramètre et la donnée mockée
// ensuite affichage conditionnelle
// TODO : sortir les fonction dans d'autres fichier pour n'avoir que l'affichage ?
const Dashboard = (props) => {
  const paramsId = useParams();
  const userId = paramsId.id;
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

    return (
      <div>
        <Navbar />
        <StyledMain>
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
        </StyledMain>
      </div>
    );
  } else {
    const [
      mainData,
      activityData,
      averageSessionsData,
      performanceData,
      error,
      loading,
    ] = useFetch(userId);
    console.log('maindata dans dash', mainData);

    const azerty = new Object();
    azerty.USER_MAIN_DATA = mainData;
    azerty.USER_ACTIVITY = activityData;
    azerty.USER_AVERAGE_SESSIONS = averageSessionsData;
    azerty.USER_PERFORMANCE = performanceData;

    const format = new FormatData(azerty);
    if (loading) {
      return <p>En chargement, patienter quelques instants</p>;
    } else {
      return (
        <div>
          <Navbar />
          {loading && <p>Loading ...</p>}
          {error ? (
            <p style={{ marginLeft: '150px' }}>
              Something went wrong, <i>{error.statusText || error.message}</i>
            </p>
          ) : (
            <StyledMain>
              <h1>
                Bonjour{' '}
                <span>
                  {mainData &&
                    mainData.data &&
                    mainData.data.id &&
                    format.getFirstNameFromData()}
                </span>
              </h1>
              <p className="welcomeSentence">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
              </p>
              <div className="mainGraphs">
                <article className="mainGraphsBoxes">
                  <DailyActivities
                    data={
                      activityData &&
                      activityData.data &&
                      activityData.data.userId &&
                      format.getDataForBarcharts()
                    }
                  />
                  <section className="mainGraphsBoxesSection">
                    <AverageSession
                      data={
                        averageSessionsData &&
                        averageSessionsData.data &&
                        averageSessionsData.data.userId &&
                        format.getDataForLineChart()
                      }
                    />
                    <WebPerformance
                      data={
                        // loading ? (
                        //   <p>Loading ...</p>
                        // ) : (

                        performanceData &&
                        performanceData.data &&
                        performanceData.data.userId &&
                        format.getDataForRadarChart()
                        // console.log(
                        //   'performanceData',
                        //   performanceData.data.data[0]
                        //)
                        //)
                      }
                    />
                    {/* FRANCOIS: étrange, j'ai rajouté le loading ici sinon même avec la vérification de la data, il y avait un niveau de data pas suffisant pour permettre au composant de fonctionner (surement parce que je divise la data au niveau du compasant et non au niveau du get) 
                  L'erreur path vient d'ici
                  L'erreur path apparait avant que la donnée soit chargée, une fois chargée, pas de roblème.
                  Comment obliger se composant à attendre la data avant de travailler, pourquoi ce composant travaille en avance par rapport au autres?*/}
                    <Score
                      data={
                        mainData &&
                        mainData.data &&
                        mainData.data.id &&
                        format.getDataForRadialChart()
                      }
                    />
                  </section>
                </article>
                <aside>
                  <DietCount
                    data={
                      mainData &&
                      mainData.data &&
                      mainData.data.id &&
                      format.getDataForCards()
                    }
                  ></DietCount>
                </aside>
              </div>
            </StyledMain>
          )}
        </div>
      );
    }
  }
};

Dashboard.propTypes = {
  mocked: PropTypes.bool,
};

export default Dashboard;
