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

export default function writing() {
  const Course = {
    tag: "IELTS",
    title: "Writing",
    href: "/ielts/writing",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/listener.svg",
    alt: "Writing",
    description:
      "The writing section in IELTS is also different in case of Academic and General Training examinees.",

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

        <Section margin="24px" padding="24px">
          <ContentGenericAligned
            title="Writing - Academic"
            text={
              <>
                <Paragraph>
                  IELTS Academic Writing lasts a total of 60 minutes. It
                  consists of 2 tasks (Writing Task 1 and Writing Task 2) and
                  candidates must answer BOTH tasks. Students are advised to
                  spend 20 minutes on Task 1 and 40 minutes on Task 2. They must
                  complete both tasks in one hour.
                </Paragraph>
                <Paragraph>
                  <strong>Task 1</strong> For Writing Task 1 candidates are
                  given some visual information which may be presented in the
                  form of one or more related diagrams, charts, graphs or
                  tables. Candidates are asked to describe the information or
                  data. They must write at least 150 words on this task.
                </Paragraph>
                <Paragraph>
                  <strong>Task 2</strong> For Writing Task 2, candidates are
                  presented with an opinion, problem or issue which they must
                  discuss. They may be asked to present the solution to a
                  problem, present and justify an opinion, compare and contrast
                  evidence or opinions, or evaluate and challenge an argument or
                  idea. Candidates must write at least 250 words and are advised
                  to spend 40 minutes on this task.
                </Paragraph>
                <Paragraph>TASK ASSESSMENT CRITERIA</Paragraph>
                <ol>
                  <li>Task Achievement</li>
                  <li>Coherence and Cohesion</li>
                  <li>Lexical Resource</li>
                  <li>Grammatical Range and Accuracy</li>
                </ol>
                <Paragraph>
                  Each of the tasks is assessed separately by trained and
                  qualified examiners and is given a score accordingly. Writing
                  Task 2 is worth more marks than Writing Task 1 so candidates
                  should be sure to leave plenty of time to complete Writing
                  Task 2.Academic Writing band scores are reported in whole
                  bands or half bands.
                </Paragraph>
              </>
            }
            image={Course.coursePage.courseIntroductionImage}
            alt={Course.title}
            ImageLeft
          />
        </Section>
        <Section
          margin="24px"
          padding="24px"
          background={Styles.Colors.BaseElement}>
          <ContentGenericAligned
            title="Writing - General"
            text={
              <>
                <Paragraph>
                  <strong>Task 1</strong> Candidates are asked to write a
                  personal informal, semi-formal or formal letter, responding to
                  a given problem or situation. Input to Task 1 includes a brief
                  description of the problem or situation followed by 3 bullet
                  points which tell the candidate what information is required
                  in the letter. Candidates must write at least 150 words for
                  this task.
                </Paragraph>
                <Paragraph>
                  <strong>Task 2</strong> The input to Task 2 consists of a
                  statement of a point of view, argument or problem about a
                  specific topic. This is followed by instructions asking
                  candidates to discuss the topic by providing general factual
                  information, outlining and/or presenting a solution,
                  justifying an opinion, or evaluating ideas and evidence.
                  Candidates are expected to produce a discursive piece of
                  writing. Candidates must write at least 250 words for this
                  task.
                </Paragraph>
                <Paragraph>TASK ASSESSMENT CRITERIA</Paragraph>
                <ol>
                  <li>Task Achievement</li>
                  <li>Coherence and Cohesion</li>
                  <li>Lexical Resource</li>
                  <li>Grammatical Range and Accuracy</li>
                </ol>
                <Paragraph>
                  Each of the tasks is assessed separately by a trained and
                  qualified examiner and given a score. Writing Task 2 is worth
                  more marks than Writing Task 1 so candidates should be sure to
                  leave plenty of time to complete Writing Task 2. From July 1
                  2007 General Training Writing band scores will be reported in
                  whole bands or half bands.
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
