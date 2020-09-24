import React from "react";
import TextColumn from "../../molecules/TextColumn/TextColumn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Section from "../Section/Section";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import styled from "styled-components";
import Styles from "../../../styles/Styles";

const ShadowRow = styled(Row)`
  border-radius: 0px 0px 12px 12px;
  overflow: hidden;
  box-shadow: 0px 15px 20px 0px rgba(46, 61, 73, 0.15);
`;

export default function TextRow({ title, contentCols, columns, shadow }) {
  const content = contentCols.map((col) => {
    return (
      <>
        <Col md={12 / columns}>
          <TextColumn {...col} />
        </Col>
      </>
    );
  });
  return (
    <>
      <Section marginTop="25px" marginBottom="25px" padding="50px">
        <Container>
          <BaseTitle title={title} size="H3" center underline />
          {shadow ? <ShadowRow>{content}</ShadowRow> : <Row>{content}</Row>}
        </Container>
      </Section>
    </>
  );
}
