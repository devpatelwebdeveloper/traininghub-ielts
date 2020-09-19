import React from "react";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import { BigDataHadoopSpark } from "./Accordions/Accordions";
const icons = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/microsoft.svg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/webdesign.svg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/quality-assurance.svg",
  bigdata:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/server.svg",
  python:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/svgIcons/python-file.svg",
};

const courseImage = {
  microsoft:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg",
  web:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/WebDeveloper_Traininghub.jpg",
  qe:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/QualityEngineering_TrainingHub.jpg",
  bigdata:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/bigdata.jpg",
  python:
    "https://devashish-lms.s3.ca-central-1.amazonaws.com/python/pythonTrainingHub_io.jpg",
};

const Courses = [
  //Listening
  {
    tag: "IELTS",
    title: "Listening",
    href: "/ielts/listening",
    image: icons.bigdata,
    alt: "Listening",
    description:
      "A full-fledged hands-on Big Data Hadoop and Spark training designed by the industry experts to build your in-depth knowledge of Big Data Hadoop ecosystem and computing framework using HadoopMap Reduce and Sparkincluding HDFS, YARN, Sqoop, Flume, Pig, Hive, Impala, HBase, Kafka, Oozie and ZooKeeper.",
    startDate: "",
    courseImage: courseImage.bigdata,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      courseContent: BigDataHadoopSpark,
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
    image: icons.bigdata,
    alt: "Reading",
    description:
      "A full-fledged hands-on Big Data Hadoop and Spark training designed by the industry experts to build your in-depth knowledge of Big Data Hadoop ecosystem and computing framework using HadoopMap Reduce and Sparkincluding HDFS, YARN, Sqoop, Flume, Pig, Hive, Impala, HBase, Kafka, Oozie and ZooKeeper.",
    startDate: "",
    courseImage: courseImage.bigdata,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      courseContent: BigDataHadoopSpark,
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
    image: icons.bigdata,
    alt: "Writing",
    description:
      "A full-fledged hands-on Big Data Hadoop and Spark training designed by the industry experts to build your in-depth knowledge of Big Data Hadoop ecosystem and computing framework using HadoopMap Reduce and Sparkincluding HDFS, YARN, Sqoop, Flume, Pig, Hive, Impala, HBase, Kafka, Oozie and ZooKeeper.",
    startDate: "",
    courseImage: courseImage.bigdata,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      courseContent: BigDataHadoopSpark,
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
    image: icons.bigdata,
    alt: "Speaking",
    description:
      "A full-fledged hands-on Big Data Hadoop and Spark training designed by the industry experts to build your in-depth knowledge of Big Data Hadoop ecosystem and computing framework using HadoopMap Reduce and Sparkincluding HDFS, YARN, Sqoop, Flume, Pig, Hive, Impala, HBase, Kafka, Oozie and ZooKeeper.",
    startDate: "",
    courseImage: courseImage.bigdata,
    coursePage: {
      courseImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigData.png",
      courseIntroduction:
        "Our Big Data Hadoop & Spark Regular training course is designed to coverall required big data tools. This course will help you to understand the basics and advanced concept of Hadoop & Spark with all components like HDFS, Map Reduce, YARN, Sqoop, Flume, Hive, Impala, Spark Core API, Spark SQL, Spark Streaming, Oozie, ZooKeeper and some basics of Hadoop administration. Most importantly, this course focused on hands-on exercises, real-time use cases and topic wise code practice which will help you to get practical use of tools and codes rather than knowing only theoretical concepts.",
      courseIntroductionImage:
        "https://devashish-lms.s3.ca-central-1.amazonaws.com/BigData/BigDataHadoopSpark.jpg",
      courseContent: BigDataHadoopSpark,
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
