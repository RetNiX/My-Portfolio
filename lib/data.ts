import React from "react";
import { GiDiploma } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import portfolioPic from "@/public/portfolioPic.png";
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
    title: "My Portfolio",
    description:
      "I worked on this project to try new technologies and to have a place to showcase my work.",
    tags: ["React", "Next.js", "Typescript", "Tailwind CSS", "Framer Motion", "Resend"],
    imageUrl: portfolioPic,
  },
  {
    title: "Final Project - PC Hardware Store",
    description:
      "A e-commerce website that allows you to buy PC hardware and accessories.",
    tags: ["React", "TypeScript", "Node.js", "Bootstrap", "MongoDB"],
    imageUrl: rmtdevImg,
  },
  {
    title: "1st Full-Stack Project = Business Card System",
    description:
      "A business card system that allows you to create, edit, delete and share business cards.",
    tags: ["React", "Typescript", "Node.js", "MongoDB", "Bootstrap"],
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