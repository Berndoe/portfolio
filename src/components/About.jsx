import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-slate-400">Get to know me better</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-dark overflow-hidden"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface-hover border-b border-dark-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-4 text-sm text-slate-500 font-mono">about.md</span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8 font-mono text-sm md:text-base">
            <div className="space-y-4">
              <div>
                <span className="text-emerald-400">$</span>
                <span className="text-slate-400 ml-2">cat about.md</span>
              </div>

              <div className="pl-4 border-l-2 border-primary/30 space-y-4">
                <p className="text-slate-300 leading-relaxed">
                  <span className="text-cyan-400"># </span>
                  Hello, World!
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I am a highly motivated <span className="text-primary">Software Engineer</span> with a
                  strong foundation in full-stack development (mobile and web), teaching, and mentorship.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Recognized for my dedication to <span className="text-emerald-400">problem-solving</span> and
                  creating <span className="text-emerald-400">innovative solutions</span> that make a real impact.
                </p>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="tech-tag">Full-Stack</span>
                  <span className="tech-tag">Mobile Dev</span>
                  <span className="tech-tag">Web Dev</span>
                  <span className="tech-tag">Problem Solver</span>
                </div>
              </div>

              <div className="pt-4">
                <span className="text-emerald-400">$</span>
                <span className="text-slate-500 ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
