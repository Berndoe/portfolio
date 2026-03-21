import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const terminalSequence = [
  { command: "whoami", output: "Bernd Opoku-Boadu" },
  { command: "title", output: "Software Engineer" },
  { command: "focus", output: "Full-Stack  ·  Backend  ·  Mobile" },
  { command: "stack", output: "Python · C# · React · Flutter · Django" },
  { command: "status", output: "✓  Open to opportunities" },
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalSequence.length) return;
    const timer = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 700 : 650
    );
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="card-dark overflow-hidden font-mono text-sm">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-dark-surface-hover border-b border-dark-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="ml-3 text-xs text-zinc-600">bernd@portfolio — zsh</span>
      </div>

      {/* Terminal body */}
      <div className="p-5 space-y-3 min-h-[240px]">
        {terminalSequence.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-primary select-none">❯</span>
              <span className="text-zinc-300">{line.command}</span>
            </div>
            <div className="pl-5 mt-0.5 text-zinc-500">{line.output}</div>
          </motion.div>
        ))}

        {visibleLines < terminalSequence.length && (
          <div className="flex items-center gap-2">
            <span className="text-primary select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-primary/80 animate-blink" />
          </div>
        )}

        {visibleLines >= terminalSequence.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2"
          >
            <span className="text-primary select-none">❯</span>
            <span className="inline-block w-2 h-4 bg-primary/80 animate-blink" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-bg"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-grid bg-dot opacity-40" />

      {/* Violet orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/6 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono tracking-wide">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
              Bernd
              <br />
              <span className="gradient-text">Opoku-Boadu</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-500 font-mono text-base mb-6 tracking-widest uppercase text-sm"
          >
            Software Engineer
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-md"
          >
            I build robust backend systems, cross-platform mobile apps, and full-stack products
            that actually ship.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get in Touch
              <FaArrowRight className="text-xs" />
            </a>
            <a
              href="/images/Bernd_Opoku-Boadu.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <HiDownload className="text-base" />
              Resume
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex items-center gap-8 mb-10">
            {[
              { value: "4+", label: "Companies" },
              { value: "5+", label: "Projects" },
              { value: "2+", label: "Years" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-primary leading-none">{stat.value}</span>
                <span className="text-xs text-zinc-600 font-mono mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants} className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/berndo/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/Berndoe"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs text-zinc-700 font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
