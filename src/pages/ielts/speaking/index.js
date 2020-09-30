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
    title: "Speaking",
    href: "/ielts/speaking",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/listener.svg",
    alt: "Listening",
    description:
      "IELTS Speaking is a one-to-one interaction between the candidate and the examiner. The three parts give the candidate the opportunity to use a range of different speaking skills. IELTS Speaking is recorded. Speaking test varies from 11-14 minutes. Assessment of candidates takes place through their performance in the test.",

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
        heading: "Nature of Interaction",
        paragraphContent: (
          <>
            <Paragraph>
              <strong>INTRODUCTION AND INTERVIEW-(4-5 MINUTES):</strong> After
              introductions and identity check, the examiner asks the candidate
              questions about familiar topics
            </Paragraph>
            <Paragraph>
              <strong>2 Minute Topic– (3-4 MINUTES):</strong> The candidate
              receives a task card with a topic. She/He then has 1 minute to
              prepare and make notes before speaking about the topic for 1 to 2
              minutes.
            </Paragraph>
            <Paragraph>
              <strong>DISCUSSION – (4-5 MINUTES):</strong> The examiner
              discusses with the candidate more abstract aspects of the topic in
              Part 2.
            </Paragraph>
            <Paragraph>
              *The candidate’s ability to communicate opinions and information
              on everyday topics and common experiences or situations by
              answering a range of questions is assessed.
            </Paragraph>
            <Paragraph>
              *The candidate’s ability to speak at length on a given topic
              (without further prompts from the examiner), using appropriate
              language and organizing his/her ideas coherently is assessed. It
              is likely that the candidate will need to draw on his/her own
              experience to complete the long turn.
            </Paragraph>
            <Paragraph>
              *The candidate’s ability to express and justify opinions, analyze,
              discuss and speculate about issues is assessed.
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
            title="Scoring system"
            text={
              <>
                <Paragraph>
                  Marking in Speaking Test is done as per its parts. These are:
                </Paragraph>
                <ul>
                  <li>Fluency and Coherence</li>
                  <li>Lexical resource</li>
                  <li>Grammatical Area</li>
                  <li>Pronunciation</li>
                </ul>
                <Paragraph>
                  First 3 sections are marked out of 9 but pronunciation is
                  marked as 2, 4, 6 and 8.Then an average of bands is
                  constituted to get the final band.
                </Paragraph>
                <Paragraph>Marking is based on:</Paragraph>
                <ul>
                  <li>
                    Fluency of the examinee. Is he/ she able to speak English
                    smoothly or not?
                  </li>
                  <li>
                    The range of words or the word-stock which the examinee has.
                  </li>
                  <li>
                    Grammatical accuracy and tenses etc. are tested but an
                    examinee should not fear from this, as it is only one part
                    of the assessment.
                  </li>
                  <li>Clarity in English speaking is tested.</li>
                </ul>
              </>
            }
            image={Course.coursePage.courseIntroductionImage}
            alt={Course.title}
            ImageLeft={true}
          />
        </Section>

        <RelatedCourses title={Course.tag} currentHref={Course.href} />
      </Layout>
    </>
  );
}
