import React from "react";
import styled, { css } from "styled-components";
import Navigation from "../../organisms/Navigation/Navigation";
import Footer from "../../organisms/Footer/Footer";
import ScrollToTop from "../../atoms/ScrollToTop/ScrollToTop";

const StyledLayout = styled.div`
  @media print {
    display: none;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      <Navigation />
      {props.children}
      <ScrollToTop />
      <Footer />
    </StyledLayout>
  );
};
export default Layout;
