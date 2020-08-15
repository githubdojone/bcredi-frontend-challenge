import React from "react";
import { InputWrapper, Label, ErrorMessage } from "./styles";
import MaskedInput from "react-text-mask";

export default function Input(props) {
  const { mask, error, id, label } = props;

  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      {mask ? <MaskedInput {...props} /> : <input {...props} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
}
