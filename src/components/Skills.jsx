import { motion } from "framer-motion";
import {
  SiPython, SiNodedotjs, SiReact, SiFlutter,
  SiJavascript, SiPhp, SiMysql, SiGit,
  SiHtml5, SiCss3, SiBootstrap, SiFlask,
  SiDjango, SiDocker, SiPostgresql, SiTailwindcss,
  SiDotnet, SiSvelte
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Svelte", icon: SiSvelte },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "Node.js", icon: SiNodedotjs },
      { name: ".NET / C#", icon: SiDotnet },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Data & Infrastructure",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

const SkillIcon = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay }}
    whileHover={{ y: -3, transition: { duration: 0.15 } }}
    className="group flex flex-col items-center gap-2.5 p-4 rounded-lg border border-dark-border hover:border-primary/30 bg-dark-surface hover:bg-dark-surface-hover transition-all duration-200 cursor-default"
  >
    <skill.icon className="text-2xl text-zinc-500 group-hover:text-primary transition-colors duration-200" />
    <span className="text-xs text-zinc-600 group-hover:text-zinc-400 font-mono transition-colors duration-200 text-center leading-tight">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-dark-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-3">02 / Skills</p>
          <h2 className="section-title">Technology stack</h2>
          <p className="text-zinc-500 text-sm mt-2">
            Tools and frameworks I use to build things.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: catIndex * 0.08 }}
            >
              <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="text-primary">—</span>
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    skill={skill}
                    delay={catIndex * 0.05 + skillIndex * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
