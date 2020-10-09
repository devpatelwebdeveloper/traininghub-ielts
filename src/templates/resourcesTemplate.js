import React from "react";
import Head from "../components/organisms/Head/Head";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import BaseTile from "../components/atoms/BaseTile/BaseTile";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/recruitment.svg";
import NumberedTimeLine from "../components/blocks/NumeredTimeLine/NumeredTimeLine";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { graphql, useStaticQuery } from "gatsby";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

export const query = graphql`
  query($slug: String!) {
    contentfulResources(slug: { eq: $slug }) {
      title

      content {
        json
      }
    }
  }
`;

const scoringSystem = [
  {
    value: "9",
    title: "Expert user",
    text:
      "The test taker has fully operational command of the language. Their use of English is appropriate, accurate and fluent, and shows complete understanding.",
  },
  {
    value: "8",
    title: "Very good user",
    text:
      "The test taker has fully operational command of the language with only occasional unsystematic inaccuracies and inappropriate usage. They may misunderstand some things in unfamiliar situations. They handle complex and detailed argumentation well.",
  },
  {
    value: "7",
    title: "Good user",
    text:
      "The test taker has operational command of the language, though with occasional inaccuracies, inappropriate usage and misunderstandings in some situations. They generally handle complex language well and understand detailed reasoning.",
  },
  {
    value: "6",
    title: "Competent user",
    text:
      "The test taker has an effective command of the language despite some inaccuracies, inappropriate usage and misunderstandings. They can use and understand fairly complex language, particularly in familiar situations.",
  },
  {
    value: "5",
    title: "Modest user",
    text:
      "The test taker has a partial command of the language and copes with overall meaning in most situations, although they are likely to make many mistakes. They should be able to handle basic communication in their own field.",
  },
  {
    value: "4",
    title: "Limited user",
    text:
      "The test taker's basic competence is limited to familiar situations. They frequently show problems in understanding and expression. They are not able to use complex language.",
  },
  {
    value: "3",
    title: "Extremely limited user",
    text:
      "The test taker conveys and understands only general meaning in very familiar situations. There are frequent breakdowns in communication.",
  },
  {
    value: "2",
    title: "Intermittent user",
    text:
      "The test taker has great difficulty understanding spoken and written English.",
  },
  {
    value: "1",
    title: "Non-user",
    text:
      "The test taker has no ability to use the language except a few isolated words.",
  },
  {
    value: "0",
    title: "Did not attempt the test",
    text: "The test taker did not answer the questions.",
  },
];

export default function ResourceTemplate(props) {
  const ResourceContent = props.data.contentfulResources;

  const ResourceParagraph = ({ children }) => <Paragraph>{children}</Paragraph>;
  const ResourceTitle = ({ children, size }) => (
    <BaseTitle title={children} size={size} />
  );

  const ResourceOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <ResourceParagraph>{children}</ResourceParagraph>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <ResourceTitle size="H2">{children}</ResourceTitle>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <ResourceTitle size="H3">{children}</ResourceTitle>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <ResourceTitle size="H4">{children}</ResourceTitle>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <ResourceTitle size="H5">{children}</ResourceTitle>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <ResourceTitle size="H6">{children}</ResourceTitle>
      ),
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return (
          <img
            alt={alt}
            src={url}
            style={{
              maxWidth: "100%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        );
      },
    },
    // renderMark: {
    //   [MARKS.BOLD]: text => {
    //     return <span className="HeadingHighlight">{text}</span>
    //   },
    // },
  };
  console.log(props.pageContext.slug);
  const score =
    props.pageContext.slug === "ielts-scoring-system" ? (
      <NumberedTimeLine
        lists={scoringSystem}
        title="Scoring System"
        start="0"
      />
    ) : null;
  return (
    <>
      <Head title={ResourceContent.title} />
      <Layout>
        <TopBannerCourse
          courseTitle={ResourceContent.title}
          text=""
          background={Background}
        />
        <Section marginTop="50px" marginBottom="25px">
          <Row>
            <Col md={12}>
              {documentToReactComponents(
                ResourceContent.content.json,
                ResourceOptions,
              )}
              {score}
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
