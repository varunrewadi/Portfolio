import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Moon, Sun, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiFramer,
  SiCplusplus,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function Home({ isDark, setIsDark }) {
  const toggleTheme = () => setIsDark(!isDark);

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
    <div className="h-screen bg-background p-4 md:p-6 lg:p-8 overflow-hidden">
      <motion.div
        className="grid grid-cols-12 grid-rows-6 gap-4 md:gap-6 h-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Section - Top Left */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-12 md:col-span-6 lg:col-span-6 row-span-2 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 font-nebulica">
              Hi, I&apos;m <br className="md:hidden" />
              VARUN REWADI -
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground font-nebulica">
              a web designer and developer, studying in MPSTME Mumbai.
            </p>
          </div>
        </motion.div>

        {/* Theme Switch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 flex items-center justify-center order-3 md:order-2 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <button
            onClick={toggleTheme}
            className="relative z-10 w-16 h-16 rounded-full bg-accent hover:bg-accent/80 transition-colors duration-300 flex items-center justify-center"
          >
            {isDark ? (
              <Sun className="h-8 w-8 text-foreground" />
            ) : (
              <Moon className="h-8 w-8 text-foreground" />
            )}
          </button>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 md:row-span-4 order-2 md:order-3 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-xs md:text-sm font-medium mb-2 font-nebulica">
              PROJECTS
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-auto font-nebulica">
              Check out what I have been building recently!
            </h2>
            <div className="flex justify-end mt-4">
              <Link
                to="/projects"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="View projects"
              >
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Avatar Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 flex items-center justify-center order-4 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32">
            <img
              src="/bitmoji.png?height=128&width=128"
              alt="Avatar"
              className="rounded-full w-full h-full object-cover border-2 border-foreground"
            />
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-6 lg:col-span-6 row-span-2 order-5 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-xs md:text-sm font-medium mb-2 font-nebulica">
              ABOUT
            </span>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-foreground font-semibold mb-auto font-nebulica">
              Passionate about building and solving problems.
            </h2>
            <div className="flex justify-end mt-4">
              <Link
                to="/about"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Learn more about me"
              >
                <ArrowUpRight className="w-5 h-5 text-foreground" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 order-7 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-xs md:text-sm font-medium mb-3 md:mb-4 block font-nebulica">
              Social
            </span>
            <div className="flex-1 flex items-center">
              <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 w-full">
                <a
                  href="https://x.com/VarunRewadi"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-7 h-7 md:w-8 lg:w-8 text-foreground"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/varunrewadi04/"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-7 h-7 md:w-8 lg:w-8 text-foreground"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      fill="currentColor"
                    />
                    <path d="M6 9H2V21H6V9Z" fill="currentColor" />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:varunrewadi.work@gmail.com"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-7 h-7 md:w-8 lg:w-8 text-foreground" />
                </a>
                <a
                  href="https://github.com/VarunRewadi"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-7 h-7 md:w-8 lg:w-8 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-12 md:col-span-6 lg:col-span-6 row-span-2 order-8 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10">
            <h2 className="text-xl md:text-2xl lg:text-2xl text-foreground font-semibold mb-4 md:mb-6 font-nebulica">
              Get direct updates straight into your inbox for free!
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-accent border border-border rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-3 text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 font-nebulica"
                aria-label="Email address"
              />
              <button className="shrink-0 bg-accent hover:bg-accent/80 text-muted-foreground rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-3 text-sm md:text-base transition-colors font-nebulica whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 order-6 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-xs md:text-sm font-medium mb-3 md:mb-4 block font-nebulica">
              Stack I use
            </span>
            <div className="flex-1 flex flex-col justify-between gap-4 md:gap-6">
              <div className="h-1/2">
                <Marquee speed={40} gradient={false} className="h-full">
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaHtml5 className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#E34F26]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaCss3Alt className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#1572B6]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiTailwindcss className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#06B6D4]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaReact className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#61DAFB]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaNodeJs className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#339933]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiExpress className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiFramer className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#0055FF]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaGitAlt className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#F05032]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaGithub className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9" />
                  </div>
                </Marquee>
              </div>
              <div className="h-1/2">
                <Marquee
                  speed={40}
                  gradient={false}
                  className="h-full"
                  direction="right"
                >
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiCplusplus className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#00599C]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaJava className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#007396]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaPython className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#3776AB]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiMongodb className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#47A248]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiPostgresql className="w-7 h-7 md:w-8 lg:w-9 md:h-8 lg:h-9 text-[#336791]" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
