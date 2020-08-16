import React from "react";
import { Label, Span } from "./styles";

export default function Input(props) {
  const { error, label, style, ...rest } = props;

  return (
    <Label style={style} data-testid={`checkbox-${props.id}`}>
      <Span data-testid="checkbox-span" checked={props.checked} />
      {label}
      <input type="checkbox" {...rest} />
    </Label>
  );
}
