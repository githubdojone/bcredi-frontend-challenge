import React from "react";
import { fireEvent, screen, wait } from "@testing-library/react";

import Cadastro from ".";
import { customProviderRender } from "../../setupTests";

test("Component should render page", () => {
  customProviderRender(<Cadastro />);

  screen.queryByText("Criar meu cadastro");
  screen.queryByText(/Para acompanhar sua contratação de/);
  screen.queryByText(/Obtive crédito para capital de giro./);
  screen.queryByText(/Camila Bragança./);
  screen.queryByText(/Sideral Tecnologia./);
  screen.queryByText(/Já fiz meu cadastro./);

  screen.queryByLabelText(/E-mail/);
  screen.queryByLabelText(/CPF/);
  screen.queryByLabelText(/Data de nascimento/);
  screen.queryByLabelText(/Senha/);
});
