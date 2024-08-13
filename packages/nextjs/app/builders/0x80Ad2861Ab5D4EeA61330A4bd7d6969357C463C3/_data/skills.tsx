import { AiOutlineApi } from "react-icons/ai";
import { BsGearWideConnected } from "react-icons/bs";
import {
  SiChakraui,
  SiCypress,
  SiDocker,
  SiElectron,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedux,
  SiSocketdotio,
  SiStorybook,
  SiSwagger,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const currentYear = new Date().getFullYear();

export const skills = [
  {
    description: "A JavaScript library for building user interfaces",
    icon: SiReact,
    name: "React",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "The React Framework for Production",
    icon: SiNextdotjs,
    name: "Next.js",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "Typed superset of JavaScript that compiles to plain JavaScript",
    icon: SiTypescript,
    name: "TypeScript",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "High-level, interpreted programming language",
    icon: SiJavascript,
    name: "JavaScript",
    time: `${currentYear - 2017}+ years`,
  },
  {
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: SiNodedotjs,
    name: "Node.js",
    time: `${currentYear - 2017}+ years`,
  },
  {
    description: "Framework for building native apps using React",
    icon: TbBrandReactNative,
    name: "React Native",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "A library for managing server state in React applications",
    icon: SiReactquery,
    name: "React Query",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "A library for building forms in React applications",
    icon: SiReacthookform,
    name: "React Hook Form",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "Swagger is a framework for building RESTful web services",
    icon: SiSwagger,
    name: "Swagger",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "Query language for APIs",
    icon: SiGraphql,
    name: "GraphQL",
    time: `${currentYear - 2022}+ years`,
  },
  {
    description: "Architectural style for designing networked applications",
    icon: AiOutlineApi,
    name: "REST APIs",
    time: `${currentYear - 2018}+ years`,
  },
  {
    description: "Predictable state container for JavaScript apps",
    icon: SiRedux,
    name: "Redux",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "Utility-first CSS framework",
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "Simple, modular and accessible component library for React",
    icon: SiChakraui,
    name: "Chakra UI",
    time: `${currentYear - 2022}+ years`,
  },
  {
    description: "Unstyled, accessible components for building high‑quality design systems",
    icon: SiRadixui,
    name: "Radix UI",
    time: `${currentYear - 2022}+ years`,
  },
  {
    description: "Protocol for real time data exchange",
    icon: SiSocketdotio,
    name: "Web Sockets",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "Tool for developing UI components in isolation",
    icon: SiStorybook,
    name: "Storybook",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "JavaScript testing framework",
    icon: SiJest,
    name: "Jest",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "React Testing Library (RTL) - react testing utilities that encourage good testing practices",
    icon: SiTestinglibrary,
    name: "RTL",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "End-to-end testing framework",
    icon: SiCypress,
    name: "Cypress",
    time: `${currentYear - 2020}+ years`,
  },
  {
    description: "Tool for developing, shipping, and running applications",
    icon: SiDocker,
    name: "Docker",
    time: `${currentYear - 2021}+ years`,
  },
  {
    description: "Continuous Integration and Continuous Deployment",
    icon: BsGearWideConnected,
    name: "CI/CD",
    time: `${currentYear - 2019}+ years`,
  },
  {
    description: "Distributed version control system",
    icon: SiGit,
    name: "Git",
    time: `${currentYear - 2015}+ years`,
  },
  {
    description: "Framework for building cross-platform desktop apps with web technologies",
    icon: SiElectron,
    name: "Electron",
    time: `${currentYear - 2019}+ years`,
  },
] as const;

export type SkillIcon = (typeof skills)[number]["icon"];
