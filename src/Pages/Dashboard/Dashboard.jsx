import React from 'react';
import PropTypes from 'prop-types';
import { StyledMain } from './StyledMain';
import { useParams } from 'react-router-dom';

import ProvideData from '../../Data/ProvideData';

import Navbar from '../../Components/Navbar/Navbar';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import AverageSession from '../../Components/AverageSession/AverageSession';
import WebPerformance from '../../Components/WebPerformance/WebPerformance';
import Score from '../../Components/Score/Score';
import DietCount from '../../Components/DietCount/DietCount';

/**
 * dasboard component displays various data in graphs components
 * @param {object} props
 * @param {boolean} props.isMocked flag to indicate is mocked data should be used according the path choice (in a link in Home page)
 * @return {JSX.Element}
 */
const Dashboard = (props) => {
  const paramsId = useParams();
  const userId = paramsId.id;
  let firstName,
    dailyActivitiesData,
    averageSessionData,
    webPerformanceData,
    scoreData,
    dietCountData;

  const data = ProvideData(props, userId);

  firstName = data.firstName;
  dailyActivitiesData = data.dailyActivitiesData;
  averageSessionData = data.averageSessionData;
  webPerformanceData = data.webPerformanceData;
  scoreData = data.scoreData;
  dietCountData = data.dietCountData;
  if (!data.firstName) {
    return (
      <div>
        <Navbar />
        <StyledMain>
          <p> Les données sont en chargement, patientez quelques instants...</p>
        </StyledMain>
      </div>
    );
  } else {
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
  }
};
Dashboard.propTypes = {
  isMocked: PropTypes.bool.isRequired,
};

export default Dashboard;
