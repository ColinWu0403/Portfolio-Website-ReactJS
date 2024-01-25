import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  FurnitureMarketplace,
  Shirt_JS,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Software Engineering",
    icon: mobile,
  },
  {
    title: "Computer Engineering",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: threejs,
  },
  {
    name: "Python",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "PHP",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "mySQL",
    icon: figma,
  },
  {
    name: "Bash",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: ["asdas", "asfa"],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "daufh  sadjfl ioawefh laksdj lasdfhj lasdkfjha lkj",
      "asdf asdhfa fhjkdas fahslfaksdjlfkjads a",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "asfhs fjka hflaskdh alkdfjhalskdfjh alsfjdk",
      "saf sadfas dfafl asjdfha lsdfjhalsfkjhalsfa dshfalkjd",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "sa fjasdf asdkjfhal dhjsfladjslasdkf",
      "afdkjh salfkjahs lfdkjahslfsadhj lasdfkj alsdhjflf kjadhsf dsf",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Artikulate",
    description:
      "Artikulate is a cutting-edge platform that revolutionizes content creation by transforming text into captivating videos tailored for platforms like TikTok. Users can harness the power of generative AI for creative story generation or opt to web scrape real articles, leading to the creation of fully edited videos featuring text-to-speech audio and dynamic captions.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Selenium",
        color: "orange-text-gradient",
      },
      {
        name: "FFmpeg",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/725/812/datas/original.png",
    source_code_link: "https://devpost.com/software/artikulate",
  },
  {
    name: "Mixtape",
    description:
      "Mixtape is a collaborative music-sharing app available on iOS, Android, and the web, representing ACM SigApp’s official project for 2023-2024. This cross-platform application, developed using React Native and Rust (Actix Web), empowers users to collectively create and share playlists, fostering a collaborative music experience.",
    tags: [
      {
        name: "React Native",
        color: "orange-text-gradient",
      },
      {
        name: "Rust",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Purdue-ACM-SIGAPP/mixtape-frontend/dev/mixtape-rn-app-v0/assets/mixtape.png",
    source_code_link:
      "https://github.com/orgs/Purdue-ACM-SIGAPP/teams/mixtape/repositories",
  },
  {
    name: "Ascend Purdue Website",
    description:
      "Ascend Purdue Business Club's official website, developed using React and TypeScript with TailwindCSS styling. Deployed on AscendPurdue.com via Vercel, the site ensures seamless hosting and accessibility. The website has a modern, responsive, and mobile-friendly design, making it easy to navigate and showcases the club's core values and information.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.postimg.cc/JnYsytZs/Ascend-Purdue-Screenshot.png",
    source_code_link: "https://github.com/ColinWu0403/AscendWebsiteDev",
  },
  {
    name: "Shirt JS",
    description:
      "A shirt design website made with React and Three.js. You can design your own shirt by choosing a color, uploading an image for the logo, and adding a texture for the shirt. Using Dalle AI, you can also use AI to generate a logo or shirt texture. Finally, you can save a .png of the shirt from the website to your computer.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: Shirt_JS,
    source_code_link: "http://www.colinwu.me/ShirtJS/",
  },
  {
    name: "Furniture Marketplace",
    description:
      "CS 18000 GLD Capstone Project: A prototype furniture marketplace application made with Java. The application allows users to create an account as either a seller or buyer. Sellers can create stores and post furniture listings. The application allows buyers to search for and buy listed furniture by name, category, or price.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java SWING",
        color: "green-text-gradient",
      },
    ],
    image: FurnitureMarketplace,
    source_code_link: "https://github.com/ColinWu0403/CS180_Project5",
  },
  // {
  //   name: "",
  //   description: "",
  //   tags: [
  //     {
  //       name: "",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "",
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
