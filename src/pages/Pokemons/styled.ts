import styled from "styled-components";

export const Main = styled.main`
  padding: 10px;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  /* min-width: 100vw; */
  gap: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
