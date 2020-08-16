import React from "react";

import icon from "../../../images/cage.svg";

import { Button, IconCage } from "./styles";

export default function ({ children, ...rest }) {
  return (
    <Button {...rest}>
      {rest.disabled && <IconCage src={icon} alt="Cadeado no botão" />}
      {children}
    </Button>
  );
}
