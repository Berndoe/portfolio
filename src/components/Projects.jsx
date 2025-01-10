
const Projects = () => {
  const projects = [
    {
      name: 'DoverColl',
      description:
        'A waste management mobile application using Flutter and Flask, with an administrator web app.',
      link: '#',
    },
    {
      name: 'Techive',
      description:
        'An e-commerce rental system for tech products using PHP, handling secure payments.',
      link: 'https://github.com/Berndoe/techive-ecommerce',
    },
    {
      name: 'Inkterpreter',
      description:
        'A handwritten document reader and text summarizer system using Flutter.',
      link: 'https://github.com/dadjepon/Inkterpretor/',
    },
  ];

  return (
    <section id='projects' className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-bold mb-4">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
