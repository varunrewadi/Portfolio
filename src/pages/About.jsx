import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    document.body.classList.add("allow-scroll")
    return () => {
      document.body.classList.remove("allow-scroll")
    }
  }, [])

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="bg-zinc-900 rounded-3xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-nebulica">About Me</h1>

            <div className="prose prose-invert max-w-none font-nebulica">
              <p className="text-zinc-300 text-lg">
              I'm a passionate web designer and developer currently studying at MPSTME Mumbai. I specialize in
              creating beautiful, functional, and user-friendly websites and applications.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Education</h2>
              <p className="text-zinc-300">
                B.Tech. Information Technology
                <br />
                Mukesh Patel School of Technology Management & Engineering, Mumbai
                <br />
                August 2022 - Present
              </p>
              <p className="text-zinc-300 mt-2">
                Relevant Coursework: Data Structures and Algorithms, Operating Systems, Artificial Intelligence, 
                Web-Development, Software Engineering, User Experience/User Interfaces, Object-Oriented Programming
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Skills</h2>
              <ul className="list-disc pl-5 text-zinc-300">
                <li>Programming Languages: C++, Java, Python, JavaScript</li>
                <li>Frontend: HTML, CSS, ReactJS, Tailwind CSS, Bootstrap, jQuery, EJS</li>
                <li>Backend: NodeJS, ExpressJS, PHP</li>
                <li>Databases: MongoDB, PostgreSQL, PhpMyAdmin</li>
                <li>Tools & Technologies: Git, SQL, OOP, UI/UX</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Work Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white">Sub-Head of Research and Development</h3>
                <p className="text-zinc-400">IETE-SF, MPSTME • June 2024 - Present</p>
                <p className="text-zinc-300 mt-2">
                  Made the official website of IETE-SF MPSTME using no-code tools, which shows my creativity skills 
                  and the frontend UI/UX mind being used to make the website.
                  <br />
                  Tech used: Figma, Wix/Wix-Studio
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white">Sub-Head of Technical</h3>
                <p className="text-zinc-400">Social Conclave, MPSTME • January 2024 - April 2024</p>
                <p className="text-zinc-300 mt-2">
                  Worked on the official website of Social Conclave MPSTME as a Sub-Head of the Technical Department.
                  Made the website user-friendly and responsive to different devices for better user experience.
                  <br />
                  Tech Stack: ReactJS, TailwindCss, Git, Github
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-white">Web-Development Intern</h3>
                <p className="text-zinc-400">CoderOne • December 2024 - February 2025</p>
                <p className="text-zinc-300 mt-2">
                  Developed and optimized web applications, improving performance and user experience.
                  Worked on building a real-time chat application, implementing WebSockets for seamless communication.
                  <br />
                  Tech used: WebSockets, JavaScript, Node.js, Express, HTML, CSS, and MongoDB
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 