import React, { useState } from "react";
import MaskedInput from "react-text-mask";

import icon from "../../../images/eye.svg";

import { InputWrapper, Label, ErrorMessage, ButtonToggleType } from "./styles";

export default function Input(props) {
  const [cfgType, setType] = useState(props.type);

  const { error, label, style, showButtonPassword, type, ...rest } = props;

  const handleToggleVisibility = () => {
    if (cfgType === type) {
      setType("text");
      return;
    }
    setType(type);
  };

  return (
    <InputWrapper style={style}>
      <Label htmlFor={rest.id}>{label}</Label>
      {rest.mask ? (
        <MaskedInput {...rest} type={cfgType} />
      ) : (
        <input {...rest} type={cfgType} />
      )}
      {type === "password" && showButtonPassword && (
        <ButtonToggleType
          onClick={handleToggleVisibility}
          toggled={type !== cfgType}
        >
          <img src={icon} alt="Icone para tornar visivel campo de senha" />
        </ButtonToggleType>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
