import { link } from "fs";
import { Metadata } from "next";

export const PROFILE = {
  name: "Rishabh Jain",
  email: "hello@rishabhjain.dev",
  title: "Sr Software Developer & Principal Consultant",
  avatar: "/person/rishabh-home-1x.webp",
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
  { date: "Apr, 2013", title: "Founded JnexSoft", content: "Working with multiple clients as a contractor." },
  { date: "Apr, 2018", title: "Heyooo Inc", content: "Worked with heyooo as a CTO" },
  {
    date: "Mar, 2021",
    title: "Recro",
    content: "Starting working with recro, it was a great chance to work with different companies.",
  },
  {
    date: "Mar, 2021",
    title: "PayU | Recro",
    content: "Worked with the famous payment processor payu on the frontend side.",
  },
  {
    date: "May, 2021",
    title: "ZS | Innovatorsbay",
    content:
      "Worked with ZS on a short term contractor. It was an amazing experience working with the team and building dashboards and tools for them.",
  },
  {
    date: "May, 2021",
    title: "Innovatorsbay",
    content: "Partnered with Innovatorsbay to work on some great projects.",
  },
  { date: "Jan, 2022", title: "CureFit | Recro", content: "Worked with curefit the well known gym brand." },
  {
    date: "May, 2022",
    title: "Verse | Recro",
    content:
      "I'm sure you've seen the app DailyHunt (formally NewsHunt). I got the privilege to consult for them and the parent company Verse",
  },
  {
    date: "Sep, 2022",
    title: "Mindtickle | Recro",
    content: "Mindticke is a great B2B platform for training employees.",
  },
  {
    date: "Sep, 2022",
    title: "Qubertech | Recro",
    content: "Mindticke is a great B2B platform for training employees.",
  },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export type TimelineEvent = (typeof TIMELINE)[number];

export const ABOUT =
  "A highly-skilled and results-oriented Senior Software Engineer with a passion for crafting innovative full-stack web applications. Extensive experience in frontend and backend technologies, including React, Node.js, databases (PostgreSQL, MySQL, MongoDB, Elasticsearch, CouchDB), and cloud functions (Lambda). Proven ability to lead teams, optimize performance, and deliver scalable solutions that exceed client expectations. Committed to staying at the forefront of technology and driving continuous improvement across the entire software development lifecycle.";
export const DESCRIPTION =
  "Hi, I'm a full-stack developer specializing in JavaScript/TypeScript, React/Angular/Next.js/React Native/Remix, Node.js/Python, and a variety of other front-end and back-end technologies. I'm passionate about crafting innovative web and mobile applications, exploring the world's diverse cultures, and enjoying life's simple pleasures like gaming.";

export const portfolioMetaData: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.title}`,
  description: DESCRIPTION,
  authors: [
    {
      name: PROFILE.name,
      url: "https://rishabhjain.dev",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://rishabhjain.dev/person/rishabh-home.webp",
        alt: `${PROFILE.name} | ${DESCRIPTION}`,
      },
    ],
  },
};

export const TESTIMONIALS = [
  {
    name: "Sujit Thakur",
    avatar: "/person/SujitThakur.webp",
    title: "CEO & Founder, Deuglo",
    link: "https://www.deuglo.com/",
    content:
      "We connected with Rishabh after a long time of searching for a company‘s can help us with a customized dashboard solution. We are an education company and wanted a customized dashboard solution to set up the complete process and make the in-house communication and operational work easy. They work very professionally and within deadlines.",
  },
  {
    name: "Varun Kumar",
    avatar: "/person/VarunKumar.webp",
    title: "CEO, VK Soft Solutions",
    link: "https://vksoft.co.in/",
    content:
      "I got a reference for Rishabh from one of my clients. He is a super amazing guy and knows what he is working at. We had various meetings and detailed calls on the app that I wanted them to make. The complete team is very apt in their work. The feedback was always taken on board and implemented without any hesitation.",
  },
  {
    name: "Siddharth Kothari",
    avatar: "/person/SiddharthKothari.webp",
    title: "CEO, Reactive Search",
    link: "https://www.reactivesearch.io/",
    content:
      "Rishabh made a significant impact on our internal tools and client projects. Their integration of ReactiveSearch into various tools has streamlined workflows and significantly improved the search experience for both our team and clients. His technical skills and dedication are highly valued at ReactiveSearch.",
  },
  {
    name: "Priyanka",
    avatar: "/person/placeholder.webp",
    title: "Marketing Director, E-commerce Startup",
    content: "Rishabh and the team did amazing work, I will definitely hire them again.",
  },
  {
    name: "Mili",
    avatar: "/person/placeholder.webp",
    title: "Marketing Director, E-commerce Startup",
    content: "Rishabh is great in his job and did more then it was expected from the task",
  },
];

export type Testimonial = (typeof TESTIMONIALS)[number];

export const PORTFOLIO = [
  {
    title: "Snap IT",
    description: "Project aims to provide a platform for users to share their code via images.  ",
    image: "/projects/snapit.png",
    link: "https://snapit.vercel.app/",
  },
  {
    title: "G2OpenBook",
    description: `
        G2 OpenBook is a comprehensive communication and management platform designed to streamline school operations and enhance collaboration among stakeholders. It connects principals, teachers, administrators, and parents, fostering a transparent and integrated learning environment.
          Key benefits:
          Principals gain real-time insights into school activities, enabling data-driven decision-making and improved administrative efficiency.
          Parents stay informed about their child's academic progress, attendance, homework, and extracurricular activities, fostering active involvement in their education.
          Teachers can efficiently manage student records, lesson plans, and assignments, while also gaining insights into individual student needs and talents.
          Administrators can easily monitor school safety, security, finances, and academic performance, ensuring a well-rounded and secure learning environment.
          Dedicated School Administration Portal: The platform's comprehensive portal provides administrators with powerful tools for managing student and staff information, attendance, leave requests, class schedules, school calendars, and much more.

          G2 OpenBook simplifies school management, strengthens communication, and empowers all stakeholders to work together towards a common goal: the success and well-being of every student.`,
    shortDescription:
      "G2 OpenBook is a comprehensive school management platform that streamlines communication, enhances collaboration, and empowers all stakeholders to actively participate in a child's education.",
    image: "/projects/openbook_logo.png",
  },
  {
    title: "G2OpenMind",
    description: `G2 OpenMind is a comprehensive communication and networking platform designed to streamline college management and foster a collaborative learning environment. It seamlessly connects key stakeholders, including the Dean, Faculty, Administration, and Students, enabling efficient communication and data-driven decision-making.
    Empowering the Dean: G2 OpenMind provides the Dean with a holistic view of college operations, offering insights into academic performance, student engagement, and administrative efficiency. This transparency allows for informed decision-making and strategic planning to enhance the overall college experience.
    Student-Centric Approach: Students benefit from real-time access to their academic records, attendance, and personalized feedback. G2 OpenMind also facilitates seamless communication with faculty and peers, fostering a vibrant learning community and enhancing student engagement.
    Faculty Efficiency: Faculty members can leverage G2 OpenMind to manage course materials, assignments, and grades efficiently. The platform also streamlines communication with students, enabling personalized guidance and support for academic success.
    Efficient Administration: G2 OpenMind empowers the college administration with tools to manage resources, track finances, and ensure campus safety and security. This streamlined approach enhances operational efficiency and allows administrators to focus on strategic initiatives.
    Dedicated College Administration Portal: The College Admin portal offers a comprehensive suite of features, including student and faculty directories, attendance and leave management, course scheduling, academic calendars, and more. This centralized hub simplifies administrative tasks and improves overall efficiency.
    G2 OpenMind revolutionizes college management by promoting transparency, collaboration, and data-driven decision-making. By connecting key stakeholders and providing them with the necessary tools and insights, G2 OpenMind creates a thriving academic environment where students can excel and institutions can flourish.`,
    shortDescription:
      "G2 OpenMind is a comprehensive college app designed to streamline communication and collaboration between students, faculty, and administrators. It provides a centralized platform for accessing academic information, managing course materials, and facilitating seamless interaction within the college community.",
    image: "/projects/college.png",
  },
];

export type Portfolio = (typeof PORTFOLIO)[number];
