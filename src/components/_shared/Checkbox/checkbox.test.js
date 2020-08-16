import React from "react";
import { fireEvent, screen, wait } from "@testing-library/react";

import Checkbox from ".";
import lightTheme from "../../../themes/light";
import { customProviderRender } from "../../../setupTests";

const text = "Some Text";
const id = "id";
const change = jest.fn();

test("Component should render with label", () => {
  customProviderRender(<Checkbox label={text} id="id" />);

  expect(screen.queryByText(text)).toBeInTheDocument();
});

test("Component should toggle change value when clicked", async () => {
  customProviderRender(<Checkbox label={text} id={id} onChange={change} />);

  const elmt = screen.queryByText(text);

  await wait(() => {
    fireEvent.click(elmt);
  });

  expect(change).toHaveBeenCalled();
});

test("Component should be primary color when checked", async () => {
  customProviderRender(
    <Checkbox label={text} id={id} checked={true} onChange={change} />
  );

  expect(screen.queryByTestId("checkbox-span")).toHaveStyle(
    `background-color: ${lightTheme.colors.primary}`
  );
});
