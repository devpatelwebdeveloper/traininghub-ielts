import React from "react";
import Layout from "../../components/templates/Layout/Layout";
import Head from "../../components/organisms/Head/Head";
import TopBannerCourse from "../../components/organisms/TopBannerCourse/TopBannerCourse";
import CourseBlock from "../../components/blocks/CoursesBlocks/CoursesBlocks";
import TextRow from "../../components/organisms/TextRow/TextRow";
import Accordion from "../../components/blocks/Accordion/Accordion";
import Section from "../../components/organisms/Section/Section";
import Paragraph from "../../components/atoms/Paragraph/Paragraph";
import Background from "../../contents/icons/ielts.svg";

export default function Courses() {
  const contentCols = [
    {
      title: "IELTS – Academic",
      subtitle: "FOR STUDY PURPOSE",
      text:
        "The Academic type assesses a test taker’s readiness to study or train in the medium of English at an undergraduate or postgraduate level by testing the full range of formal language skills required for academic purposes. Admission to undergraduate and postgraduate programs and courses is based on the results of the Academic type. The Academic type is also suitable for professional registration.",
    },
    {
      title: "IELTS – General",
      subtitle: "FOR WORK OR IMMIGRATION PURPOSES",
      text:
        "The General Training type emphasizes basic language survival skills in a broad social and educational context. General Training is suitable for test takers who are going to English speaking countries to complete their secondary education, undertake work experience or training programs, or to qualify for immigration to Australia, Canada, New Zealand, and the United States.",
    },
    {
      title: "CELPIP",
      subtitle: "GENERAL / GENERAL LS",
      text:
        "The Canadian English Language Proficiency Index Program (CELPIP) is an English language proficiency test accepted by a number of governments, professional organizations, universities, colleges, and employers as proof of English language proficiency.",
    },
  ];
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
  const faqs = [
    {
      title: "What is IELTS?",
      paragraph: (
        <>
          <Paragraph>
            IELTS – International English Language Testing System. It is a
            standardized test which determines linguistic ability of the test
            taker.
          </Paragraph>
          <ul>
            <li>
              It incorporates a variety of accents and writing styles to
              incorporate linguistic bias.
            </li>
            <li>
              It measures ability to communicate in English across all four
              language skills listening, reading, writing and speaking for
              people who intend to study or work where English is the language
              of communication.
            </li>
            <li>
              IELTS test are conducted both in paper based and computer based
              testing systems.
            </li>
            <li>
              There are 2 IELTS Test Modules. Candidates can choose either one
              of them, which are as follows:
              <ol>
                <li>
                  <strong>The Academic Module</strong> – Recommended for
                  candidates who need to meet English Language requirements of
                  universities or other educational institutions.
                </li>
                <li>
                  <strong>The General Training Module</strong> – Intended for
                  those planning to undertake non- academic training to gain
                  work experience or for immigration purposes.
                </li>
              </ol>
            </li>
            <li>
              IELTS is scored on a nine band scale, with each band corresponding
              to a specified competence in English. Overall Band Scores are
              reported to the nearest whole or half band.
            </li>
            <li>
              IELTS has been accepted as the standard international test system
              for English language in majority of all education establishments
              operating in English such as Australia, Canada, UK and New
              Zealand. US educational institutions are also now accepting IELTS
              as an eligible test to determine ones English proficiency.
            </li>
            <li>
              It is administered by:
              <ol>
                <li>University of Cambridge ESOL Examinations,</li>
                <li>The British Council and</li>
                <li>IDP Education Australia, and was established in 1989</li>
              </ol>
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "IELTS Exam Pattern",
      paragraph: (
        <>
          <Paragraph>
            IELTS Exam Pattern
            <ul>
              <li>Listening</li>
              <li>Reading</li>
              <li>Writing</li>
              <li>Speaking</li>
            </ul>
          </Paragraph>
          <Paragraph>
            <strong>Academic Training</strong> – For candidates taking the test
            for entry to undergraduate or postgraduate studies for professional
            reasons.
          </Paragraph>
          <Paragraph>
            <strong>General Training</strong> – For candidates taking entry to
            vocational or training programmes not at degree level, for admission
            to secondary schools and for immigration purposes.
          </Paragraph>
          <Paragraph>
            The format of the test is as under:
            <ul>
              <li>
                Total Test Duration of IELTS Exam is{" "}
                <strong>
                  <i>
                    <u>2 hours 45 minutes</u>
                  </i>
                </strong>
                .
              </li>
              <li>
                The first three modules –{" "}
                <strong>
                  <i>
                    <u>Listening, Reading and Writing</u>
                  </i>
                </strong>{" "}
                – must be completed in one day.
              </li>
              <li>
                The{" "}
                <strong>
                  <i>
                    <u>Speaking Module</u>
                  </i>
                </strong>{" "}
                may be taken, at the discretion of the test center, in the
                period of seven days before or after the other Modules.
              </li>
              <li>
                The tests are designed to cover the full range of ability from
                non-user to expert user.
              </li>
            </ul>
          </Paragraph>
        </>
      ),
    },
    {
      title: "Band System",
      paragraph: (
        <>
          <Paragraph>
            <strong>9 –</strong> Expert Users: Has full command of the language:
            appropriate, accurate and fluent with complete understanding. It is
            very hard to attain this score.
          </Paragraph>
          <Paragraph>
            <strong>8 –</strong> Very Good Users: Has fully operational command
            of the language with only occasional unsystematic inaccuracies and
            inappropriacies. Handles complex detailed argumentation well.
          </Paragraph>
          <Paragraph>
            <strong>7 –</strong> Good User: Has operational command of the
            language, though with occasional inaccuracies, inappropriateness and
            misunderstandings in some situations. Generally handles complex
            language well and understands detailed reasoning.
          </Paragraph>
          <Paragraph>
            <strong>6 –</strong> Competent Users : Has generally effective
            command of the language despite some inaccuracies, in appropriacies
            and misunderstandings. Can use and understand fairly complex
            language, particularly in familiar situations.
          </Paragraph>
          <Paragraph>
            <strong>5 –</strong> Modest Users: Has a partial command of the
            language, coping with overall meaning in most situations, though is
            likely to make many mistakes. The candidate should be able to handle
            communication in his or her own field.
          </Paragraph>
          <Paragraph>
            <strong>4 –</strong> Limited Users: Basic competence is limited to
            familiar situations. Have frequent problems in using complex
            language.
          </Paragraph>
          <Paragraph>
            <strong>3 –</strong> Extremely Limited Users: Conveys and
            understands only general meaning in very familiar situations.
            Frequent breakdowns in communication occur.
          </Paragraph>
          <Paragraph>
            <strong>2 –</strong> Intermittent Users: No real communication is
            possible except for the most basic information using isolated words
            or short formulae in familiar situations and to meet immediate
            needs. Has great difficulty understanding spoken and written
            English.
          </Paragraph>
          <Paragraph>
            <strong>1 –</strong> Non User: Essentially has no ability to use the
            language beyond possibly a few isolated words.
          </Paragraph>
          <Paragraph>
            <strong>0 –</strong> Did not attempt the test.
          </Paragraph>
        </>
      ),
    },
    {
      title: "Validity of Score",
      paragraph: (
        <ul>
          <li>
            The IELTS examination is held thrice a month. Scores are valid for
            two years from the date the test was taken.
          </li>
          <li>
            However it is advised to the candidates that the scores should be
            more recent as the time at which the candidate actually applies for
            visa, is when his score is more than a year old, so his level of
            English could witness a sea change.
          </li>
          <li>
            Moreover while taking admission to an educational institute, only
            the most recent scores are considered.
          </li>
          <li>
            Even Test Report Forms are valid for two years. They have inbuilt
            security measures and cannot be copied. Receiving institutions can
            also access a database to double-check your results
          </li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <Head title="IELTS" />
      <Layout>
        <TopBannerCourse
          courseTitle="IELTS"
          text="The International English Language Testing System (IELTS) is the world’s most recognized and proven English test. Millions of candidates take IELTS each year to start their journey into international education, employment, and for Canadian immigration."
          background={Background}
        />
        <TextRow
          contentCols={contentCols}
          title="Course Offerings"
          columns="3"
          shadow
        />
        <TextRow
          contentCols={courseContents}
          title="Course Contents & Learning Outcomes"
          columns="2"
        />
        <Section marginTop="50px" marginBottom="25px">
          <CourseBlock />
        </Section>
        <Section marginTop="50px" marginBottom="25px">
          <Accordion accordions={faqs} title="Frequently Asked Questions" />
        </Section>
      </Layout>
    </>
  );
}
