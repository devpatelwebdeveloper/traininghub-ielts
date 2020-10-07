import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";

import Accordion from "../components/blocks/Accordion/Accordion";
import Section from "../components/organisms/Section/Section";
import Background from "../contents/icons/ielts.svg";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Courses() {
  const faqQuery = useStaticQuery(graphql`
    query {
      allContentfulFrequentlyAskedQuestions(
        sort: { fields: [order], order: ASC }
      ) {
        edges {
          node {
            question
            answer {
              json
            }
          }
        }
      }
    }
  `);

  const faqs = [];
  faqQuery.allContentfulFrequentlyAskedQuestions.edges.map((faq) => {
    faqs.push({
      title: faq.node.question,
      paragraph: documentToReactComponents(faq.node.answer.json),
    });
  });

  return (
    <>
      <Head title="FAQs" />
      <Layout>
        <TopBannerCourse
          courseTitle="IELTS"
          text="The International English Language Testing System (IELTS) is the world’s most recognized and proven English test. Millions of candidates take IELTS each year to start their journey into international education, employment, and for Canadian immigration."
          background={Background}
        />

        <Section marginTop="50px" marginBottom="25px">
          <Accordion accordions={faqs} title="Frequently Asked Questions" />
        </Section>
      </Layout>
    </>
  );
}
