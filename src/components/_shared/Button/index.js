import React from "react";

import { Button } from "./styles";

export default function ({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
}
