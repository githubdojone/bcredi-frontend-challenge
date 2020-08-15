import styled from "styled-components";

import bg from "../../utils/images/bg.jpg";

export const IndexWrapper = styled.div`
  display: flex;
`;
export const ImgWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakPoints.md}) {
    display: none;
  }
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

export const FormWrapper = styled.div`
  flex: 1;
  height: 100vh;
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
