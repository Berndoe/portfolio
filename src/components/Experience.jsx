
const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Jemma Technologies',
      period: 'September 2024 – Present',
      description:
        'Designed a robust API for a multitenant application using Django supporting 20+ users.',
    },
    {
      title: 'Software Engineer',
      company: 'Axon Information Systems',
      period: 'October 2024 – Present',
      description:
        "Designed a user-friendly employee management system and developed APIs." +
        " Conducted a thorough manual and automated testing for a web application, ensuring its quality."
    },
  ];

  return (
    <section id='experience' className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
