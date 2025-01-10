
const Skills = () => {
  const skills = [
    'Python', 'Node.js', 'React', 'Flutter', 'Java', 'PHP', 'SQL', 'Version Control',
    'HTML', 'CSS', 'Bootstrap', 'Flask',
  ];

  return (
    <section id='skills' className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 py-4 rounded-lg shadow">
              <p className="text-gray-700 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
