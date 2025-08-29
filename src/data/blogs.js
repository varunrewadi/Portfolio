export const blogs = [
  {
    title: "Exploring AI Automation Tools",
    description:
      "An in-depth breakdown of 4 powerful AI automation tools, highlighting how each is revolutionizing productivity, streamlining workflows, and making everyday tasks easier for users across industries.",
    date: "August 29, 2025",
    readTime: "5 min read",
    tags: ["AI", "Automation", "Productivity", "Tools"],
    link: "https://medium.com/@varunrewadi.vr005/exploring-ai-automation-tools-116e5c431f7c",
    featured: true,
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
