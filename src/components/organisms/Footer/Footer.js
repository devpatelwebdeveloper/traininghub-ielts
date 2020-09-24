import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import { Courses } from "../../../contents/Courses";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";

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
    color: ${Styles.Colors.DefaultFont};
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
  max-width: 200px;
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
          <AddressCol md={4} sm={6}>
            <FooterLogo
              src="https://devashish-lms.s3.ca-central-1.amazonaws.com/logo_TrainingHub.png"
              alt="TrainingHub.io"
            />
            <Paragraph>
              TrainingHub thrives helping great minds to upgrade / change their
              career in field of IT. We empower our students to succeed in this
              digital age.
            </Paragraph>
          </AddressCol>
          <FeaturedLinks md={2} sm={6}>
            <BaseTitle title="Company" size="H5" />
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/employers">Employers</Link>
              </li>
              <li>
                <Link to="/job-seeker">Job Seeker</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </FeaturedLinks>
          <FeaturedLinks md={2} sm={6}>
            <BaseTitle title="IELTS" size="H5" />
            <ul>
              <li>
                <Link to="/ielts/listening">Listening</Link>
              </li>
              <li>
                <Link to="/ielts/speaking">Speaking</Link>
              </li>
              <li>
                <Link to="/ielts/writing">Writing</Link>
              </li>
              <li>
                <Link to="0/ielts/reading">Reading</Link>
              </li>
            </ul>
          </FeaturedLinks>
        </Row>
      </FooterMain>
      <FooterLegal>
        <Row>
          <Col md={8}>
            <Paragraph>
              {`All Content © TrainingHub.io ${new Date().getFullYear()}. 'TrainingHub.io',
              TrainingHub.io logo and 'We Deliver What We Promise' are
              trademarks of TrainingHub.io All Rights Reserved.`}
            </Paragraph>
          </Col>
          <Col md={2}>
            <Paragraph>
              <Link to="/privacy">Privacy</Link>
            </Paragraph>
          </Col>
          <Col md={2}>
            <a
              href="https://www.facebook.com/TrainingHubIELTS"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={facebookSquare} />
            </a>
            <a
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
            </a>
          </Col>
        </Row>
      </FooterLegal>
    </FooterStyle>
  );
}
