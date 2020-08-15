import styled from "styled-components";

export const Formulario = styled.div`
  max-width: 320px;
  display: grid;
  grid-gap: 35px;
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    text-align: left;
  }
`;

export const TitleWraper = styled.div``;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.darkGrey};
`;
