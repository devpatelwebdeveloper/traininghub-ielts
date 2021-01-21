import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Button from "../../molecules/Button/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavigationInternal from "./NavigationDropdown";
import { TopNavigation } from "../../../contents/Navigation/Navigation";
import { graphql, useStaticQuery } from "gatsby";
import Logo from "../../../images/Logo.png";
import browser from "../../../utilities/window";

const StyledNav = styled(Navbar)`
  background-color: ${Styles.Colors.BaseWhite};
  align-items: center;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  .logo {
    height: 100px;
  }
  .navbar-nav {
    align-items: flex-end;
  }
  ${Styles.ScreenSizes.small`
   
    .logo{
        width:50px;
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
    &.show {
      --bs-position: end;
      right: 0;
      left: auto;
    }
  }
  .dropdown-item {
    padding-bottom: 8px;
    text-align: end;
  }
  .row {
    margin: 0px !important;
  }
`;
export default function Navi() {
  const resources = useStaticQuery(graphql`
    query {
      allContentfulResources(sort: { fields: [order], order: ASC }) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledNav expand="lg" sticky="top">
        <BaseLink href="/" composedClassName="nav-link">
          <img src={Logo} className="logo" alt="TrainingHub.io IELTS" />
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
            <StyledNavDropdown title="Resources">
              {resources.allContentfulResources.edges.map((resource) => {
                return (
                  <>
                    <NavDropdown.Item>
                      <BaseLink
                        href={`/resources/${resource.node.slug}`}
                        composedClassName="nav-link">
                        {resource.node.title}
                      </BaseLink>
                    </NavDropdown.Item>
                  </>
                );
              })}
            </StyledNavDropdown>
            <BaseLink href="/faqs" composedClassName="nav-link">
              FAQs
            </BaseLink>
            <BaseLink href="/contact-us" composedClassName="nav-link">
              Contact us
            </BaseLink>
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
    </>
  );
}
