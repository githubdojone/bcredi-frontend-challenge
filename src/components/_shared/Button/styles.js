import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  border: none;
  text-align: center;
  font-size: 18px;
  border-radius: 3px;
  height: 48px;
  line-height: 40px;
  transition: all 0.3s;
  cursor: pointer;
  padding: 0 15px;
  width: 100%;
  position: relative;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => {
    let styles = `background-color: ${props.theme.colors.primary};`;

    if (props.disabled) {
      styles += `
        cursor: default;
        pointer-events: none;
      `;
    }

    return styles;
  }}
`;

export const IconCage = styled.img`
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
`;
