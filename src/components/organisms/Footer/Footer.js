import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import { Courses } from "../../../contents/Courses";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";
import Logo from "../../../images/Logo.png";

const FooterStyle = styled.footer`
  background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  margin: none;
  overflow: hidden;
  bottom: 0;
  width: 100%;

  ul {
    font-family: ${Styles.FontFamily.Paragraph};
    list-style: none;
    padding: 0px;
  }
  p {
    font-size: ${Styles.FontSize.Small};
  }
  a {
    color: ${Styles.Colors.SiteFont};
    font-size: ${Styles.FontSize.Small};
    &:hover {
      color: ${Styles.Colors.BrandOrange};
    }
  }
  ${Styles.ScreenSizes.medium`
  position: inherit;
   `};
`;
const FooterMain = styled(Container)`
  margin: 20px auto;
`;
const AddressCol = styled(Col)`
  margin: 20px auto;
  p {
    margin: 20px auto;
  }
`;

const FooterLogo = styled.img`
  max-width: 100px;
`;

const FeaturedLinks = styled(Col)`
  margin: 20px auto;
`;

const CoursesLink = styled(Col)`
  margin: 20px auto;
`;
const FooterLegal = styled(Container)`
  margin: 20px auto;
  border-top: 1px solid ${Styles.Colors.BaseBorderGrey};
  padding-top: 10px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <FooterMain>
        <Row>
          <AddressCol md={10} sm={6}>
            <FooterLogo src={Logo} alt="TrainingHub.io" />
            <Paragraph>
              Language Academy thrives helping great minds to gain confidence in
              their career. We empower our students to succeed in this
              competitive age.
            </Paragraph>
          </AddressCol>
          {/* <FeaturedLinks md={2} sm={6}>
            <BaseTitle title="Company" size="H5" />
            <ul>
              <li>
                <BaseLink external href="https://www.traininghub.io/about-us">
                  About us
                </BaseLink>
              </li>
              <li>
                <BaseLink external href="https://www.traininghub.io/employers">
                  Employers
                </BaseLink>
              </li>
              <li>
                <BaseLink external href="https://www.traininghub.io/job-seeker">
                  Job Seeker
                </BaseLink>
              </li>
              <li>
                <BaseLink external href="https://www.traininghub.io/contact-us">
                  Contact us
                </BaseLink>
              </li>
            </ul>
          </FeaturedLinks> */}
          <FeaturedLinks md={2} sm={6}>
            <BaseTitle title="IELTS" size="H5" />
            <ul>
              <li>
                <BaseLink href="/ielts/listening">Listening</BaseLink>
              </li>
              <li>
                <BaseLink href="/ielts/speaking">Speaking</BaseLink>
              </li>
              <li>
                <BaseLink href="/ielts/writing">Writing</BaseLink>
              </li>
              <li>
                <BaseLink href="/ielts/reading">Reading</BaseLink>
              </li>
            </ul>
          </FeaturedLinks>
        </Row>
      </FooterMain>
      <FooterLegal>
        <Row>
          <Col md={8}>
            <Paragraph>
              {`All Content © Learning Academy ${new Date().getFullYear()}. 'Languageacademy.ca',
              Languageacademy.ca logo and 'We Deliver What We Promise' are
              trademarks of Languageacademy.ca All Rights Reserved.`}
            </Paragraph>
          </Col>
          <Col md={2}>
            <Paragraph>
              <BaseLink external href="https://www.traininghub.io/privacy">
                Privacy
              </BaseLink>
            </Paragraph>
          </Col>
          <Col md={2}>
            <a
              href="https://www.facebook.com/TrainingHubIELTS"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={facebookSquare} />
            </a>
            {/* <a
              href="https://twitter.com/TrainingHubCan"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={twitterSquare} />
            </a>
            <a
              href="https://www.linkedin.com/company/traininghubcan/"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={linkedinSquare} />
            </a> */}
          </Col>
        </Row>
      </FooterLegal>
    </FooterStyle>
  );
}
