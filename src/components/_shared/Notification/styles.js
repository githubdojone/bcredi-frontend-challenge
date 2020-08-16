import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: absolute;
  top: 0;
  transform: translateY(${(props) => props.translate});
  background-color: ${(props) => props.theme.colors[props.color]};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 64px;
  width: 100%;
  transition: all 0.3s;
`;
