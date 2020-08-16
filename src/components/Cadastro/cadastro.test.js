import React from "react";
import { fireEvent, screen, wait } from "@testing-library/react";

import Cadastro from ".";
import { customProviderRender } from "../../setupTests";

test("Component should render page", () => {
  const { queryByText, queryByLabelText } = customProviderRender(<Cadastro />);

  expect(queryByText("Criar meu cadastro")).toBeInTheDocument();
  expect(queryByText(/Para acompanhar sua contratação de/)).toBeInTheDocument();

  expect(queryByLabelText(/E-mail/)).toBeInTheDocument();
  expect(queryByLabelText(/CPF/)).toBeInTheDocument();
  expect(queryByLabelText(/Data de nascimento/)).toBeInTheDocument();
  expect(queryByLabelText(/Senha/)).toBeInTheDocument();
  expect(queryByText(/Li e estou de acordo com/)).toBeInTheDocument();
  expect(queryByText(/Cadastrar/)).toBeInTheDocument();
});

test("Component should validate email", async () => {
  customProviderRender(<Cadastro />);

  let email = screen.queryByLabelText(/E-mail/);

  await wait(() => {
    fireEvent.focus(email, { target: { value: "" } });
    fireEvent.blur(email, { target: { value: "" } });
  });

  screen.queryByText(/O campo e-mail é obrigaório/);

  await wait(() => {
    fireEvent.focus(email, { target: { value: "oi@" } });
    fireEvent.blur(email, { target: { value: "oi@" } });
  });

  screen.queryByText(/E-mail inválido/);

  await wait(() => {
    fireEvent.focus(email, { target: { value: "oi@oi.com" } });
    fireEvent.blur(email, { target: { value: "oi@oi.com" } });
  });

  expect(screen.queryByText(/E-mail inválido/)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/O campo e-mail é obrigaório/)
  ).not.toBeInTheDocument();
});

test("Component should validate CPF", async () => {
  customProviderRender(<Cadastro />);

  let cpf = screen.queryByLabelText(/CPF/);

  await wait(() => {
    fireEvent.focus(cpf, { target: { value: "" } });
    fireEvent.blur(cpf, { target: { value: "" } });
  });

  screen.queryByText(/O campo CPF é obrigaório/);

  await wait(() => {
    fireEvent.focus(cpf, { target: { value: "000" } });
    fireEvent.blur(cpf, { target: { value: "000" } });
  });

  screen.queryByText(/CPF inválido/);

  await wait(() => {
    fireEvent.focus(cpf, { target: { value: "641.540.080-05" } });
    fireEvent.blur(cpf, { target: { value: "641.540.080-05" } });
  });

  expect(screen.queryByText(/CPF inválido/)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/O campo CPF é obrigaório/)
  ).not.toBeInTheDocument();
});

test("Component should validate birthdate", async () => {
  customProviderRender(<Cadastro />);

  let birth = screen.queryByLabelText(/Data de nascimento/);

  await wait(() => {
    fireEvent.focus(birth, { target: { value: "" } });
    fireEvent.blur(birth, { target: { value: "" } });
  });

  screen.queryByText(/O campo de nascimento é obrigaório/);

  await wait(() => {
    fireEvent.focus(birth, { target: { value: "30/50/1000" } });
    fireEvent.blur(birth, { target: { value: "30/50/1000" } });
  });

  screen.queryByText(/Data inválida/);

  await wait(() => {
    fireEvent.focus(birth, { target: { value: "10/10/1996" } });
    fireEvent.blur(birth, { target: { value: "10/10/1996" } });
  });

  expect(screen.queryByText(/Data inválida/)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/O campo de nascimento é obrigaório/)
  ).not.toBeInTheDocument();
});

test("Component should validate password", async () => {
  customProviderRender(<Cadastro />);

  let password = screen.queryByLabelText(/Senha/);

  await wait(() => {
    fireEvent.focus(password, { target: { value: "" } });
    fireEvent.blur(password, { target: { value: "" } });
  });

  screen.queryByText(/O campo senha é obrigaório/);

  await wait(() => {
    fireEvent.focus(password, { target: { value: "1234" } });
    fireEvent.blur(password, { target: { value: "1234" } });
  });

  screen.queryByText(/Senha inválida/);

  await wait(() => {
    fireEvent.focus(password, { target: { value: "12345678" } });
    fireEvent.blur(password, { target: { value: "12345678" } });
  });

  expect(
    screen.queryByText(/O campo senha é obrigaório/)
  ).not.toBeInTheDocument();
  expect(screen.queryByText(/Senha inválida/)).not.toBeInTheDocument();
});

test("Component should be clickable when valid", async () => {
  const { queryByLabelText, queryByTestId, queryByText } = customProviderRender(
    <Cadastro />
  );
  let email = queryByLabelText(/E-mail/);
  let cpf = queryByLabelText(/CPF/);
  let birth = queryByLabelText(/Data de nascimento/);
  let password = queryByLabelText(/Senha/);
  let checkbox = queryByTestId("checkbox-terms");
  let button = queryByText("Cadastrar");

  await wait(() => {
    fireEvent.change(email, { target: { value: "oi@oi.com" } });
    fireEvent.blur(email, { target: { value: "oi@oi.com" } });
  });
  await wait(() => {
    fireEvent.change(cpf, { target: { value: "641.540.080-05" } });
    fireEvent.blur(cpf, { target: { value: "641.540.080-05" } });
  });
  await wait(() => {
    fireEvent.change(birth, { target: { value: "10/10/1996" } });
    fireEvent.blur(birth, { target: { value: "10/10/1996" } });
  });
  await wait(() => {
    fireEvent.change(password, { target: { value: "12345678" } });
    fireEvent.blur(password, { target: { value: "12345678" } });
  });
  await wait(() => {
    fireEvent.click(checkbox);
  });

  expect(button).not.toHaveAttribute("disabled");
});
