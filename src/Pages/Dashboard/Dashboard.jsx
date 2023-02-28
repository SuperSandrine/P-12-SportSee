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
  padding-left: 248px;
  padding-top: 68px;
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
    display: flex;
    column-gap: 32px;
    article {
      display: flex;
      flex-direction: column;
      gap: 30px;
      section {
        display: flex;
        gap: 30px;
      }
    }
    aside {
      // changer l'endroit où est mis en page l'aside
      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const Dashboard = () => {
  console.log('data 1', DATA);
  console.log('data 2', DATA.USER_MAIN_DATA[0].userInfos.firstName);
  const firstName = DATA.USER_MAIN_DATA[0].userInfos.firstName;

  // trouver un moyen dynamique à cette id
  const id = 12;

  // const filteredData = DATA.filter((array) => array.includes(id));
  // console.log('les data Filtrés', filteredData);

  const test1 = new FormatData(DATA);
  console.log('instanciation', test1);
  const dailyActivitiesData = test1.getDataForBarcharts(id);
  console.log('methode1', dailyActivitiesData);

  const averageSessionData = test1.getDataForLineChart(id);
  console.log('methode2', averageSessionData);

  const webPerformanceData = test1.getDataForRadarChart(id);
  console.log('methode3', webPerformanceData);

  const scoreData = 12;

  const dietCountData = test1.getDataForCards(id);
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
          <article>
            <DailyActivities data={dailyActivitiesData} />
            <section>
              <AverageSession data={averageSessionData} />
              <WebPerformance data={webPerformanceData} />
              <Score />
            </section>
          </article>
          <aside>
            <DietCount data={dietCountData}></DietCount>
          </aside>
        </div>
        <DataCalls name="Charlie" />
      </StyledMain>
    </div>
  );
};

export default Dashboard;
