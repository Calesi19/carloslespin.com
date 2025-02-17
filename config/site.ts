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
  title: "Software Engineer",
  about:
    "Full stack engineer specializing in backend development with .NET and Go, also skilled in React and TypeScript. Based in Minnesota, looking for Cloud and Backend roles. Certified with a bachelor's degree and extensive experience.",
  email: "carlos.lespin.silva@gmail.com",
  phone: "787-988-9447",
  links: {
    linkedin: "https://www.linkedin.com/in/calesi19/",
    github: "https://github.com/Calesi19",
    portfolio: "https://www.carloslespin.com/",
  },
  experience: [
    {
      title: "Fullstack Software Engineer",
      company: "DMSi Software",
      date: "Aug 2024 - Present",
      location: "Minneapolis, Minnesota",
      description: null,
      bullets: [
        "Built scalable .NET Core APIs and designed optimized SQL and MongoDB database schemas.",
        "Managed API deployments on IIS and Nginx servers.",
        "Developed Blazor components and styled interfaces with Tailwind CSS.",
        "Modernized legacy Visual Basic codebases through refactoring.",
        "Implemented JWT - based authentication and authorization.",
        "Automated internal workflows using Python scripts.",
        "Utilized Docker for streamlined local development and production deployments.",
        "Implemented logging and monitoring for .NET microservices.",
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "DMSi Software",
      date: "Mar 2024 - Aug 2024",
      location: "Minneapolis, Minnesota",
      description: null,
      bullets: [
        "Developed REST APIs for seamless integration with third - party ERP systems.",
        "Conducted robust unit and integration testing with XUnit.",
        "Established CI/ CD pipelines for automated testing and deployment using TFS and GitLab CI/ CD."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "4Human Co",
      date: "Dec 2023 - Jun 2024",
      location: "Remote",
      description: null,
      bullets: [
        "Built websites for human rights advocacy using React, Express.js, and AWS.",
        "Designed and implemented a user- friendly UX / UI for an e- commerce site.",
        "Developed reusable frontend components with React and Tailwind CSS.",
        "Created and optimized backend endpoints using Express.js, Prisma ORM, and PostgreSQL.",
      ]
    },
    {
      title: "Network Operation Specialist",
      company: "TransCore",
      date: "Oct 2023 - Jan 2024",
      location: "Orlando, Florida",
      description: null,
      bullets: [
        "Monitored Linux and Windows production servers, ensuring system uptime and reliability.",
        "Coordinated field technician dispatch and resolved hardware / software issues.",
        "Diagnosed and escalated complex problems with detailed documentation.",
        "Maintained comprehensive call logs and system performance records."
      ]
    },
    {
      title: "Technical Support Specialist / DP Team",
      company: "BYU-Pathway Worldwide",
      date: "Aug 2021 - Sep 2022",
      location: "Salt Lake City, Utah",
      description: null,
      bullets: [
        "Built a Python web scraper, improving curriculum analysis efficiency by 10x.",
        "Troubleshot semester planning software, enhancing system performance.",
        "Partnered with Technical Support and Development teams to address system bugs efficiently.",
      ]
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
      date: "2014 - 2017",
      location: "Fajardo, Puerto Rico",
      description: "",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Blazor"],
    },
    {
      title: "Backend",
      items: [".NET", "ExpressJs", "HTMX", "Serverless Functions"],
    },
    {
      title: "Database",
      items: ["SQL", "Firestore", "AWS RDS", "MongoDB"],
    },
    {
      title: "DevOps",
      items: [
        "Docker",
        "Git",
        "CI/CD Pipelines",
        "AWS",
        "Google Cloud",
        "Vim",
        "Linux",
      ],
    },
    {
      title: "Languages",
      items: ["Python", "C++", "Go", "TypeScript", "C#"],
    },
  ],
};
