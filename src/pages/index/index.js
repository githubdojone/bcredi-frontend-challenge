import React from "react";

import Cadastro from "../../components/Cadastro";
import logo from "../../images/logo.svg";

import {
  IndexWrapper,
  ImgWrapper,
  ContentWrapper,
  FormWrapper,
  BottomWrapper,
  Paragraph,
  Citation,
  Header,
  Logo,
} from "./styles";

export default function () {
  return (
    <IndexWrapper>
      <ImgWrapper>
        <BottomWrapper>
          <Citation>
            "Obtive crédito para capital de giro. O processo foi bem sucedido e
            tudo que foi abordado, foi cumprido."
          </Citation>
          <Paragraph bold>Camila Bragança,</Paragraph>
          <Paragraph>Sideral Tecnologia</Paragraph>
        </BottomWrapper>
      </ImgWrapper>
      <ContentWrapper>
        <Header>
          <Logo src={logo} alt="Logo Bcredi" />
        </Header>
        <FormWrapper>
          <Cadastro />
        </FormWrapper>
      </ContentWrapper>
    </IndexWrapper>
  );
}
