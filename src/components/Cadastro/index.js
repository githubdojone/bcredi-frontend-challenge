import React from "react";

import { Formulario, TitleWraper, Title, Subtitle } from "./styles";

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
    </Formulario>
  );
}
