import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/berndo/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Berndoe", label: "GitHub" },
  { icon: FaEnvelope, href: "mailto:berndo.dev@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="#hero"
            className="font-mono text-sm text-zinc-600 hover:text-primary transition-colors duration-200 tracking-wide"
          >
            bernd.dev
          </a>

          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={link.label}
                className="text-zinc-700 hover:text-primary transition-colors duration-200"
              >
                <link.icon className="text-base" />
              </a>
            ))}
          </div>

          <p className="text-zinc-700 text-xs font-mono">
            &copy; {new Date().getFullYear()} Bernd Osafo Opoku-Boadu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
