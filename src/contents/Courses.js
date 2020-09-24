import React from "react";
import Paragraph from "../components/atoms/Paragraph/Paragraph";

const Courses = [
  //Listening
  {
    tag: "IELTS",
    title: "Listening",
    href: "/ielts/listening",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/listener.svg",
    alt: "Listening",
    description:
      "Listening consists of 4 sections mainly and there are ten questions in each section. Sections 1 and 2 are based on social survival in an English speaking country and sections 3 and 4 are based on a more educational and training orientation. The listening audio tape lasts for about 30 minutes and then you have 10 minutes at the end of the listening to transfer your answers to the answer sheet.",
    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Listening-Test.jpg",
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Listening-Test.jpg",
      // courseContent: BigDataHadoopSpark,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 10+ of experience. By the end of the course, you will be able to... Big data and Hadoop architecture,Understanding of Hadoop clusters and important configurations, Complete setup of the Hadoop ecosystem, Hadoop distributed file system, MapReduce framework and application execution flow, data ingestion tools, Hive SQL, and Pig Latin Language. This course is designed forDevelopers, Project Managers, and architects. ETL, BI Professionals. There are no specific prerequisites for this training, anyone can get training on this course.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
  //Reading
  {
    tag: "IELTS",
    title: "Reading",
    href: "/ielts/reading",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/read.svg",
    alt: "Reading",
    description:
      "The reading passages are different for both Academic and General training candidates. Remember the format is the same but attempt is different and also the type and level of technical skills is different for both. The test has 40 questions based on a series of 3 passages. The test has to be completed in 60 minutes and no extra time will be given.",
    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Reading-Test.jpg",
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      // courseContent: BigDataHadoopSpark,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 10+ of experience. By the end of the course, you will be able to... Big data and Hadoop architecture,Understanding of Hadoop clusters and important configurations, Complete setup of the Hadoop ecosystem, Hadoop distributed file system, MapReduce framework and application execution flow, data ingestion tools, Hive SQL, and Pig Latin Language. This course is designed forDevelopers, Project Managers, and architects. ETL, BI Professionals. There are no specific prerequisites for this training, anyone can get training on this course.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
  //Writing
  {
    tag: "IELTS",
    title: "Writing",
    href: "/ielts/writing",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/writer.svg",
    alt: "Writing",
    description:
      "The writing section in IELTS is also different in case of Academic and General Training examinees.",
    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Writing-Test.jpg",
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      // courseContent: BigDataHadoopSpark,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 10+ of experience. By the end of the course, you will be able to... Big data and Hadoop architecture,Understanding of Hadoop clusters and important configurations, Complete setup of the Hadoop ecosystem, Hadoop distributed file system, MapReduce framework and application execution flow, data ingestion tools, Hive SQL, and Pig Latin Language. This course is designed forDevelopers, Project Managers, and architects. ETL, BI Professionals. There are no specific prerequisites for this training, anyone can get training on this course.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
  //Speaking
  {
    tag: "IELTS",
    title: "Speaking",
    href: "/ielts/speaking",
    image:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/speaking.svg",
    alt: "Speaking",
    description:
      "IELTS Speaking is a one-to-one interaction between the candidate and the examiner. The three parts give the candidate the opportunity to use a range of different speaking skills. IELTS Speaking is recorded. Speaking test varies from 11-14 minutes. Assessment of candidates takes place through their performance in the test.",
    startDate: "",
    courseImage:
      "https://devashish-lms.s3.ca-central-1.amazonaws.com/Ielts/IELTS-Speaking-Test.jpg",
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      // courseContent: BigDataHadoopSpark,
      studentJourney: {
        heading: "Student Journey",
        paragraphContent:
          "Soon after enrolling in the course, you will be trained by professionals experienced with 10+ of experience. By the end of the course, you will be able to... Big data and Hadoop architecture,Understanding of Hadoop clusters and important configurations, Complete setup of the Hadoop ecosystem, Hadoop distributed file system, MapReduce framework and application execution flow, data ingestion tools, Hive SQL, and Pig Latin Language. This course is designed forDevelopers, Project Managers, and architects. ETL, BI Professionals. There are no specific prerequisites for this training, anyone can get training on this course.",
        imageOne:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark1.png",
        imageOneAlt: "BigData Technologies",
        imageTwo:
          "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/set-of-mysql-queries-in-a-database-management-software--942201142-b7feffd8e5454596bcaf1a06091b2ff0.jpg",
        imageTwoAlt: "Database management system",
      },
    },
  },
];

export { Courses };
