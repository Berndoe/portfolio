import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="flex justify-center space-x-8 mb-4">
          {/* Copyright */}
          <p className="text-md">
            &copy; {new Date().getFullYear()} Bernd Osafo Opoku-Boadu. All rights
            reserved.
          </p>
        <a
          href="https://www.linkedin.com/in/berndo/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-gray-400 hover:text-white text-2xl" />
        </a>
        <a href="https://github.com/Berndoe" target="_blank" rel="noreferrer">
          <FaGithub className="text-gray-400 hover:text-white text-2xl" />
        </a>
        <a href="mailto:bernd.opoku.boadu@gmail.com">
          <FaEnvelope className="text-gray-400 hover:text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
