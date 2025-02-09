import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-screen overflow-hidden flex flex-col lg:flex-row">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-2/3 h-64 lg:h-full"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src="/images/Collector Page.png"
          alt="Mobile App Design"
          className="w-full h-full object-cover rounded-b-lg lg:rounded-r-lg lg:rounded-b-none"
        />
      </motion.div>

      {/* Right Content */}
      <div className="w-full lg:w-1/3 bg-gray-100 flex items-center justify-center p-6 lg:p-8">
        <motion.div
          className="p-6 rounded-lg shadow-lg w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800">
            Bernd Osafo Opoku-Boadu
          </h1>
          <p className="text-lg lg:text-xl mb-6 text-gray-700">
            Software Engineer
          </p>
          <motion.div
            className="space-y-4 lg:space-x-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
          >
            <a
              href="https://www.linkedin.com/in/berndo/"
              target="_blank"
              rel="noreferrer"
              className="block lg:inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all text-center"
            >
              LinkedIn
            </a>
            <a
              href="../cv/Bernd_Opoku-Boadu.pdf"
              download
              className="block lg:inline-block bg-indigo-800 text-white px-6 py-2 rounded-full hover:bg-indigo-900 transition-all text-center"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
