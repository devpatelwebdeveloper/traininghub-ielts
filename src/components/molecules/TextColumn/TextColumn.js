import React from "react";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import styled from "styled-components";
import Styles from "../../../styles/Styles";

const StyledCol = styled.div`
  ul {
    font-family: ${Styles.FontFamily.Paragraph};
  }
`;

export default function TextColumn({ text, title, subtitle, list }) {
  return (
    <>
      <StyledCol>
        {title ? <BaseTitle title={title} size="H5" /> : null}
        {subtitle ? <BaseTitle title={subtitle} size="H6" /> : null}
        {text ? <Paragraph>{text}</Paragraph> : null}
        {list ? list : null}
      </StyledCol>
    </>
  );
}
