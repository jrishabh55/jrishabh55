import { Metadata } from "next";

export const PROFILE = {
  name: "Rishabh Jain",
  email: "hello@rishabhjain.dev",
  title: "Software Engineer",
  avatar: "/person/rishabh-home.webp",
};

export const SKILLS = [
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    title: "TypeScript",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    title: "Express",
    className: "invert",
  },
  {
    logo: "/icons/nextjs.svg",
    title: "NextJS",
  },
  {
    logo: "/icons/remix.svg",
    title: "Remix",
  },
  {
    logo: "https://nodejs.org/static/logos/nodejsStackedLight.svg",
    title: "NodeJS",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    title: "Postman",
  },
  {
    logo: "https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png",
    title: "React Native",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    title: "Bootstrap",
    className: "invert",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    title: "Redux",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    title: "Sass",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    title: "Tailwind CSS",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    title: "React",
  },
  {
    logo: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mysql/mysql-original.svg",
    title: "MySQl",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    title: "Mongo DB",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg",
    title: "Heroku",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    title: "Git",
  },
  {
    logo: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    title: "Firebase",
  },
].sort((a, b) => a.title.localeCompare(b.title));

export type Skill = (typeof SKILLS)[number];

export const TIMELINE = [
  { date: "Mar, 2022", title: "Markdown is supported", content: "Events alternate by default..." },
  { date: "Mar, 2022", title: "Markdown is supported", content: "Events alternate by default..." },
  { date: "Mar, 2022", title: "Markdown is supported", content: "Events alternate by default..." },
  { date: "Mar, 2022", title: "Markdown is supported", content: "Events alternate by default..." },
] as const;

export type TimelineEvent = (typeof TIMELINE)[number];

export const ABOUT =
  "A highly-skilled and results-oriented Senior Software Engineer with a passion for crafting innovative full-stack web applications. Extensive experience in frontend and backend technologies, including React, Node.js, databases (PostgreSQL, MySQL, MongoDB, Elasticsearch, CouchDB), and cloud functions (Lambda). Proven ability to lead teams, optimize performance, and deliver scalable solutions that exceed client expectations. Committed to staying at the forefront of technology and driving continuous improvement across the entire software development lifecycle.";

export const portfolioMetaData: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: ABOUT,
};

export const TESTIMONIALS = [
  {
    name: "Sujit Thakur",
    avatar: "https://qph.cf2.quoracdn.net/main-thumb-52082719-200-hmoxnoeakszhnytdytcpldkcsxmvchim.jpeg",
    title: "CEO & Founder, Deuglo",
    link: "https://www.deuglo.com/",
    content:
      "We connected with Rishabh after a long time of searching for a company‘s can help us with a customized dashboard solution. We are an education company and wanted a customized dashboard solution to set up the complete process and make the in-house communication and operational work easy. They work very professionally and within deadlines.",
  },
  {
    name: "Varun Kumar",
    avatar:
      "https://images.crunchbase.com/image/upload/c_thumb,h_170,w_170,f_auto,g_face,z_0.7,b_white,q_auto:eco,dpr_2/w4ksankqw7bwhn5b6ioi",
    title: "CEO, VK Soft Solutions",
    link: "https://vksoft.co.in/",
    content:
      "I got a reference for Rishabh from one of my clients. He is a super amazing guy and knows what he is working at. We had various meetings and detailed calls on the app that I wanted them to make. The complete team is very apt in their work. The feedback was always taken on board and implemented without any hesitation.",
  },
  {
    name: "Siddharth Kothari",
    avatar:
      "https://images.squarespace-cdn.com/content/v1/5920bc42579fb390c0074e43/1568308589959-H6J9WGC1KLJE3GWMG5F4/Siddharth+Kothari.png?format=1500w",
    title: "CEO, Reactive Search",
    link: "https://www.reactivesearch.io/",
    content:
      "Rishabh made a significant impact on our internal tools and client projects. Their integration of ReactiveSearch into various tools has streamlined workflows and significantly improved the search experience for both our team and clients. His technical skills and dedication are highly valued at ReactiveSearch.",
  },
  {
    name: "Priyanka",
    avatar: "/person/placeholder.png",
    title: "Marketing Director, E-commerce Startup",
    content: "Rishabh and the team did amazing work, I will definitely hire them again.",
  },
  {
    name: "Mili",
    avatar: "/person/placeholder.png",
    title: "Marketing Director, E-commerce Startup",
    content: "Rishabh is great in his job and did more then it was expected from the task",
  },
];

export type Testimonial = (typeof TESTIMONIALS)[number];
