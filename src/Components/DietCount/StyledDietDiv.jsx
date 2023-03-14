import styled from 'styled-components';

export const StyledDietDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  figure {
    display: flex;
    max-width: 20vw;
    background-color: #fbfbfb;
    padding: 3vh;
    border-radius: 5px;
    img {
      height: 5.87vh;
    }
    article {
      padding-left: 1.67vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-weight: 700;
        font-size: 1.95vh;
        line-height: 2.34vh;
      }
      h3 {
        font-size: 1.37vh;
        color: #74798c;
        line-height: 2.43vh;
      }
    }
  }
`;
