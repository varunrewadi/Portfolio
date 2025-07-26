export const projects = [
  {
    title: "Travix",
    description:
      "A travel booking website with user-friendly interface, featuring two-factor authentication and real-time price updates. Built with PostgreSQL for secure database management and travel booking APIs.",
    image: "/travix.png",
    tags: ["EJS", "TailwindCSS", "Google-OAuth", "PostgreSQL", "Supabase"],
    link: "https://travix.vercel.app/",
    github: "https://github.com/varunrewadi/travix",
  },
  {
    title: "Image Processing Application",
    description:
      "A GUI-based application for image editing with features like grayscale, blur, and pencil sketch filters. Includes real-time effects and image capture functionality using OpenCV and Tkinter.",
    image: "/image-processing.png",
    tags: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy", "GUI Programming"],
    github: "https://github.com/varunrewadi/image-processing",
  },
  {
    title: "IETE Website",
    description:
      "A responsive website for IETE-SF MPSTME built using no-code platforms. Showcases organizational information with smooth navigation, mobile support, and an engaging user interface.",
    image: "/iete.png",
    tags: ["Figma", "Wix/Wix-Studio", "UI/UX Design"],
    link: "https://ietempstme.com",
  },
  {
    title: "Npm Package Resume",
    description:
      "My personal resume available as an NPM package. Easily installable and customizable for developers to showcase their skills and experience in a CLI format.",
    image: "npm", // Special identifier for npm icon
    tags: ["JavaScript", "Node.js", "NPM", "CLI Resume"],
    link: "https://www.npmjs.com/package/resume-varun",
    github: "https://github.com/varunrewadi/npm-resume",
  },
  {
    title: "Itinerary Planner UiPath Bot",
    description:
      "Created a UiPath automation bot that generates personalized travel plans. It collects user input, fetches durations and images via Google Maps API, and emails a polished Word itinerary.",
    image: "uipath", // Special identifier for UiPath icon
    tags: ["UiPath Studio", "Google Maps API", "Word Automation", "SMTP"],
    github:
      "https://github.com/varunrewadi/ui-path-itinerary-planner-automation",
  },
  {
    title: "React Practice Projects",
    description:
      "Built a set of beginner-friendly React projects to practice key concepts. Each app focuses on fundamentals like state, props, routing, and component design.",
    image: "react", // Special identifier for React icon
    tags: ["ReactJs", "Vite", "TailwindCSS", "Web Development"],
    github: "https://github.com/varunrewadi/React-Practice-Projects",
  },
];

// Helper functions for project data management
export const getProjectsByTag = (tag) =>
  projects.filter((project) => project.tags.includes(tag));

export const getProjectsWithLinks = () =>
  projects.filter((project) => project.link);

export const getProjectsWithGithub = () =>
  projects.filter((project) => project.github);

export const searchProjects = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowercaseQuery) ||
      project.description.toLowerCase().includes(lowercaseQuery) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedProjects = () => projects.slice(0, 3); // First 3 projects as featured
