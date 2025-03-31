import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { useEffect } from "react"

const projects = [
  {
    title: "Travix",
    description: "A travel booking website featuring a user-friendly and responsive design that allows users to book travel with their preferred mode of transport. Implemented two-factor authentication, real-time price updates, and automated email reminders for incomplete bookings.",
    image: "/travix.png",
    tags: ["EJS", "TailwindCSS", "Git", "Github", "Google-OAuth", "PostgreSQL", "Supabase"],
    link: "https://travix.vercel.app/",
    github: "https://github.com/VarunRewadi/travix"
  },
  {
    title: "Tasks To-Do Application",
    description: "A Java-based task management application using OOP and Java AWT. Features include adding, prioritizing, removing, and marking tasks as completed. Includes an automated notification system with pop-up reminders at scheduled times.",
    image: "/todo.png",
    tags: ["Java", "OOP", "Java AWT"],
    link: "https://todo.example.com",
    github: "https://github.com/username/todo"
  },
  {
    title: "Social Conclave Website",
    description: "The official website of Social Conclave MPSTME. Made user-friendly and responsive to different devices for better user experience. Implemented modern design principles and smooth interactions.",
    image: "/social-conclave.png",
    tags: ["ReactJS", "TailwindCSS", "Git", "Github"],
    link: "https://socialconclave.example.com",
    github: "https://github.com/username/social-conclave"
  }
]

export default function Projects() {
  useEffect(() => {
    document.body.classList.add("allow-scroll")
    return () => {
      document.body.classList.remove("allow-scroll")
    }
  }, [])

  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 font-nebulica">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-zinc-300 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-zinc-300 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2 font-nebulica">{project.title}</h2>
                  <p className="text-zinc-300 mb-4 font-nebulica">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-sm font-nebulica"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 