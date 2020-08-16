import React from "react";
import { cleanup } from "@testing-library/react";

import Notification from ".";
import { customProviderRender } from "../../../setupTests";

afterEach(cleanup);

test("Component should mount with props", () => {
  const { queryByText } = customProviderRender(
    <Notification type="success" msg="Teste" />
  );

  expect(queryByText("Teste")).toBeInTheDocument();
});
