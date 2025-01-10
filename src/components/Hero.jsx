import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative bg-white h-screen overflow-hidden">
            {/* Image Section */}
            <motion.div
                className="absolute inset-0 w-2/3 h-full left-0"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img
                    src="src/images/Collector Page.png"
                    alt="Mobile App Design"
                    className="w-full h-full object-cover rounded-r-lg"
                />
            </motion.div>

            {/* Right Content */}
            <div className="relative z-10 h-full w-1/3 ml-auto flex items-center px-8">
                <motion.div
                    className="bg-gray-100 p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Bernd Osafo Opoku-Boadu</h1>
                    <p className="text-xl mb-6 text-gray-700">Software Engineer</p>
                    <motion.div
                        className="space-x-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
                    >
                        <a
                            href="https://www.linkedin.com/in/berndo/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="src/cv/Bernd_Opoku-Boadu.pdf"
                            download
                            className="bg-indigo-800 text-white px-6 py-2 rounded-full hover:bg-indigo-900 transition-all"
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
