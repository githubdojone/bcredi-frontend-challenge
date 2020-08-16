import React from "react";

import Cadastro from "../../components/Cadastro";
import Notification from "../../components/_shared/Notification";
import logo from "../../images/logo.svg";
import { useAppContext } from "../../contexts/AppContext";
import bg from "../../images/bg.jpg";

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
  const {
    state: { notification },
  } = useAppContext();

  return (
    <IndexWrapper>
      <ImgWrapper bg={bg}>
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
        {Object.keys(notification).length > 0 && (
          <Notification {...notification} />
        )}
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
