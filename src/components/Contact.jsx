import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "berndo.dev@gmail.com",
      href: "mailto:berndo.dev@gmail.com",
    },
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

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&#39;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
            I&#39;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-4 md:grid-cols-3 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-dark p-6 group"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <method.icon className="text-2xl" />
                </div>
                <span className="text-slate-400 text-sm">{method.label}</span>
                <span className="text-slate-200 font-medium text-sm truncate max-w-full">
                  {method.value}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:berndo.dev@gmail.com"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            <FaEnvelope />
            Send me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
