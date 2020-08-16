import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;

  & > input {
    background-color: #fff;
    height: 48px;
    padding-left: 14px;
    width: 100%;
    font-size: 16px;
    transition: all 200ms;
    border-radius: 3px;
    border: 1px solid
      ${(props) => {
        if (props.error) return props.theme.colors.warning;
        return props.theme.colors.lightGrey;
      }};
    color: ${(props) => props.theme.colors.text};
  }

  & > input::placeholder {
    color: ${(props) => props.theme.colors.mediumGrey};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  width: 100%;
  text-align: left;
  line-height: 1.29;
  margin-bottom: 7px;
  color: ${(props) => props.theme.colors.darkGrey};
`;

export const ErrorMessage = styled.span`
  position: absolute;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  top: calc(100% + 5px);
  left: 3px;
  color: ${(props) => props.theme.colors.warning};
`;

export const ButtonToggleType = styled.button`
  position: absolute;
  right: 16px;
  top: calc(50% + 25px);
  border: none;
  cursor: pointer;
  background-color: transparent;
  transform: translateY(calc(50% - 25px));
  ${(props) => props.toggled && `opacity: 0.4`}
`;

export const IconEye = styled.img``;
