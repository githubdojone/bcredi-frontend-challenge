import styled from "styled-components";

import { mediaQuerieMax, mediaQuerieMin } from "../../utils/mediaQueries";

export const Formulario = styled.form`
  max-width: 320px;
  display: grid;
  grid-gap: 35px;
  text-align: center;

  & > button {
    grid-area: button;
  }

  ${mediaQuerieMax("md")`
    text-align: left;
    grid-template-areas:
        "title"
        "email"
        "cpf"
        "birth"
        "password"
        "button";
    grid-template-columns: repeat(1, 1fr);
  `};

  ${mediaQuerieMin("md")`
    grid-template-areas:
        "title title"
        "email email"
        "cpf birth"
        "password password"
        "button button";
    grid-template-columns: repeat(2, 1fr);
  `};
`;

export const TitleWraper = styled.div`
  grid-area: title;
`;

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
