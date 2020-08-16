import React, { useEffect, useState } from "react";

import { NotificationWrapper } from "./styles";

export default function ({ type, msg }) {
  const [translate, setTranslate] = useState("-100%");

  useEffect(() => {
    setTranslate("0");
    return () => {
      setTranslate("-100%");
    };
  }, []);

  return (
    <NotificationWrapper translate={translate} color={type}>
      {msg}
    </NotificationWrapper>
  );
}
