import React from "react";

import { Formulario, TitleWraper, Title, Subtitle } from "./styles";
import Input from "../_shared/Input";

export default function () {
  return (
    <Formulario>
      <TitleWraper>
        <Title>Criar meu cadastro</Title>
        <Subtitle>
          Para acompanhar sua contratação de crédito você utilizará seu e-mail e
          CPF.
        </Subtitle>
      </TitleWraper>
      <Input label="batata" error="batata" id="batata" placeholder="batata" />
    </Formulario>
  );
}
