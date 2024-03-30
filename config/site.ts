export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Carlos Lespin",
  description:
    "Carlos Lespin: Software Engineering Student showcasing a diverse portfolio of innovative projects and technical expertise. Explore my work to witness my passion for problem-solving and coding excellence.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "https://www.linkedin.com/in/calesi19/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/calesi19/",
    },
    {
      label: "GitHub",
      href: "https://www.linkedin.com/in/calesi19/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/calesi19/",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/calesi19/",
    github: "https://github.com/Calesi19",
    docs: "https://www.linkedin.com/in/calesi19/",
    discord: "https://discordapp.com/users/618249435385692160",
  },
};

export const Resume = {
  name: "Carlos Lespin",
  title: "Junior Software Engineer",
  about:
    "As a recent Software Engineering graduate, I bring a blend of front-end expertise and a growing proficiency in back-end and cloud engineering. Currently based in Florida, I am enhancing my skills through an IT job and a software engineering internship while pursuing AWS certifications. My passion lies in contributing to team success, taking on leadership roles, and continuously learning to fill knowledge gaps. With a commitment to coding daily and a keen interest in joining a collaborative team, I am excited to apply my skills and adapt quickly to new technologies.",
  email: "carlos.lespin.silva@gmail.com",
  phone: "787-988-9447",
  links: {
    linkedin: "https://www.linkedin.com/in/calesi19/",
    github: "https://github.com/Calesi19",
    portfolio: "https://www.carloslespin.com/",
  },
  experience: [
    {
      title: "Software Engineer Intern",
      company: "DMSi Software",
      date: "Mar 2024 - Present",
      location: "Minneapolis, Minnesota",
      description:
        "Responsible for developing and implementing Web APIs in .NET for new features in ERP systems designed for the lumber industry, ensuring seamless integration and high-quality standards through collaboration with cross-functional teams and thorough testing.",
    },
    {
      title: "Software Engineer Intern",
      company: "4Human Co",
      date: "Dec 2023 - Present",
      location: "Remote",
      description:
        "Web development, specializing in creating impactful websites for human rights advocacy in Africa using React, Express.Js, and AWS. Helped design and create a good UX/UI experience for an e-commerce website. Collaborated in the creation of Frontend components using React and Tailwind CSS. Developed server endpoints using ExpressJs, Prisma ORM, and PostgreSQL database.",
    },
    {
      title: "Network Operation Specialist",
      company: "TransCore",
      date: "Oct 2023 - Jan 2024",
      location: "Orlando, Florida",
      description:
        "Monitored and analyzed Linux and Windows production servers, coordinating the dispatch of field service technicians. Addressed both software and hardware-related issues professionally with both internal and external customers. Recognized, researched, isolated, and resolved arising issues, escalating complex problems when necessary. Logged calls, maintained history records, and managed problem documentation. Ensured meticulous attention to detail in communication and system monitoring.",
    },
    {
      title: "Technical Support Specialist / DP Team",
      company: "BYU-Pathway Worldwide",
      date: "Aug 2021 - Sep 2022",
      location: "Salt Lake City, Utah",
      description:
        "Created a Python web scraper, boosting curriculum analysis efficiency by 10x. Specialized in troubleshooting BYU's semester planning software, contributing to enhanced system performance and student user experience. Collaborated closely with Technical Support and Development teams, ensuring accurate and efficient reporting of system bugs.",
    },
  ],
  education: [
    {
      title: "Software Engineering",
      degree: "Bachelor of Science",
      institution: "Brigham Young University - Idaho",
      date: "2020 - 2023",
      location: "Rexburg, Idaho",
      description: "Emphasis: Software Design & Web Development",
    },
    {
      title: "Architectural Drafting",
      degree: "High School Diploma",
      institution: "Ana Delia Flores Vocational High School",
      date: "2020 - 2023",
      location: "Rexburg, Idaho",
      description: "",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Svelte"],
    },
    {
      title: "Backend",
      items: [
        ".NET",
        "ExpressJs",
        "Django",
        "HTMX",
        "FastAPI",
        "Serverless Functions",
      ],
    },
    {
      title: "Database",
      items: [
        "SQL",
        "PostrgeSQL",
        "Firebase",
        "AWS RDS",
        "MySQL",
        "MongoDB",
        "HTMX",
      ],
    },
    {
      title: "DevOps",
      items: ["Docker", "GitHub", "Markdown", "AWS", "Google Cloud"],
    },
    {
      title: "Languages",
      items: ["Python", "JavaScript", "C++", "Go", "Dart", "TypeScript, C#"],
    },
  ],
};
