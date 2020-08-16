import React from "react";

import Cadastro from ".";
import { customProviderRender } from "../../setupTests";

test("Component should render page", () => {
  const { queryByText } = customProviderRender(<Cadastro />);

  expect(queryByText("Criar meu cadastro")).toBeInTheDocument();
  expect(queryByText(/Para acompanhar sua contratação de/)).toBeInTheDocument();
  expect(
    queryByText(/Obtive crédito para capital de giro/)
  ).toBeInTheDocument();
  expect(queryByText(/Camila Bragança/)).toBeInTheDocument();
  expect(queryByText(/Sideral Tecnologia/)).toBeInTheDocument();
  expect(queryByText(/Ja fiz meu cadastro/)).toBeInTheDocument();
});
