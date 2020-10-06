import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import CourseBlock from "../components/blocks/CoursesBlocks/CoursesBlocks";
import TextRow from "../components/organisms/TextRow/TextRow";
import Accordion from "../components/blocks/Accordion/Accordion";
import Section from "../components/organisms/Section/Section";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import Background from "../contents/icons/ielts.svg";
import NumberedTimeLine from "../components/blocks/NumeredTimeLine/NumeredTimeLine";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tiles from "../components/blocks/Tiles/Tiles";
import { HomePageCards } from "../contents/HomePageCards";
import { HomePageSliders } from "../contents/HomePageSliders";
import Slider from "../components/organisms/Slider/Slider";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";

export default function Courses() {
  const courseContents = [
    {
      title: "Reading",
      list: (
        <ul>
          <li>Yes/No, Not given</li>
          <li>Match the Heading</li>
          <li>Multiple Choice Questions</li>
          <li>Short Answer Questions</li>
          <li>Fill in the Blanks</li>
          <li>Time Management</li>
        </ul>
      ),
    },
    {
      title: "Writing",
      list: (
        <ul>
          <li>Essay writing and graph (A) or letter (G)</li>
          <li>Grammar</li>
          <li>Band 9 vocabulary</li>
          <li>Strong introduction and conclusion</li>
          <li>Punctuation and Paragraphing</li>
          <li>Time Management</li>
        </ul>
      ),
    },
    {
      title: "Speaking",
      list: (
        <ul>
          <li>
            How to answer a wide range of questions from factual to reflective
            questions
          </li>
          <li>How to narrate and describe</li>
          <li>Summarize and synthesize</li>
          <li>Analyse, state and support opinions, and advise</li>
          <li>Practicing oral interviews</li>
          <li>Right intonation,flow and fluency of speech</li>
        </ul>
      ),
    },
    {
      title: "Listening",
      list: (
        <ul>
          <li>Multiple Choice and Short Answer questions</li>
          <li>Matching the Headings</li>
          <li>Sentences Completion</li>
          <li>Effective Listening Strategies</li>
          <li>Answer a variety of Question types</li>
          <li>Time Management</li>
        </ul>
      ),
    },
  ];
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
  return (
    <>
      <Head title="IELTS" />
      <Layout>
        <Slider HomePageSlides={HomePageSliders} />
        <Section marginTop="50px" marginBottom="25px">
          <ContentGenericAligned
            textJustified
            imageLeft
            title="About Instructor"
            text="This is the text about the instructor"
            image="https://images.unsplash.com/photo-1597570889212-97f48e632dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2555&q=80"
            alt="About Instructor"
          />
        </Section>

        {/* <TextRow
          contentCols={contentCols}
          title="Course Offerings"
          columns="3"
          shadow
        /> */}
        {/* <Tiles
          title="IELTS Target 8777? Together WE CAN!"
          tiles={HomePageCards}
        /> */}
        <TextRow
          contentCols={courseContents}
          title="Course Contents & Learning Outcomes"
          columns="2"
        />
        <Section marginTop="50px" marginBottom="25px">
          <CourseBlock />
        </Section>
        <Section>
          <Row>
            <Col>
              <BaseTitle title="Scoring System" size="H2" center underline />
              <NumberedTimeLine
                lists={scoringSystem}
                title="Scoring System"
                start="0"
              />
            </Col>
          </Row>
        </Section>
      </Layout>
    </>
  );
}
