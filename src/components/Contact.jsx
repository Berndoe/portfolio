const Contact = () => {
  return (
    <section id='contact' className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-700 mb-4">
          Feel free to reach out for collaborations or inquiries!
        </p>
        <a
          href="mailto:bernd.opoku.boadu@gmail.com"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
