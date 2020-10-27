import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #222;
  text-align: center;
  padding: 170px 45px;
`;

export const Title = styled.h1`
font-family: 'Anton', sans-serif;
  color: white;
  max-width: 640px;
  font-size: 4rem;
  font-weight: 500;
  margin: auto;
text-transform:uppercase;
  @media (max-width: 600px) {
    font-size: 35px;
  }

  @media (min-width: 1449px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-style:italic;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;