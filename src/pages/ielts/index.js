import React from "react";
import Layout from "../../components/templates/Layout/Layout";
import Head from "../../components/organisms/Head/Head";
import TopBannerCourse from "../../components/organisms/TopBannerCourse/TopBannerCourse";
import CourseBlock from "../../components/blocks/CoursesBlocks/CoursesBlocks";

export default function Courses() {
  return (
    <>
      <Head title="IELTS" />
      <Layout>
        <TopBannerCourse />
        <section>
          <CourseBlock />
        </section>
      </Layout>
    </>
  );
}
