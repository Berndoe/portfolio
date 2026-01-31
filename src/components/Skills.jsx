import { motion } from "framer-motion";
import {
  SiPython, SiNodedotjs, SiReact, SiFlutter,
  SiJavascript, SiPhp, SiMysql, SiGit,
  SiHtml5, SiCss3, SiBootstrap, SiFlask,
  SiDjango, SiDocker, SiPostgresql, SiTailwindcss
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, level: 85 },
        { name: "JavaScript", icon: SiJavascript, level: 90 },
        { name: "HTML5", icon: SiHtml5, level: 95 },
        { name: "CSS3", icon: SiCss3, level: 90 },
        { name: "Tailwind", icon: SiTailwindcss, level: 80 },
        { name: "Bootstrap", icon: SiBootstrap, level: 85 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", icon: SiPython, level: 90 },
        { name: "Node.js", icon: SiNodedotjs, level: 80 },
        { name: "Flask", icon: SiFlask, level: 85 },
        { name: "Django", icon: SiDjango, level: 75 },
        { name: "PHP", icon: SiPhp, level: 75 },
        { name: "Java", icon: FaJava, level: 70 },
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", icon: SiFlutter, level: 85 },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", icon: SiMysql, level: 85 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Docker", icon: SiDocker, level: 70 },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-slate-400">Technologies I work with</p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-mono text-primary mb-6 flex items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="card-dark p-4 group"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <skill.icon className="text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-slate-200">{skill.name}</span>
                          <span className="text-sm text-slate-500 font-mono">{skill.level}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Skill bar */}
                    <div className="h-1.5 bg-dark-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
