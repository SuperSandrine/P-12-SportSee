import styled from 'styled-components';

export const StyledDietDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  figure {
    display: flex;
    width: 17.92vw;
    background-color: #fbfbfb;
    padding: 2.22vw;
    border-radius: 5px;
    article {
      padding-left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
      }
      h3 {
        font-size: 14px;
        color: #74798c;
        line-height: 24px;
      }
    }
  }
`;
