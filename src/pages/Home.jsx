import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Moon, Sun } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import Marquee from "react-fast-marquee"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  const techStack = [
    { name: "React", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Tailwind", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Next.js", icon: "/placeholder.svg?height=40&width=40" },
    { name: "TypeScript", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Node.js", icon: "/placeholder.svg?height=40&width=40" },
  ]

  return (
    <div className="h-screen bg-black p-4 overflow-hidden">
      <motion.div
        className="grid grid-cols-12 grid-rows-6 gap-4 h-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Section - Top Left */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-12 md:col-span-6 row-span-2"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-nebulica">Hi, I&apos;m VARUN-</h1>
          <p className="text-zinc-400 text-lg md:text-xl font-nebulica">
            a web designer and developer, studying in MPSTME Mumbai.
          </p>
        </motion.div>

        {/* Dark Mode Toggle - Top Right */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 flex items-center justify-center order-3 md:order-2"
          variants={itemVariants}
        >
          <button
            onClick={toggleDarkMode}
            className="relative w-16 h-8 bg-zinc-800 rounded-full p-1 flex items-center"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div
              className={cn(
                "absolute w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center transition-transform duration-300",
                darkMode ? "translate-x-8" : "translate-x-0",
              )}
            >
              {darkMode ? <Moon className="w-4 h-4 text-yellow-300" /> : <Sun className="w-4 h-4 text-yellow-300" />}
            </div>
          </button>
        </motion.div>

        {/* Projects Section - Top Right */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 md:row-span-4 order-2 md:order-3"
          variants={itemVariants}
        >
          <div className="flex flex-col h-full">
            <span className="text-zinc-500 uppercase text-sm font-medium mb-2 font-nebulica">PROJECTS</span>
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-auto font-nebulica">
              Check out what I have been building recently!
            </h2>
            <div className="flex justify-end mt-4">
              <Link
                to="/projects"
                className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                aria-label="View projects"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Avatar Section - Middle Left */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 flex items-center justify-center order-4"
          variants={itemVariants}
        >
          <div className="w-32 h-32 relative">
            <img
              src="/bitmoji.png?height=128&width=128"
              alt="Avatar"
              className="rounded-full w-full h-full object-cover border-2 border-white"
            />
          </div>
        </motion.div>

        {/* About Section - Middle Right */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-6 md:col-span-6 row-span-2 order-5"
          variants={itemVariants}
        >
          <div className="flex flex-col h-full">
            <span className="text-zinc-500 uppercase text-sm font-medium mb-2 font-nebulica">ABOUT</span>
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-auto font-nebulica">
              Passionate about building and solving problems.
            </h2>
            <div className="flex justify-end mt-4">
              <Link
                to="/about"
                className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                aria-label="Learn more about me"
              >
                <ArrowUpRight className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section - Bottom Left */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-12 md:col-span-6 row-span-2 order-6"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-white font-semibold mb-6 font-nebulica">
            Get direct updates straight into your inbox for free!
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-zinc-800 border border-zinc-700 rounded-full px-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-600 font-nebulica"
              aria-label="Email address"
            />
            <button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-6 py-3 transition-colors font-nebulica">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Tech Stack Section - Bottom Middle */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 order-7"
          variants={itemVariants}
        >
          <span className="text-zinc-500 uppercase text-sm font-medium mb-4 block font-nebulica">Stack I use</span>
          <div className="overflow-hidden">
            <Marquee speed={40} gradient={false} className="py-2">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl p-3 flex items-center justify-center mx-2">
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-10 h-10" />
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Social Links Section - Bottom Right */}
        <motion.div
          className="bg-zinc-900 rounded-3xl p-4 col-span-6 md:col-span-3 row-span-2 grid grid-cols-2 grid-rows-2 gap-4 order-8"
          variants={itemVariants}
        >
          <a
            href="https://twitter.com"
            className="bg-zinc-800 rounded-xl p-4 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="w-8 h-8 text-white"
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
            href="https://linkedin.com"
            className="bg-zinc-800 rounded-xl p-4 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-8 h-8 text-white"
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
            href="https://instagram.com"
            className="bg-zinc-800 rounded-xl p-4 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="Instagram"
          >
            <svg
              className="w-8 h-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.163C3.204 2.163 0 3.204 0 12C0 20.796 3.204 23.837 12 23.837C20.796 23.837 24 20.796 24 12C24 3.204 20.796 2.163 12 2.163ZM12 21.837C4.163 21.837 2 20.837 2 12C2 4.163 4.163 3.163 12 3.163C19.837 3.163 22 4.163 22 12C22 19.837 19.837 21.837 12 21.837Z"
                fill="currentColor"
              />
              <path
                d="M12 7.163C9.204 7.163 7.163 9.204 7.163 12C7.163 14.796 9.204 16.837 12 16.837C14.796 16.837 16.837 14.796 16.837 12C16.837 9.204 14.796 7.163 12 7.163ZM12 15.163C10.163 15.163 8.837 13.837 8.837 12C8.837 10.163 10.163 8.837 12 8.837C13.837 8.837 15.163 10.163 15.163 12C15.163 13.837 13.837 15.163 12 15.163Z"
                fill="currentColor"
              />
              <path
                d="M18.5 5.5C18.5 6.163 17.963 6.7 17.3 6.7C16.637 6.7 16.1 6.163 16.1 5.5C16.1 4.837 16.637 4.3 17.3 4.3C17.963 4.3 18.5 4.837 18.5 5.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://github.com"
            className="bg-zinc-800 rounded-xl p-4 flex items-center justify-center hover:bg-zinc-700 transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-8 h-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.477 2 2 6.477 2 12C2 16.991 4.925 21.128 9.238 22.612C9.901 22.766 10.1 22.361 10.1 22.006C10.1 21.676 10.088 20.916 10.088 20.106C7 20.679 6.38 19.102 6.38 19.102C5.71 17.7 5.25 17.3 5.25 17.3C4.1 16.3 5.35 16.3 5.35 16.3C6.6 16.3 7.25 17.5 7.25 17.5C8.4 19.5 10.1 19.1 10.2 18.9C10.3 18.6 10.4 18.3 10.5 18.1C8.2 17.9 5.9 17 5.9 12.1C5.9 10.7 6.4 9.6 7.25 8.8C7.15 8.5 6.7 7.2 7.3 5.3C7.3 5.3 8.4 5 10.2 6.5C11 6.2 11.9 6 12.8 6C13.7 6 14.6 6.2 15.4 6.5C17.2 5 18.3 5.3 18.3 5.3C18.9 7.2 18.4 8.5 18.3 8.8C19.2 9.6 19.7 10.7 19.7 12.1C19.7 17 17.3 17.9 15 18.1C15.3 18.3 15.5 18.8 15.5 19.5C15.5 20.6 15.5 21.5 15.5 22.006C15.5 22.361 15.7 22.766 16.4 22.612C18.712 21.131 21.639 16.992 21.639 12C21.639 6.477 17.162 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
} 