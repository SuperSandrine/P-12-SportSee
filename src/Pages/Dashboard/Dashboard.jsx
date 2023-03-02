import React from 'react';
import DataCalls from '../../Data/DataCalls';
import DATA from '../../../mockedData.js';
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
import { getMockedData } from '../../Data/GetData';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import FormatData from '../../Data/FormatData';
import AverageSession from '../../Components/AverageSession/AverageSession';
import WebPerformance from '../../Components/WebPerformance/WebPerformance';
import Score from '../../Components/Score/Score';
import DietCount from '../../Components/DietCount/DietCount';

const StyledMain = styled.main`
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

const Dashboard = () => {
  console.log('data 1', DATA);
  console.log('data 2', DATA.USER_MAIN_DATA[0].userInfos.firstName);
  const firstName = DATA.USER_MAIN_DATA[0].userInfos.firstName; // TODO: ça c'est pas dynamique

  // trouver un moyen dynamique à cette id
  const id = 12;

  // const filteredData = DATA.filter((array) => array.includes(id));
  // console.log('les data Filtrés', filteredData);

  const format = new FormatData(DATA);
  console.log('instanciation', format);
  const dailyActivitiesData = format.getDataForBarcharts(id);
  console.log('methode1', dailyActivitiesData);

  const averageSessionData = format.getDataForLineChart(id);
  console.log('methode2', averageSessionData);

  const webPerformanceData = format.getDataForRadarChart(id);
  console.log('methode3', webPerformanceData);

  const scoreData = 12;

  const dietCountData = format.getDataForCards(id);
  console.log('methode5', dietCountData);

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
              <Score />
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
