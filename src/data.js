export const CVData = {
  personalData: {
    name: "Vladimir Gelava",
    title: "Full Stack Developer",
    image:
      "https://res.cloudinary.com/dzxxb95vy/image/upload/v1647422968/1597708634972_lcv76h.jpg",
    contacts: [
      { type: "email", value: "lgelava7@gmail.com" },
      { type: "phone", value: "+995 555 25 85 40" },
      { type: "location", value: "Tbilisi" },
    ],
  },
  sections: [
    {
      type: "text",
      title: "Career Profile",
      content: "Former Content Manager, now - a Web Developer",
      icon: "usertie",
    },
    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Web Development",
          authority: "Smart Academy",
          authorityWebSite: "https://smartacademy.ge/",
          rightSide: "2018",
        },
      ],
    },
    {
      type: "experiences-list",
      title: "Experience",
      // description: "Optional",
      icon: "archive",
      items: [
        {
          title: "Lead Front End Developer",
          company: "Citadeli",
          companyWebSite: "https://www.citadeli.com/",
          companyMeta: "building materials",
          datesBetween: "2021 - Present",
          descriptionTags: ["Javascript", "React"],
        },
        {
          title: "Full Stack Developer",
          company: "Exceed Team",

          companyWebSite: "https://exceed-team.com/en",
          companyMeta: "EXPERT IN CRM DEVELOPMENT",
          datesBetween: "2018 - 2021",
          descriptionTags: ["Javascript", "React", "React Native", "Node"],
        },
        {
          title: "Intern",
          company: "Exceed Team",
          description: "Warming up.",
          companyWebSite: "https://exceed-team.com/en",
          companyMeta: "EXPERT IN CRM DEVELOPMENT",
          datesBetween: "2018",
        },
      ],
    },
    {
      type: "projects-list",
      title: "Portfolio",
      // description: "Optional",
      icon: "tasks",
      groups: [
        {
          sectionHeader: "Some of my projects",
          description: "in MERN STACK",
          items: [
            {
              title: "Social Media Mobile App",
              projectUrl: "https://github.com/LadoGelava910/soc-media",
              description:
                "Send me a letter to my email to get access to this project",
            },
            {
              title: "Ecommerce App",
              projectUrl: "https://github.com/LadoGelava910/gold",
              description: "Public Repository",
            },
            // {
            //   title: "We Support Ukraine App",
            //   projectUrl: "optional",
            //   // description: "Optional",
            // },
          ],
        },
      ],
    },

    {
      type: "common-list",
      title: "Languages",
      icon: "language",
      items: [
        {
          authority: "English",
          authorityMeta: "Professional",
        },
        {
          authority: "Russian",
          authorityMeta: "Professional",
        },
        {
          authority: "Georgian",
          authorityMeta: "Native",
        },
      ],
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: [
        "React JS",
        "React Native",
        "Javascript",
        "CSS",
        "HTML",
        "Node JS",
        "Express JS",
        "Mongoose",
        "MongoDB",
        "Git",
      ],
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: ["Game Design", "Game Development"],
    },
  ],
};
