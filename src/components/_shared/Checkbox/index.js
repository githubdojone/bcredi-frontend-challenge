import React from "react";
import { Label, Span } from "./styles";

export default function Input(props) {
  const { error, label, style, ...rest } = props;

  return (
    <Label style={style}>
      <Span checked={props.checked} />
      {label}
      <input type="checkbox" {...rest} />
    </Label>
  );
}
