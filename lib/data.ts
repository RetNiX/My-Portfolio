import React from "react";
import { GiDiploma  } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

// Links for the navigation bar
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
// My education data
export const educationData = [
  {
    title: "Graduated Molecular Biology B.Sc.",
    location: "Ariel University",
    description:
      "Started my journey in the field of biology, trying to get accepted to med school.",
    icon: React.createElement(FaGraduationCap), // React component for the icon (had to do the createElement because we are inside a ts file and not a jsx file)
    date: "Oct.2017 - Oct.2021",
  },
  {
    title: "Full-Stack Developer Gaduate",
    location: "HackerU College",
    description:
      "Decided to change course and focus on my life-long hobby of programming. Learned front-end and back-end technologies and enjoying every second of it.",
    icon: React.createElement(GiDiploma),
    date: "Feb.2023 - Oct.2023",
  },
  {
    title: "Full-Stack Developer looking opportunities",
    location: "Israel",
    description:
      "I'm now a full-stack developer working on multiple projects on my own, to inhance my skills. I'm open to full-time job opportunities.",
    icon: React.createElement(FaReact),
    date: "Jan.2024 - Present",
  },
] as const;
// All the Projects Data
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;
// All the Skills Data
export const skillsData = [
  { name: "HTML", isNew: false },
  { name: "CSS", isNew: false },
  { name: "JavaScript", isNew: false },
  { name: "TypeScript", isNew: false },
  { name: "React", isNew: false },
  { name: "Redux", isNew: false },
  { name: "Next.js", isNew: true },
  { name: "Node.js", isNew: false },
  { name: "Github", isNew: false },
  { name: "MongoDB", isNew: false },
  { name: "MySQL", isNew: false },
  { name: "Bootstrap", isNew: false },
  { name: "TailwindCSS", isNew: true },
  { name: "Python", isNew: true },
  { name: "Framer Motion", isNew: true },
] as const;