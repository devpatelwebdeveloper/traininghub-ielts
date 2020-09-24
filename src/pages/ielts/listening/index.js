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

export default function listening() {
  const Course = {
    tag: "IELTS",
    title: "Listening",
    href: "/ielts/listening",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/listener.svg",
    alt: "Listening",
    description:
      "Listening consists of 4 sections mainly and there are ten questions in each section. Sections 1 and 2 are based on social survival in an English speaking country and sections 3 and 4 are based on a more educational and training orientation. The listening audio tape lasts for about 30 minutes and then you have 10 minutes at the end of the listening to transfer your answers to the answer sheet.",
    topbannericon: listening,
    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Listening-Test.jpg",
    coursePage: {
      courseImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ielts-toefl-yds.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fmaxresdefault.jpg&f=1&nofb=1",
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
      courseIntroductionImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ielts-toefl-yds.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fmaxresdefault.jpg&f=1&nofb=1",

      studentJourney: {
        heading: "Listening",
        paragraphContent: (
          <>
            <Paragraph>
              <strong>SECTION 1:</strong> Here you will listen to a conversation
              between 2 people. The conversation is divided into 2 parts. You
              have to answer 10 questions based on what you hear. At the start
              of section 1 you will have an example read out to you and then
              explained. This is then repeated when the listening starts
              properly.
            </Paragraph>
            <Paragraph>
              <strong>SECTION 2:</strong> Here you will hear a monologue though
              it may include a second speaker asking questions in order to
              stimulate the monologue. The monologue is divided into 2 parts.
              You have to answer 10 questions based on what you hear.
            </Paragraph>
            <Paragraph>
              <strong>SECTION 3:</strong> Here you will listen to a conversation
              between 2, 3 or 4 people. The conversation is divided into 2
              parts. You have to answer 10 questions based on what you hear.
            </Paragraph>
            <Paragraph>
              <strong>SECTION 4:</strong> Here you will hear a monologue though
              it may include a second speaker asking questions in order to
              stimulate the monologue. The monologue is divided into 2 parts.
              You have to answer 10 questions based on what you hear.
            </Paragraph>
            <Paragraph>
              The listening tape is only played once. So, it is recommended that
              the examinee pays full attention to it. As there is no video
              showed so even lip sync can’t help. Therefore, it must be known to
              every candidate that conversation is to be properly listened.
            </Paragraph>
          </>
        ),
      },
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

        <StudentJourney
          heading={Course.coursePage.studentJourney.heading}
          paragraphContent={Course.coursePage.studentJourney.paragraphContent}
        />
        <Section
          margin="24px"
          padding="24px"
          background={Styles.Colors.BaseElement}>
          <ContentGenericAligned
            title="COMMON LISTENING QUESTIONS"
            text={
              <>
                <ol>
                  <li>Short Answer</li>
                  <li>Multiple Choice</li>
                  <li>Sentence Completion/Fill in the Blanks</li>
                  <li>Notes/summary/diagram/flow chart/table completion</li>
                  <li>Labelling a diagram with numbered parts</li>
                  <li>Classification</li>
                  <li>Matching lists/ phrases</li>
                </ol>
                <Paragraph>
                  All these question types are available in the IELTS Practice
                  papers. As we know, practice is the key for all so it is
                  advisable to practice hard.
                </Paragraph>
                <Paragraph>
                  Band scores for the listening test and the final band are
                  given as a whole band or a half band.
                </Paragraph>
                <Paragraph>
                  The Academic type assesses a test taker’s readiness to study
                  or train in the medium of English at an undergraduate or
                  postgraduate level by testing the full range of formal
                  language skills required for academic purposes. Admission to
                  undergraduate and postgraduate programs and courses is based
                  on the results of the Academic type. The Academic type is also
                  suitable for professional registration.
                </Paragraph>
              </>
            }
            image={Course.coursePage.courseIntroductionImage}
            alt={Course.title}
            ImageLeft
          />
        </Section>

        <RelatedCourses title={Course.tag} currentHref={Course.href} />
      </Layout>
    </>
  );
}
