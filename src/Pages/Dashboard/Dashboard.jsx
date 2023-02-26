import React from 'react';
import DataCalls from '../../Data/DataCalls';
import DATA from '../../../mockedData.js';
import Navbar from '../../Components/Navbar/Navbar';
import styled from 'styled-components';
import { getMockedData } from '../../Data/GetData';
import DailyActivities from '../../Components/DailyActivities/DailyActivities.jsx';
import FormatData from '../../Data/FormatData';

const StyledMain = styled.main`
  padding-left: 248px;
  padding-top: 68px;
  h1 {
    font-size: 48px;
    span {
      color: red;
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
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

  return (
    <div>
      <Navbar />
      <StyledMain>
        <h1>
          Bonjour <span>{firstName}</span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        <DailyActivities data={dailyActivitiesData} />
        <DataCalls name="Charlie" />
      </StyledMain>
    </div>
  );
};

export default Dashboard;
