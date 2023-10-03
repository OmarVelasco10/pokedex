import styled from "styled-components";

export const Main = styled.main`
  padding: 10px;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  min-width: 100vw;
  gap: 10px;
`;
