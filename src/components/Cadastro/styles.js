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
        "terms"
        "button"
        "footer";
    grid-template-columns: repeat(1, 1fr);
    & > button {
    margin: 5px 0 46px 0;
  }
  `};

  ${mediaQuerieMin("md")`
    grid-template-areas:
        "title title"
        "email email"
        "cpf birth"
        "password password"
        "terms terms"
        "button button"
        "footer footer";
    grid-template-columns: repeat(2, 1fr);
    & > button {
    margin: 12px 0 53px 0;;
  }
  `};
`;

export const TitleWraper = styled.div`
  grid-area: title;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${(props) => props.theme.colors.darkGrey};
`;

export const LabelCheckbox = styled.div`
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  flex: 1;
  color: ${(props) => props.theme.colors.mediumGrey};
  & > a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

export const Footer = styled.div`
  grid-area: footer;
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey};
  padding: 16px;
  font-size: 14px;
  line-height: 1.29;
  text-align: center;
  margin-bottom: 24px;
  color: ${(props) => props.theme.colors.darkGrey};

  & > a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;
