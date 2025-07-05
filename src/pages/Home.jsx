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
  FaTwitter,
  FaLinkedin,
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
    <div className="h-screen bg-background p-4 overflow-hidden">
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
            <h1 className="text-3xl font-bold text-foreground mb-3 font-nebulica">
              Hi, I&apos;m <br className="md:hidden" />
              VARUN REWADI -
            </h1>
            <p className="text-base text-muted-foreground font-nebulica">
              a web designer and developer, studying{" "}
              <a
                href="https://engineering.nmims.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold underline hover:text-foreground"
              >
                @MPSTME-Mumbai.
              </a>
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
          <Link
            to="/projects"
            className="relative z-10 flex flex-col h-full w-full "
          >
            <span className="text-muted-foreground uppercase text-sm font-medium mb-2 font-nebulica">
              PROJECTS
            </span>
            <h2 className="text-xl text-foreground font-semibold mb-5 font-nebulica">
              Check out the cool stuff I have been building recently!
            </h2>
            <div className="flex justify-end items-end h-full">
              <ArrowUpRight className="w-5 h-5 border-4 border-white bg-accent rounded-xl text-foreground " />
            </div>
          </Link>
        </motion.div>

        {/* Avatar Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 flex items-center justify-center order-4 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 w-24 md:w-28 h-24 md:h-28 ">
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
          <Link
            to="/about"
            className="relative z-10 flex flex-col h-full w-full focus:outline-none"
          >
            <span className="text-muted-foreground uppercase text-sm font-medium mb-2 font-nebulica">
              ABOUT
            </span>
            <h2 className="text-xl lg:text-2xl text-foreground font-semibold mb-auto font-nebulica">
              Passionate about building and solving problems.
            </h2>
            <div className="flex justify-end ">
              <ArrowUpRight className="w-5 h-5 border-4 border-white bg-accent rounded-xl text-foreground " />
            </div>
          </Link>
        </motion.div>

        {/* Social Links Section */}
        <motion.div
          className="bg-card rounded-3xl p-6 md:p-8 col-span-6 md:col-span-3 lg:col-span-3 row-span-2 order-7 relative group cursor-pointer transition-all duration-300 hover:bg-white/60 dark:hover:bg-accent/50 hover:border hover:border-white dark:hover:border-border"
          variants={itemVariants}
        >
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-sm font-medium mb-3 md:mb-4 block font-nebulica">
              Social
            </span>
            <div className="flex-1 flex items-center">
              <div className="flex items-center justify-center flex-wrap gap-2 ">
                <a
                  href="https://x.com/VarunRewadi"
                  className="bg-accent rounded-xl p-2.5 md:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-7 h-7 md:w-6 md:h-6 text-foreground" />
                </a>
                <a
                  href="https://www.linkedin.com/in/varunrewadi04/"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-7 h-7 md:w-6 md:h-6 text-foreground" />
                </a>
                <a
                  href="mailto:varunrewadi.work@gmail.com"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-7 h-7 md:w-6 md:h-6 text-foreground" />
                </a>
                <a
                  href="https://github.com/VarunRewadi"
                  className="bg-accent rounded-xl p-2.5 md:p-3 lg:p-3 flex items-center justify-center hover:bg-accent/80 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-7 h-7 md:w-6 md:h-6 text-foreground" />
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
            <h2 className="text-xl text-foreground font-semibold mb-5 font-nebulica">
              Get direct updates straight into your inbox for free!
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 bg-accent border border-border rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-3 text-sm  text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 font-nebulica"
                aria-label="Email address"
              />
              <button className="shrink-0 bg-accent hover:bg-accent/80 text-muted-foreground rounded-full px-4 md:px-5 lg:px-6 py-2 md:py-3 text-sm  transition-colors font-nebulica whitespace-nowrap">
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
            <span className="text-muted-foreground uppercase text-xs mb-2 font-medium  block font-nebulica">
              Stack I use
            </span>
            <div className="flex-1 flex flex-col justify-between md:gap-2 ">
              <div className="h-1/2">
                <Marquee speed={40} gradient={false} className="h-full">
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaHtml5 className="w-6 h-6 text-[#E34F26]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaCss3Alt className="w-6 h-6 text-[#1572B6]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaReact className="w-6 h-6 text-[#61DAFB]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaNodeJs className="w-6 h-6 text-[#339933]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiExpress className="w-6 h-6" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiFramer className="w-6 h-6 text-[#0055FF]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaGitAlt className="w-6 h-6 text-[#F05032]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaGithub className="w-6 h-6" />
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
                    <SiCplusplus className="w-6 h-6 text-[#00599C]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaJava className="w-6 h-6 text-[#007396]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <FaPython className="w-6 h-6 text-[#3776AB]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiMongodb className="w-6 h-6 text-[#47A248]" />
                  </div>
                  <div className="bg-accent rounded-xl p-1.5 md:p-2 lg:p-2 flex items-center justify-center mx-1 md:mx-1.5 lg:mx-1.5">
                    <SiPostgresql className="w-6 h-6 text-[#336791]" />
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
