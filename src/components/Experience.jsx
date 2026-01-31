import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Axon Information Systems",
      period: "October 2024 – Present",
      description:
        "Designed a user-friendly employee management system and developed APIs. Conducted thorough manual and automated testing for web applications, ensuring high quality standards.",
    },
    {
      title: "Backend Developer",
      company: "Jemma Technologies",
      period: "September 2024 – Present",
      description:
        "Designed a robust API for a multitenant application using Django, supporting 20+ users with scalable architecture.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400">My professional journey</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-primary z-10">
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
                </div>

                {/* Date badge - mobile */}
                <div className="md:hidden pl-10 mb-2">
                  <span className="inline-block px-3 py-1 text-sm font-mono rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/20 text-primary">
                    {exp.period}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 pl-10 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card-dark p-6"
                  >
                    {/* Date badge - desktop */}
                    <div className="hidden md:block mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-mono rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/20 text-primary">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-100 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
