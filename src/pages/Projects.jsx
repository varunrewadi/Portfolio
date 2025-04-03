import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { useEffect } from "react"

const projects = [
  {
    title: "Travix",
    description: "A travel booking website with user-friendly interface, featuring two-factor authentication and real-time price updates. Built with PostgreSQL for secure database management and travel booking APIs.",
    image: "/travix.png",
    tags: ["EJS", "TailwindCSS", "Git", "Github", "Google-OAuth", "PostgreSQL", "Supabase"],
    link: "https://travix.vercel.app/",
    github: "https://github.com/VarunRewadi/travix"
  },
  {
    title: "Image Processing Application",
    description: "A GUI-based application for image editing with features like grayscale, blur, and pencil sketch filters. Includes real-time effects and image capture functionality using OpenCV and Tkinter.",
    image: "/image-processing.png",
    tags: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy", "GUI Programming"],
    github: "https://github.com/VarunRewadi/image-processing"
  },
  {
    title: "IETE Website",
    description: "Official website for IETE-SF MPSTME built using no-code tools. Features an intuitive, responsive design focused on organization representation and user experience.",
    image: "/iete.png",
    tags: ["Figma", "Wix/Wix-Studio", "UI/UX Design"],
    link: "https://ietempstme.com",
  
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
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 font-nebulica">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-3xl overflow-hidden border border-border"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain bg-accent p-4"
                  />
                  <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-card rounded-full text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <Github className="h-6 w-6" />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-card rounded-full text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2 font-nebulica">{project.title}</h2>
                  <p className="text-muted-foreground mb-4 font-nebulica">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-nebulica"
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