import React from "react";
import Layout from "../components/templates/Layout/Layout";
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse";
import Background from "../contents/icons/recruitment.svg";
import Section from "../components/organisms/Section/Section";
import Head from "../components/organisms/Head/Head";
import ContentGenericAligned from "../components/blocks/ContentGenericAligned/ContentGenericAligned";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import StudentJourney from "../components/blocks/StudentJourney/StudentJourney";

const contentOne = (
  <>
    <Paragraph>
      Laura Paterson is a highly trained and experienced provider of online
      training for Language Academy from UK.
    </Paragraph>
    <Paragraph>
      Laura qualified as an English Language teacher at the prestigious British
      Council,Cairo, Egypt and was immediately recruited to teach both General
      and Business English to a client base including Vodafone, Pepsi, the
      National Bank of Egypt and the Egyptian Justice Departments.
    </Paragraph>
  </>
);
const contentTwo = (
  <>
    <Paragraph>
      On return to the UK, she became a specialist examinations teacher at some
      of the best private language school companies in Europe, devising syllabi,
      delivering classes and leading in-house teacher training in:
    </Paragraph>

    <ul>
      <li>IELTS (Academic and General Training)</li>
      <li>Cambridge Proficiency, Advanced, First</li>
      <li>
        Cambridge BEC (Business English Certificate) Vantage and Preliminary
      </li>
      <li>Trinity Graded Examinations in Spoken English</li>
      <li>ETS Test of English as a Foreign Language (TOEFL)</li>
      <li>ETS Test of English for International Communication (TOEIC)</li>
    </ul>
    <Paragraph>
      Those taught successfully by Laura in General English, examination
      preparation and bespoke Corporate Training include: the Finnish
      Parliament, UBS, the French Air Traffic Control Service (ENAC), the
      Turkish Ministry of Justice, the UAE MilitaryAttache, the Kuwaiti Embassy,
      the Saudi Embassy, the Spanish Military Airforce, the Italian Nautical
      Training Institute (Sorrento), Korean Air, the Women's Bank ofSaudi Arabia
      and the Vatican.
    </Paragraph>
    <Paragraph>
      Laura successfully completed a postgraduate Diploma in Teaching English to
      Speakers of Other Languages in 2019. Her areas of specialism included
      Second Language Acquisition, promoting Learner Autonomy and accessing and
      utilizing technology in the classroom (which has been maximized in light
      of the current pandemic). She graduated with Distinction.
    </Paragraph>
    <Paragraph>
      Her success rate in examinations and high levels of student satisfaction
      saw her promoted to an Academic Management position at the highly regarded
      British Study Centres, UK in 2016 which she held until 2020 when she moved
      to work at the University of Sheffield (a World Top 100 University). Here,
      she delivered an industry-leading pre-Sessional programme to postgraduate
      students and yielded outstanding results.
    </Paragraph>
    <Paragraph>
      Laura is a committed, driven and expert teacher. She makes classes
      accessible, informative and effective and puts students and promotion of
      their excellence at the fore of the learning environment and a reality.
    </Paragraph>
    <Paragraph>
      Explore the IT field statistics and career-driven courses at the job
      market and get updated to them by joining with TrainingHub.io, Learn about
      various career paths.
    </Paragraph>
  </>
);

export default function Recruitment() {
  return (
    <React.Fragment>
      <Head title="IELTS Coach - Laura Paterson" />
      <Layout>
        <TopBannerCourse
          courseTitle="Laura Paterson"
          subtitle="IELTS Coach"
          text=""
          background={Background}
          courseImage="https://devashish-lms.s3.ca-central-1.amazonaws.com/WhatWeOffer_TrainingHub.png"
        />
        <Section marginTop="50px">
          <ContentGenericAligned
            title="About Instructor - Laura Paterson"
            text={contentOne}
            image="https://devashish-lms.s3.ca-central-1.amazonaws.com/ieltsHomePage/LauraPaterson.jpg"
            alt="Laura Paterson - IELTS instructor"
          />
        </Section>
        <Section marginBottom="25px">
          <StudentJourney
            heading="More About Laura"
            paragraphContent={contentTwo}
          />
        </Section>
      </Layout>
    </React.Fragment>
  );
}

//code
