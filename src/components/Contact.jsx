import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const contactMethods = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/berndo",
    href: "https://www.linkedin.com/in/berndo/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Berndoe",
    href: "https://github.com/Berndoe",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-dark-bg">
      {/* Background accent */}
      <div className="absolute inset-0 bg-dot-grid bg-dot opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/4 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-3">05 / Contact</p>
          <h2 className="section-title">Let&#39;s work together</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-zinc-400 leading-relaxed mb-8">
              Open to full-time roles, contract work, and interesting side projects.
              If you&#39;re building something worth building — let&#39;s talk.
            </p>

            <a
              href="mailto:berndo.dev@gmail.com"
              className="group inline-flex items-center gap-3 text-zinc-100 hover:text-primary transition-colors duration-200"
            >
              <div className="p-3 rounded-lg bg-dark-surface border border-dark-border group-hover:border-primary/30 transition-colors">
                <FaEnvelope className="text-lg text-zinc-400 group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="text-sm font-medium">berndo.dev@gmail.com</div>
                <div className="text-xs text-zinc-600 font-mono">Send a message</div>
              </div>
              <HiArrowRight className="ml-1 text-zinc-600 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 card-dark"
              >
                <div className="p-2.5 rounded-lg bg-dark-surface-hover border border-dark-border group-hover:border-primary/20 transition-colors">
                  <method.icon className="text-base text-zinc-500 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-300">{method.label}</div>
                  <div className="text-xs text-zinc-600 font-mono">{method.value}</div>
                </div>
                <HiArrowRight className="ml-auto text-zinc-700 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-sm" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
