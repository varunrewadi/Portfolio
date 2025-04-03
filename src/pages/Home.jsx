import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Moon, Sun, Star, Code, Terminal, Database, Server, Cpu, Network, Shield, Zap, Apple, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import Marquee from "react-fast-marquee"
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJava, FaPython,
  FaDatabase
} from "react-icons/fa"
import { 
  SiTailwindcss, SiExpress, SiFramer, SiCplusplus, SiMongodb, SiPostgresql 
} from "react-icons/si"

export default function Home() {
  const canvasRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }, [])

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  useEffect(() => {
    // Update document class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        mousePos.x, mousePos.y, 0,
        mousePos.x, mousePos.y, 200
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw interactive elements
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const dx = mousePos.x - x
        const dy = mousePos.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const size = (1 - distance / 200) * 10
          const opacity = (1 - distance / 200) * 0.5

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePos])

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
    <div className="h-screen bg-background p-4 overflow-hidden">
      <motion.div
        className="grid grid-cols-12 grid-rows-6 gap-4 h-full max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Section - Top Left */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-12 md:col-span-6 row-span-2 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-nebulica">Hi, I&apos;m VARUN-</h1>
            <p className="text-muted-foreground text-lg md:text-xl font-nebulica">
              a web designer and developer, studying in MPSTME Mumbai.
            </p>
          </div>
        </motion.div>

        {/* Theme Switch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 flex items-center justify-center order-3 md:order-2 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
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

        {/* Projects Section - Top Right */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 md:row-span-4 order-2 md:order-3 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-sm font-medium mb-2 font-nebulica">PROJECTS</span>
            <h2 className="text-2xl md:text-3xl text-foreground font-semibold mb-auto font-nebulica">
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

        {/* Avatar Section - Middle Left */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 flex items-center justify-center order-4 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10 w-32 h-32">
            <img
              src="/bitmoji.png?height=128&width=128"
              alt="Avatar"
              className="rounded-full w-full h-full object-cover border-2 border-foreground"
            />
          </div>
        </motion.div>

        {/* About Section - Middle Right */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-6 row-span-2 order-5 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-sm font-medium mb-2 font-nebulica">ABOUT</span>
            <h2 className="text-2xl md:text-3xl text-foreground font-semibold mb-auto font-nebulica">
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

        {/* Newsletter Section - Bottom Left */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-12 md:col-span-6 row-span-2 order-6 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10">
            <h2 className="text-2xl text-foreground font-semibold mb-6 font-nebulica">
              Get direct updates straight into your inbox for free!
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 ">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-accent border border-border rounded-full px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 font-nebulica"
                aria-label="Email address"
              />
              <button className="bg-accent hover:bg-accent/80 text-muted-foreground rounded-full px-6 py-3 transition-colors font-nebulica">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Section - Bottom Middle */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 order-7 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10">
            <span className="text-muted-foreground uppercase text-sm font-medium mb-4 block font-nebulica">Stack I use</span>
            <div className="overflow-hidden">
              <Marquee speed={40} gradient={false} className="py-2">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaHtml5 className="w-10 h-10 text-[#E34F26]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaCss3Alt className="w-10 h-10 text-[#1572B6]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaReact className="w-10 h-10 text-[#61DAFB]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaNodeJs className="w-10 h-10 text-[#339933]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiExpress className="w-10 h-10" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiFramer className="w-10 h-10 text-[#0055FF]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaGitAlt className="w-10 h-10 text-[#F05032]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaGithub className="w-10 h-10" />
                </div>
              </Marquee>
              <Marquee speed={40} gradient={false} className="py-2" direction="right">
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiCplusplus className="w-10 h-10 text-[#00599C]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaJava className="w-10 h-10 text-[#007396]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <FaPython className="w-10 h-10 text-[#3776AB]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiMongodb className="w-10 h-10 text-[#47A248]" />
                </div>
                <div className="bg-accent rounded-xl p-3 flex items-center justify-center mx-2">
                  <SiPostgresql className="w-10 h-10 text-[#336791]" />
                </div>
              </Marquee>
            </div>
          </div>
        </motion.div>

        {/* Social Links Section - Bottom Right */}
        <motion.div
          className="bg-card rounded-3xl p-8 col-span-6 md:col-span-3 row-span-2 order-8 relative group cursor-pointer transition-all duration-300 hover:bg-accent/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border hover:border-border"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
          <div className="relative z-10 flex flex-col h-full">
            <span className="text-muted-foreground uppercase text-sm font-medium mb-4 block font-nebulica">Social</span>
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <a
                href="https://x.com/VarunRewadi"
                className="bg-accent rounded-xl p-4 flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-8 h-8 text-foreground"
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
                className="bg-accent rounded-xl p-4 flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8 text-foreground"
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
                className="bg-accent rounded-xl p-4 flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-8 h-8 text-foreground" />
              </a>
              <a
                href="https://github.com/VarunRewadi"
                className="bg-accent rounded-xl p-4 flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8 text-foreground" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
} 