import React from "react";

import {
  IndexWrapper,
  ImgWrapper,
  FormWrapper,
  BottomWrapper,
  Paragraph,
  Citation,
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
      <FormWrapper>Direita</FormWrapper>
    </IndexWrapper>
  );
}
