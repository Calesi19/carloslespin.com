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
      title: "Full-Stack Software Engineer",
      company: "DMSi Software",
      date: "Oct 2024 - Present",
      location: "Woodbury, Minnesota",
      description: null,
      bullets: [
        "Led the architectural rewrite of legacy VB.NET applications to a modern React, .NET, and PostgreSQL stack.",
        "Architected secure RESTful APIs, integrated cloud storage buckets, and implemented Model Context Protocol (MCP) servers.",
        "Authored comprehensive Agile/Scrum Jira tickets for sprint deliverables.",
        "Built automated CI/CD pipelines, eliminating ~40 team hrs/week of manual testing and multi-environment deployments.",
        "Managed internal application servers (Linux & Windows) to ensure high availability and continuous uptime.",
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "DMSi Software",
      date: "Mar 2024 - Oct 2024",
      location: "Woodbury, Minnesota",
      description: null,
      bullets: [
        "Engineered critical order entry features to optimize transaction workflows.",
        "Developed comprehensive logging and audit systems to improve application observability and troubleshooting capabilities.",
        "Automated complex ETL workflows and built internal data management tooling using Python and SQL."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "4Human (Charity Project)",
      date: "Dec 2023 - Mar 2024",
      location: "Remote",
      description: null,
      bullets: [
        "Built a full-stack e-commerce platform for an African charity using React and Express.js.",
        "Architected scalable backend infrastructure leveraging AWS S3, alongside managed SQL and NoSQL databases.",
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
      title: "Technical Support Specialist & Advisor",
      company: "BYU-Pathway Worldwide",
      date: "Aug 2021 - Sep 2022",
      location: "Remote",
      description: null,
      bullets: [
        "Automated student curriculum extraction with Python, reducing manual analysis time by over 90%.",
        "Collaborated with development teams to troubleshoot semester planning software and resolve core system bugs.",
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
