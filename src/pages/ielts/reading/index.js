import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Section from "../../../components/organisms/Section/Section";
import Head from "../../../components/organisms/Head/Head";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../../components/blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../../components/blocks/Accordion/Accordion";
import Paragraph from "../../../components/atoms/Paragraph/Paragraph";
import Styles from "../../../styles/Styles";

export default function reading() {
  const Course = {
    tag: "IELTS",
    title: "Reading",
    href: "/ielts/reading",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/listener.svg",
    alt: "Reading",
    description:
      "The reading passages are different for both Academic and General training candidates. Remember the format is the same but attempt is different and also the type and level of technical skills is different for both. The test has 40 questions based on a series of 3 passages. The test has to be completed in 60 minutes and no extra time will be given.",

    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/reading/readingTop.jpeg",
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/reading/readingTop.jpeg",
      courseIntroduction: (
        <>
          <Paragraph>
            <strong>SECTION 1:</strong> Here you will listen to a conversation
            between 2 people. The conversation is divided into 2 parts. You have
            to answer 10 questions based on what you hear. At the start of
            section 1 you will have an example read out to you and then
            explained. This is then repeated when the listening starts properly.
          </Paragraph>
          <Paragraph>
            <strong>SECTION 2:</strong> Here you will hear a monologue though it
            may include a second speaker asking questions in order to stimulate
            the monologue. The monologue is divided into 2 parts. You have to
            answer 10 questions based on what you hear.
          </Paragraph>
          <Paragraph>
            <strong>SECTION 3:</strong> Here you will listen to a conversation
            between 2, 3 or 4 people. The conversation is divided into 2 parts.
            You have to answer 10 questions based on what you hear.
          </Paragraph>
          <Paragraph>
            <strong>SECTION 4:</strong> Here you will hear a monologue though it
            may include a second speaker asking questions in order to stimulate
            the monologue. The monologue is divided into 2 parts. You have to
            answer 10 questions based on what you hear.
          </Paragraph>
          <Paragraph>
            The listening tape is only played once. So, it is recommended that
            the examinee pays full attention to it. As there is no video showed
            so even lip sync can’t help. Therefore, it must be known to every
            candidate that conversation is to be properly listened.
          </Paragraph>
        </>
      ),
      academic:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/reading/readingAcademic.jpeg",
      general:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/reading/reading.jpg",
    },
  };
  return (
    <>
      <Head title={`${Course.title} - ${Course.tag}`} />
      <Layout>
        <TopBannerCourse
          courseTitle={Course.title}
          // subtitle={Course.tag} This can be the subtitle
          text={Course.description}
          courseImage={Course.coursePage.courseImage}
        />
        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="Reading - Academic"
            text={
              <>
                <Paragraph>
                  Academic Reading is harder as compared to General training
                  Reading in IELTS.There are 3 passages and each contains
                  approximately 13-14 questions. Each text has questions of
                  different formats. . The total length of all the texts put
                  together will be between 2000 and 2750 words. The texts will
                  come from magazines, journals and books and are written for
                  general interest or for an academic though non-specialist
                  reader.
                </Paragraph>
                <ul>
                  <li>Multiple choice questions</li>
                  <li>Completion questions: Completing sentences</li>
                  <li>Completing notes</li>
                  <li>Completing a summary (no word bank)</li>
                  <li>Classification questions</li>
                  <li>
                    Matching a bank of writers’ views/claims/information with
                    the writer
                  </li>
                  <li>
                    Matching a bank of headings to identify paragraphs or parts
                    of text
                  </li>
                  <li>Completing a flow chart</li>
                  <li>Completing a table</li>
                  <li>
                    Identification of information in the text: yes/no/not given
                    questions
                  </li>
                  <li>True/false/not given questions</li>
                  <li>Matching lists/phrases</li>
                  <li>Completing a summary (with word bank)</li>
                  <li>Completing a diagram</li>
                  <li>Short answer questions</li>
                </ul>
              </>
            }
            image={Course.coursePage.academic}
            alt="Reading - Academic"
          />
        </Section>

        <Section
          margin="24px"
          padding="24px"
          background={Styles.Colors.BaseElement}>
          <ContentGenericAligned
            title="Reading - General"
            text={
              <>
                <Paragraph>
                  This test contains 3 sections with a total of 40 questions.
                  The types of questions asked are similar but the difference
                  lies in the format of texts. Possible formats of texts could
                  be: notices, advertisements, newspapers, instruction manuals,
                  leaflets, timetables, books and magazines.
                </Paragraph>
                <Paragraph>
                  <strong>Section 1</strong> will normally have 2 or maybe 3
                  “texts” with 13 or maybe 14 questions to answer in 2 or 3 sets
                  of differing formats. Section 1 tests the candidate on “social
                  survival” in an English speaking country. The questions
                  usually involve the candidate finding and providing factual
                  information from a variety of texts. Texts in section 1 are
                  relatively short and there may be a number of “mini text’s to
                  look through, e.g.: a series of advertisements on similar
                  subjects.
                </Paragraph>
                <Paragraph>
                  <strong>Section 2</strong> again usually has 2 texts with 13
                  or maybe 14 questions to answer. Section 2 concentrates on the
                  context of training and welfare in an English speaking
                  country. The texts here will be more complicated using more
                  intricate language and structure.
                </Paragraph>
                <Paragraph>
                  <strong>Section 3</strong> will have 1 text with 13 or maybe
                  14 questions to answer. Section 3 tests candidate’s ability to
                  deal with longer pieces of writing. The reading passage will
                  again involve more complex language than the 2 previous
                  sections.
                </Paragraph>
                <Paragraph>
                  The candidate has to read thoroughly and should not skim the
                  text. It is a test of reading and not of general knowledge.
                </Paragraph>
              </>
            }
            image={Course.coursePage.general}
            alt="Reading - General"
            imageLeft
          />
        </Section>

        <RelatedCourses title={Course.tag} currentHref={Course.href} />
      </Layout>
    </>
  );
}
