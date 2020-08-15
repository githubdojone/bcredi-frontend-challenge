import React from "react";
import { InputWrapper, Label, ErrorMessage } from "./styles";
import MaskedInput from "react-text-mask";

export default function Input(props) {
  const { error, label, style, ...rest } = props;

  return (
    <InputWrapper style={style}>
      <Label htmlFor={rest.id}>{label}</Label>
      {rest.mask ? <MaskedInput {...rest} /> : <input {...rest} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
