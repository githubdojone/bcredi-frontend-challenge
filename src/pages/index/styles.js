import styled from "styled-components";

import bg from "../../images/bg.jpg";
import { mediaQuerieMax } from "../../utils/mediaQueries";

export const IndexWrapper = styled.div`
  display: flex;
`;
export const ImgWrapper = styled.div`
    
  ${mediaQuerieMax("md")`
    display: none;
  `};

  width: 45%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 0.5) 69%,
      rgba(0, 0, 0, 0.8) 96%
    ), url("${bg}");
`;

export const ContentWrapper = styled.div`
  flex: 1;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  height: calc(100% - 56px);
  display: grid;
  place-items: center;
  padding-top: 38px;
  ${(props) =>
    mediaQuerieMax("md")(`
    
    padding-top: 84px;
  `)}
`;

export const BottomWrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: right;
  font-size: 16px;
  line-height: 1.5;
  ${(props) => (props.bold ? "font-weight: bold;" : "")}
`;

export const Citation = styled(Paragraph)`
  font-size: 20px;
  margin-bottom: 8px;
  max-width: 75%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 32px;

  ${(props) =>
    mediaQuerieMax("md")(`
    box-shadow: inset 0 -1px 0 0 ${props.theme.colors.lightGrey};
  `)}
`;

export const Logo = styled.img`
  width: 75px;
`;
