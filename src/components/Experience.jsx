import { motion } from "framer-motion";

const experiences = [
  {
    title: "Quality Assurance Engineer",
    company: "Salcon",
    location: "Remote",
    period: "Oct 2025 – February 2026",
    description:
      "Designed and executed functional and regression test cases for school management modules including auth, scheduling, payments, and reporting. Automated test scenarios and validated APIs using Postman.",
    highlights: ["Agile sprint collaboration", "API validation with Postman", "SQL database integrity checks"],
  },
  {
    title: "Software Developer",
    company: "Axon Information Systems",
    location: "Accra",
    period: "Oct 2024 – Aug 2025",
    description:
      "Built scalable RESTful APIs using .NET and C# for a custom helpdesk platform. Contributed to a GraphQL API for a fintech partner portal. Optimized backend architecture with Entity Framework and LINQ.",
    highlights: ["20% improvement in support operations", "GraphQL API for fintech portal"],
  },
  {
    title: "Backend Developer",
    company: "Kumatech",
    location: "Remote",
    period: "Feb 2025 – Jul 2025",
    description:
      "Designed and implemented HR, QA, and QC modules for a pharmaceutical ERP system. Focused on scalability, performance, and maintainable architecture.",
    highlights: ["Pharmaceutical ERP system", "HR + QA + QC modules"],
  },
  {
    title: "Backend Developer",
    company: "Jemma Technologies",
    location: "Remote",
    period: "Oct 2024 – Aug 2025",
    description:
      "Engineered a high-performance API for a laundry management platform using Django. Reduced response times by 20% through query optimization and delivered production-ready features cross-functionally.",
    highlights: ["100+ concurrent users supported", "20% response time reduction"],
  },
  {
    title: "Python Tutor",
    company: "Python Crash Course",
    location: "Remote",
    period: "Jun 2023 – Aug 2023",
    description:
      "Delivered Python instruction to 20+ students, strengthening their problem-solving skills and foundational software development knowledge.",
    highlights: ["20+ students trained"],
  },
  {
    title: "STEM Tutor",
    company: "Lesson Up Tutoring",
    location: "Accra",
    period: "May 2021 – Jun 2022",
    description:
      "Provided personalized tutoring in Mathematics and Chemistry to secondary school students.",
    highlights: ["70% of students achieved distinctions"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 bg-dark-surface">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest mb-3">04 / Experience</p>
          <h2 className="section-title">Where I&#39;ve worked</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6">
          {/* Left border line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-1.5 w-2 h-2 rounded-full bg-dark-surface border-2 border-primary/60" />

                <div className="card-dark p-5 hover:border-primary/20">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-zinc-100 text-base">{exp.title}</h3>
                      <p className="text-sm text-zinc-500 font-mono mt-0.5">
                        {exp.company}
                        <span className="text-zinc-700"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-600 bg-dark-surface-hover border border-dark-border px-2.5 py-1 rounded-md whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="highlight-pill">
                        → {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
