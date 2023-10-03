import styled from "styled-components";

export const LoadingContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background:  ${(props) => props.theme.colors.backgroundPrimary};
`;

export const LoadingImg = styled.img`
    width: 30%;
    height: 30%;
    max-width: 200px;
    max-height: 200px;
    object-fit: contain;
`;


