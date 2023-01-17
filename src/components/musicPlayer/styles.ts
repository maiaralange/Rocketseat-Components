import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 357.71px;
  height: 199.26px;
  background-color: #2a2141;
  border-radius: 9.6px;
`;

export const WhatsPlaying = styled.div`
  padding: 28.81px 28.81px 0;
  color: #e1e1e6;
  display: flex;

  img {
    width: 84.03px;
    height: 84.03px;
    border-radius: 6px;
  }

  div {
    padding-left: 28.81px;
    padding-top: 15.71px;
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 24px;
      line-height: 1.5rem;
      font-weight: 700;
    }

    h3 {
      padding-top: 9.6px;
      font-weight: 400;
      line-height: 19.21px;
      opacity: 67%;
    }
  }
`;

export const Player = styled.div`
  padding: 2.05rem 5.38rem 0;
  display: flex;
  flex-direction: row;
  gap: 3.545rem;
`;
