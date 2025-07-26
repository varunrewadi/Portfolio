export const blogs = [
  {
    title: "Building a Modern Portfolio with React and Framer Motion",
    description:
      "A deep dive into creating smooth animations and responsive design patterns for modern web portfolios.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["React", "Framer Motion", "Web Development"],
    link: "#",
    featured: true,
  },
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    description:
      "Exploring emerging technologies and frameworks that are shaping the future of web development.",
    date: "February 28, 2024",
    readTime: "8 min read",
    tags: ["Web Development", "Technology", "Trends"],
    link: "#",
    featured: false,
  },
  {
    title: "Optimizing React Performance: Best Practices and Techniques",
    description:
      "Learn how to improve your React application's performance with proven optimization strategies.",
    date: "February 15, 2024",
    readTime: "6 min read",
    tags: ["React", "Performance", "JavaScript"],
    link: "#",
    featured: false,
  },
  {
    title: "UI/UX Design Principles for Better User Experience",
    description:
      "Understanding the fundamental principles that make interfaces intuitive and user-friendly.",
    date: "January 30, 2024",
    readTime: "7 min read",
    tags: ["UI/UX", "Design", "User Experience"],
    link: "#",
    featured: false,
  },
  {
    title: "Getting Started with TypeScript in React Projects",
    description:
      "A beginner's guide to implementing TypeScript in React applications for better code quality.",
    date: "January 15, 2024",
    readTime: "4 min read",
    tags: ["TypeScript", "React", "JavaScript"],
    link: "#",
    featured: false,
  },
  {
    title: "Deploying React Apps: From Development to Production",
    description:
      "Step-by-step guide to deploying React applications with modern deployment strategies.",
    date: "January 5, 2024",
    readTime: "9 min read",
    tags: ["Deployment", "React", "DevOps"],
    link: "#",
    featured: false,
  },
];

// Helper functions for blog data management
export const getFeaturedBlogs = () => blogs.filter((blog) => blog.featured);

export const getRegularBlogs = () => blogs.filter((blog) => !blog.featured);

export const getBlogsByTag = (tag) =>
  blogs.filter((blog) => blog.tags.includes(tag));

export const getBlogsByDate = (startDate, endDate) => {
  return blogs.filter((blog) => {
    const blogDate = new Date(blog.date);
    return blogDate >= startDate && blogDate <= endDate;
  });
};

export const searchBlogs = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(lowercaseQuery) ||
      blog.description.toLowerCase().includes(lowercaseQuery) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
