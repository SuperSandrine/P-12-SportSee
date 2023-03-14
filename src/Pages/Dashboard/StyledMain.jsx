import styled from 'styled-components';

export const StyledMain = styled.main`
  padding-left: 15.5vw;
  padding-top: 6.4vh;
  h1 {
    font-size: 4.69vh;
    span {
      color: red;
    }
  }
  .welcomeSentence {
    font-weight: 400;
    font-size: 1.76vh;
    padding: 2.93vh 0 6.84vh 0;
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
