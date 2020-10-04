import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavigationInternal from "./NavigationDropdown";
import { TopNavigation } from "../../../contents/Navigation/Navigation";

const StyledNav = styled(Navbar)`
  background-color: ${Styles.Colors.BaseWhite};
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  .logo {
    height: 40px;
  }

  ${Styles.ScreenSizes.small`
   
    .logo{
        width:200px;
        height:auto;
    }
  `}
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    border-radius: 0px !important;
    border: none !important;

    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
    ${Styles.ScreenSizes.small`
    box-shadow: none;
  `}
  }
  dropdown-item {
    padding-bottom: 8px;
  }
  .row {
    margin: 0px !important;
  }
`;

export default function Navi() {
  return (
    <>
      <StyledNav expand="lg" sticky="top">
        <BaseLink
          href="https://www.traininghub.io/"
          composedClassName="nav-link"
          external>
          <img
            src="https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/logo_TrainingHubIELTS.png"
            className="logo"
            alt="TrainingHub.io IELTS"
          />
        </BaseLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {TopNavigation.map((navItem) => {
              if (navItem.Dropdown) {
                return (
                  <StyledNavDropdown
                    title={navItem.DisplayText}
                    id="nav-dropdown">
                    {navItem.Subnav.map((sub) => {
                      return (
                        <NavDropdown.Item>
                          <BaseLink
                            href={sub.Link}
                            composedClassName="nav-link">
                            {sub.DisplayText}
                          </BaseLink>
                        </NavDropdown.Item>
                      );
                    })}
                  </StyledNavDropdown>
                );
              }
              return (
                <BaseLink
                  href={navItem.Link}
                  composedClassName="nav-link"
                  external={navItem.external}>
                  {navItem.DisplayText}
                </BaseLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
    </>
  );
}
