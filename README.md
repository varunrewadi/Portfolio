# Portfolio Website

A modern portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Dark mode support
- Smooth animations
- Project showcase
- About section
- Blog section
- Contact information
- Social media links

## Tech Stack

- React
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/username/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build files will be in the `dist` directory.

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── data/          # Data files (blogs, projects, etc.)
  ├── pages/         # Page components
  ├── lib/           # Utility functions
  ├── App.jsx        # Main App component
  ├── main.jsx       # Entry point
  └── index.css      # Global styles
```

## Data Organization

The project uses separate data files to keep the code organized and maintainable:

- `src/data/blogs.js` - Contains all blog post data and helper functions
- `src/data/projects.js` - Contains all project data and helper functions

### Helper Functions Available

**Blogs (`src/data/blogs.js`):**
- `getFeaturedBlogs()` - Get featured blog posts
- `getRegularBlogs()` - Get non-featured blog posts
- `getBlogsByTag(tag)` - Filter blogs by tag
- `searchBlogs(query)` - Search blogs by title, description, or tags

**Projects (`src/data/projects.js`):**
- `getProjectsByTag(tag)` - Filter projects by tag
- `getProjectsWithLinks()` - Get projects with live links
- `getProjectsWithGithub()` - Get projects with GitHub repositories
- `searchProjects(query)` - Search projects by title, description, or tags
- `getFeaturedProjects()` - Get featured projects (first 3)

## Customization

1. Update the project information in `src/data/projects.js`
2. Modify the about section in `src/pages/About.jsx`
3. Update blog content in `src/data/blogs.js`
4. Update social media links in `src/pages/Home.jsx`
5. Customize the theme colors in `tailwind.config.js`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
