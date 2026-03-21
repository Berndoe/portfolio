import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiFlutter, SiFlask, SiPhp, SiPython, SiReact, SiSvelte } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const projects = [
  {
    name: "DoverColl",
    description:
      "Waste management mobile app with an admin web panel for scheduling and tracking collection routes.",
    technologies: ["Flutter", "Flask", "Python"],
    icons: [SiFlutter, SiFlask, SiPython],
    link: null,
    github: null,
  },
  {
    name: "Techive",
    description:
      "E-commerce rental platform for tech products with secure payment flows and inventory management.",
    technologies: ["PHP", "MySQL", "Bootstrap"],
    icons: [SiPhp],
    link: null,
    github: "https://github.com/Berndoe/techive-ecommerce",
  },
  {
    name: "Autonova",
    description:
      "Vehicle management system for families and businesses to track their fleet data in one dashboard.",
    technologies: ["React", ".NET / C#"],
    icons: [SiReact, TbBrandCSharp],
    link: "https://autonovac.vercel.app",
    github: null,
  },
  {
    name: "Laundre",
    description:
      "Laundry operations management system to streamline scheduling, order tracking, and billing.",
    technologies: ["Svelte", ".NET / C#"],
    icons: [SiSvelte, TbBrandCSharp],
    link: "https://laundre.vercel.app",
    github: null,
  },
  {
    name: "Inkterpreter",
    description:
      "Handwritten document reader and summarizer using OCR and NLP — turns scanned notes into structured text.",
    technologies: ["Flutter", "Python", "ML"],
    icons: [SiFlutter, SiPython],
    link: null,
    github: "https://github.com/dadjepon/Inkterpretor/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-dark-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-3">03 / Work</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="text-zinc-500 text-sm mt-2">A selection of things I&#39;ve shipped.</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group"
            >
              <div className="card-dark p-6 h-full flex flex-col relative overflow-hidden">
                {/* Number + Links row */}
                <div className="flex justify-between items-start mb-5">
                  <span className="font-mono text-xs text-zinc-700 select-none tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-base" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-600 hover:text-primary transition-colors"
                        aria-label="Live site"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech icons */}
                <div className="flex gap-2 mb-4">
                  {project.icons.map((Icon, i) => (
                    <div
                      key={i}
                      className="p-1.5 rounded-md bg-dark-surface-hover border border-dark-border text-zinc-500"
                    >
                      <Icon className="text-sm" />
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-zinc-100 mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
