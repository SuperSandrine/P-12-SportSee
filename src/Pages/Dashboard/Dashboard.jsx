import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import DATA from '../../../mockedData.js';
import { useFetch } from '../../Data/useFetch.jsx';
import FormatData from '../../Data/FormatData';

import Navbar from '../../Components/Navbar/Navbar';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import AverageSession from '../../Components/AverageSession/AverageSession';
import WebPerformance from '../../Components/WebPerformance/WebPerformance';
import Score from '../../Components/Score/Score';
import DietCount from '../../Components/DietCount/DietCount';

import { StyledMain } from './StyledMain';

/**
 * Display components in the profile page through "isMocked" condition from props.
 * @param {boolean} props
 * @return {JSX.Element}
 */
const Dashboard = (props) => {
  //console.log('props', props);
  const paramsId = useParams();
  const userId = paramsId.id;

  if (props.isMocked === true) {
    const format = new FormatData(DATA);
    return (
      <div>
        <Navbar />
        <StyledMain>
          <h1>
            Bonjour <span>{format.getFirstNameFromData(userId)}</span>
          </h1>
          <p className="welcomeSentence">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="mainGraphs">
            <article className="mainGraphsBoxes">
              <DailyActivities data={format.getDataForBarcharts(userId)} />
              <section className="mainGraphsBoxesSection">
                <AverageSession data={format.getDataForLineChart(userId)} />
                <WebPerformance data={format.getDataForRadarChart(userId)} />
                <Score data={format.getDataForRadialChart(userId)} />
              </section>
            </article>
            <aside>
              <DietCount data={format.getDataForCards(userId)}></DietCount>
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
    //console.log('maindata dans dash', mainData);

    const allAPIDataObject = new Object();
    allAPIDataObject.USER_MAIN_DATA = mainData;
    allAPIDataObject.USER_ACTIVITY = activityData;
    allAPIDataObject.USER_AVERAGE_SESSIONS = averageSessionsData;
    allAPIDataObject.USER_PERFORMANCE = performanceData;

    const format = new FormatData(allAPIDataObject);
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
                        performanceData &&
                        performanceData.data &&
                        performanceData.data.userId &&
                        format.getDataForRadarChart()
                      }
                    />
                    {/* TODO = FRANCOIS: étrange, j'ai rajouté le loading ici sinon même avec la vérification de la data, il y avait un niveau de data pas suffisant pour permettre au composant de fonctionner (surement parce que je divise la data au niveau du compasant et non au niveau du get) 
                  L'erreur path vient d'ici
                  L'erreur path apparait avant que la donnée soit chargée, une fois chargée, pas de roblème.
                  Comment obliger se composant à attendre la data avant de travailler, pourquoi ce composant travaille en avance par rapport aux autres?*/}
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
  isMocked: PropTypes.bool,
};

export default Dashboard;
