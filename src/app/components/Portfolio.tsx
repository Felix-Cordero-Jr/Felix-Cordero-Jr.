const Portfolio: React.FC = () => {
  const projects = [
    { title: 'Project 1', image: '/assets/file.svg' },
    { title: 'Project 2', image: '/assets/globe.svg' },
    { title: 'Project 3', image: '/assets/vercel.svg' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">My Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold p-4">{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
