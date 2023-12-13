import {
    mobile,
    backend,
    creator,
    web,
    java,
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
    meta,
    starbucks,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "freelancing",
      company_name: "College & Client",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2023",
      points: [
        "Developing Website for College Student. ",
        "Developing Full Responsive Website for Individual Client & Startup Company.",
        "PC Technician Building Personal Computer | Like Gamming PC | ",
        "Creating Logo for Youtuber's and Gammers, Editing Normal video and Gamming videos for client",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Marketinlab",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Present",
      points: [
        "Software Developer | MERN Stack | Frontend & Backend.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Committed to staying updated with the latest industry trends and technologies to bring innovative solutions to projects.",
        "Working effectively within a team environment, facilitating communication and contributing to the success of collaborative projects.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "His commitment to creating seamless websites is unparalleled. Aryan's work not only meets but elevates industry standards. We're thrilled with the results.",
      name: "Harish Jangid",
      designation: "Analyst",
      company: "Northern Trust",
      image: "https://media.licdn.com/dms/image/D4D03AQF0oryykX9E8w/profile-displayphoto-shrink_400_400/0/1693141603341?e=1707955200&v=beta&t=DjNaziu16t-CHX4pMECmEUco5PLg-JVruCU0ukxHSzo",
    },
    {
      testimonial:
        "His skill in full-stack web development shines through in the flawless and responsive sites he delivers. Collaborating with Aryan is a guarantee of excellence.",
      name: "Ayaan Shaikh",
      designation: "Full Stack Java Developer",
      company: "SPPU",
      image: "https://media.licdn.com/dms/image/D4D35AQFC1Vw3tqilYg/profile-framedphoto-shrink_400_400/0/1697726000915?e=1703066400&v=beta&t=DI21QtL3Lm1QEWdp5WPRz1_7grcMeZ8b-j3l1rWtmcE",
    },
    {
      testimonial:
        "I had the pleasure of working with Aryan on a web development project, and I am thoroughly impressed. He is a skilled developer who brings creativity and technical expertise to the table.",
      name: "Sardar Pathan",
      designation: "Jr.Associate ",
      company: "Clean Harbors India",
      image: "https://media.licdn.com/dms/image/D4D03AQEFk0mRkVpEPw/profile-displayphoto-shrink_400_400/0/1694636516732?e=1707955200&v=beta&t=HSi3Ka_Bn7zkZzId696g0rkG1iclbd3Q-TAh0KZlLFQ",
    },
  ];
  
  const projects = [
    {
      name: "Saroj Mart",
      description:
        "Introducing Saroj Mart, your ultimate destination for a  online shopping experience. 🛍️✨ This project, created for practice, showcases a visually stunning and user-friendly interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "FireBase",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "purpal-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/aryansaroj77/SarojmartEcommerce.git",
    },
    {
      name: "Synchronize IT Solution",
      description:
        "I have created this website for my client, Synchronize IT Solution, a company offering BPO and KPO services. 🌍 Explore the live demo by clicking on the GitHub icon.",
      tags: [
        {
          name: "JS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML & CSS",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/aryansaroj77/SYNCHRONIZE-IT-SOLUTION.git",
    },
    {
      name: "MBAChaiWala",
      description:
        " Building this clone allowed me to explore the intricate world of web development and design, from crafting user interfaces to implementing complex features. .",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };