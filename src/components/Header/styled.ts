import styled from "styled-components";

export const Header = styled.header`
    display: grid;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 10px;
    place-items: center;
    background: ${(props) => props.theme.colors.backgroundPrimary};
`;

export const Input = styled.input`
    background-color:  ${(props) => props.theme.colors.backgroundInput};
    padding: 10px 10px;
    border-radius: 5px;
    margin: 10px 10px;
    border: none;
    width: 80vw;
`;