import React, { useEffect } from "react";

import Input from "../_shared/Input";
import Checkbox from "../_shared/Checkbox";
import Button from "../_shared/Button";
import { fields } from "./validation";
import { useForm } from "../../hooks/form";

import {
  Formulario,
  TitleWraper,
  Title,
  Subtitle,
  LabelCheckbox,
  Footer,
} from "./styles";

const email = "email",
  cpf = "cpf",
  birth = "birth",
  password = "password",
  terms = "terms";

const customLabel = (
  <LabelCheckbox>
    Li e estou de acordo com a <a href="!#">Política de Privacidade</a> e a{" "}
    <a href="!#">Política de Uso de Informações</a>.
  </LabelCheckbox>
);

export default function () {
  const submitForm = () => {};

  const {
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
    handleInputBlur,
    errors,
    inputs,
  } = useForm(submitForm, fields);

  const inputEmail = {
    id: email,
    label: "E-mail",
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[email] || "",
    error: errors[email],
    style: { gridArea: email },
  };

  const inputCPF = {
    id: cpf,
    label: "CPF",
    mask: [
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      ".",
      /\d/,
      /\d/,
      /\d/,
      "-",
      /\d/,
      /\d/,
    ],
    guide: false,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[cpf] || "",
    error: errors[cpf],
    style: { gridArea: cpf },
  };

  const inputBirth = {
    id: birth,
    label: "Data de nascimento",
    mask: [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/],
    guide: false,
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[birth] || "",
    error: errors[birth],
    style: { gridArea: birth },
  };

  const inputPassword = {
    id: password,
    label: "Senha",
    onChange: handleInputChange,
    onBlur: handleInputBlur,
    value: inputs[password] || "",
    error: errors[password],
    style: { gridArea: password },
  };

  const inputTerms = {
    id: terms,
    label: customLabel,
    onChange: handleCheckboxChange,
    checked: inputs[terms] || false,
    style: { gridArea: terms },
  };

  const handleBtnDisabled = () => {
    return !(
      inputs[email] &&
      inputs[cpf] &&
      inputs[birth] &&
      inputs[password] &&
      inputs[terms] &&
      !errors[email] &&
      !errors[cpf] &&
      !errors[birth] &&
      !errors[password]
    );
  };

  return (
    <Formulario onSubmit={handleSubmit}>
      <TitleWraper>
        <Title>Criar meu cadastro</Title>
        <Subtitle>
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e
          CPF.
        </Subtitle>
      </TitleWraper>
      <Input {...inputEmail} />
      <Input {...inputCPF} />
      <Input {...inputBirth} />
      <Input {...inputPassword} />
      <Checkbox {...inputTerms} />
      <Button type="submit" disabled={handleBtnDisabled()}>
        Cadastrar
      </Button>
      <Footer>
        Ja fiz meu cadastro. <a href="!#">Entrar agora.</a>
      </Footer>
    </Formulario>
  );
}
