import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import { blogs, getFeaturedBlogs, getRegularBlogs } from "../data/blogs";

export default function Blogs() {
  useEffect(() => {
    document.body.classList.add("allow-scroll");
    return () => {
      document.body.classList.remove("allow-scroll");
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary font-nebulica mb-4">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground font-nebulica">
              Thoughts, tutorials, and insights about web development, design,
              and technology.
            </p>
          </div>

          <motion.div
            className="grid gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Featured Blog */}
            {getFeaturedBlogs().map((blog, index) => (
              <motion.article
                key={index}
                className="bg-card rounded-3xl p-6 md:p-8 border border-border hover:border-accent transition-colors cursor-pointer group"
                variants={itemVariants}
                onClick={(e) => {
                  window.open(blog.link, "_blank");
                  e.currentTarget.blur();
                }}
                tabIndex={0}
                role="button"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    window.open(blog.link, "_blank");
                    e.currentTarget.blur();
                  }
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium pointer-events-none">
                        Featured
                      </span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blog.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 font-nebulica  transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                      {blog.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-foreground">
                      <span className="font-medium">Read more</span>
                      <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            {/* Regular Blogs Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {getRegularBlogs().map((blog, index) => (
                <motion.article
                  key={index}
                  className="bg-card rounded-3xl p-6 border border-border hover:border-accent transition-colors cursor-pointer group"
                  variants={itemVariants}
                  onClick={(e) => {
                    window.open(blog.link, "_blank");
                    e.currentTarget.blur();
                  }}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      window.open(blog.link, "_blank");
                      e.currentTarget.blur();
                    }
                  }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 font-nebulica group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-foreground">
                    <span className="font-medium text-sm">Read more</span>
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
