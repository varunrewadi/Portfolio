import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Download } from "lucide-react"
import { useEffect } from "react"

export default function About() {
  useEffect(() => {
    document.body.classList.add("allow-scroll")
    return () => {
      document.body.classList.remove("allow-scroll")
    }
  }, [])

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground font-nebulica">About Me</h1>
              <a
                href="/Varun Rewadi Resume.pdf"
                download
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors duration-200 font-nebulica"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="prose prose-invert max-w-none font-nebulica">
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Education</h2>
              <p className="text-muted-foreground">
                B.Tech. Information Technology
                <br />
                Mukesh Patel School of Technology Management & Engineering, Mumbai
                <br />
                August 2022 - Present
              </p>
              <p className="text-muted-foreground mt-2">
                Relevant Coursework: Data Structures and Algorithms, Operating Systems, Artificial Intelligence, 
                Web-Development, Software Engineering, User Experience/User Interfaces, Object-Oriented Programming
              </p>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Skills</h2>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Programming Languages: C++, Java, Python, Html, Css, JavaScript, jQuery, EJS</li>
                <li>Frameworks & Libraries: Git, SQL, ReactJS, Tailwind CSS, Bootstrap</li>
                <li>Databases: MongoDB, PostgreSQL, PhpMyAdmin</li>
                <li>Tools & Technologies: NodeJs, ExpressJs, OOP, UI/UX</li>
              </ul>

              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Work Experience</h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-foreground">Sub-Head of Technical</h3>
                <p className="text-muted-foreground">Social Conclave, MPSTME • January 2024 - April 2024</p>
                <p className="text-muted-foreground mt-2">
                  Worked on the official website of Social Conclave MPSTME as a Sub-Head of the Technical Department.
                  Made the website user-friendly and responsive to different devices for better user experience.
                  <br />
                  Tech used: ReactJS, TailwindCss, Git, Github
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-foreground">Sub-Head of Research and Development</h3>
                <p className="text-muted-foreground">IETE-SF, MPSTME • June 2024 - March 2025</p>
                <p className="text-muted-foreground mt-2">
                  Made the official website of IETE-SF MPSTME using no-code tools, which shows my creativity skills 
                  and the frontend UI/UX mind being used to make the website.
                  <br />
                  Tech used: Figma, Wix/Wix-Studio
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground">Web-Development Intern</h3>
                <p className="text-muted-foreground">CoderOne • December 2024 - February 2025</p>
                <p className="text-muted-foreground mt-2">
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