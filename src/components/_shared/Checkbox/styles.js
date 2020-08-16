import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 3px;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

export const Span = styled.span`
  margin-right: 12px;
  height: 24px;
  width: 24px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 9px;
    top: 3.5px;
    width: 3px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  ${(props) =>
    props.checked &&
    `
    background-color: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};

    &:after {
      display: block;
    }
  `}
`;
