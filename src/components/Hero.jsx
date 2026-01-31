import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaFileDownload, FaGithub } from "react-icons/fa";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const floatingIcons = [
    { icon: "{ }", delay: 0, x: "10%", y: "20%" },
    { icon: "</>", delay: 0.5, x: "85%", y: "15%" },
    { icon: "[ ]", delay: 1, x: "75%", y: "70%" },
    { icon: "=>", delay: 1.5, x: "15%", y: "75%" },
    { icon: "( )", delay: 2, x: "50%", y: "85%" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-tech-grid bg-grid opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      {/* Floating code icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl font-mono text-primary/20 select-none"
          style={{ left: item.x, top: item.y }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text">Bernd</span>
        </motion.h1>

        {/* Typing effect */}
        <motion.div
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl text-slate-400 mb-8 h-10"
        >
          <span className="font-mono">
            {typedText}
            <span className="inline-block w-0.5 h-6 ml-1 bg-primary animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12"
        >
          Building innovative full-stack solutions with a passion for clean code,
          modern technologies, and exceptional user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
          <a
            href="/images/Bernd_Opoku-Boadu.pdf"
            target="_blank"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaFileDownload />
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://www.linkedin.com/in/berndo/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/Berndoe"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
