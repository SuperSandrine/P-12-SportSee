import styled from 'styled-components';

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
