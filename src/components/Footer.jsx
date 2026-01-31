import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/berndo/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/Berndoe",
      label: "GitHub",
    },
    {
      icon: FaEnvelope,
      href: "mailto:bernd.opoku.boadu@gmail.com",
      label: "Email",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.a
            href="#hero"
            className="text-lg font-bold gradient-text hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            &lt;Bernd /&gt;
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="text-slate-500 hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <link.icon className="text-xl" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors duration-300 group"
            whileHover={{ y: -2 }}
          >
            <span className="text-sm">Back to top</span>
            <FaChevronUp className="text-sm group-hover:animate-bounce" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-dark-border text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Bernd Osafo Opoku-Boadu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
