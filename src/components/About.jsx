import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "4", label: "Companies worked at" },
  { value: "5+", label: "Projects shipped" },
  { value: "3", label: "Stacks mastered" },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-dark-bg">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-3">01 / About</p>
          <h2 className="section-title">
            Who I am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Terminal card — spans 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 card-dark overflow-hidden"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface-hover border-b border-dark-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="ml-3 text-xs text-zinc-600 font-mono">about.md</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-zinc-600">
                  <span className="text-primary">❯</span>
                  <span>cat about.md</span>
                </div>

                <div className="pl-4 border-l border-dark-border-strong space-y-4 text-sm leading-relaxed">
                  <p className="text-zinc-300">
                    <span className="text-primary font-semibold"># </span>
                    Bernd Opoku-Boadu
                  </p>

                  <p className="text-zinc-400">
                    Software Engineer with a strong foundation in full-stack development,
                    mobile engineering, and backend architecture. I've shipped production
                    systems used by real teams at multiple companies across Africa.
                  </p>

                  <p className="text-zinc-400">
                    I care about{" "}
                    <span className="text-zinc-200">clean APIs</span>,{" "}
                    <span className="text-zinc-200">maintainable code</span>, and
                    building things that actually solve problems — not just demos.
                  </p>

                  <p className="text-zinc-400">
                    When I&#39;m not building, I teach. I&#39;ve tutored over 20 engineers in
                    Python and helped 70% of my STEM students achieve distinctions.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {["Full-Stack", "Backend", "Mobile Dev", "Mentor"].map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-zinc-600">
                  <span className="text-primary">❯</span>
                  <span className="inline-block w-2 h-4 bg-primary/70 animate-blink" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats — spans 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                className="card-dark p-5 flex flex-col gap-1"
              >
                <span className="text-3xl font-bold text-primary leading-none">{stat.value}</span>
                <span className="text-xs text-zinc-500 font-mono leading-snug mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
