import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiFlutter, SiFlask, SiPhp, SiPython } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      name: "DoverColl",
      description:
        "A waste management mobile application with an administrator web app for efficient waste collection scheduling and tracking.",
      technologies: ["Flutter", "Flask", "Python"],
      icons: [SiFlutter, SiFlask, SiPython],
      link: "#",
      github: null,
    },
    {
      name: "Techive",
      description:
        "An e-commerce rental system for tech products with secure payment handling and inventory management.",
      technologies: ["PHP", "MySQL", "Bootstrap"],
      icons: [SiPhp],
      link: null,
      github: "https://github.com/Berndoe/techive-ecommerce",
    },
    {
      name: "Inkterpreter",
      description:
        "A handwritten document reader and text summarizer using OCR technology and natural language processing.",
      technologies: ["Flutter", "Python", "ML"],
      icons: [SiFlutter, SiPython],
      link: null,
      github: "https://github.com/dadjepon/Inkterpretor/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-24 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400">Some things I've built</p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-dark p-6 h-full flex flex-col relative overflow-hidden">
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icons */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2">
                      {project.icons.map((Icon, index) => (
                        <div
                          key={index}
                          className="p-2 rounded-lg bg-primary/10 text-primary"
                        >
                          <Icon className="text-lg" />
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub className="text-xl" />
                        </a>
                      )}
                      {project.link && project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-500 hover:text-primary transition-colors"
                          aria-label="External Link"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
