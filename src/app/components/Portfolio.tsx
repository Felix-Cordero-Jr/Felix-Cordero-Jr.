// src/app/components/Portfolio.tsx
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12">
      <h2 className="text-3xl font-semibold text-center">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="border p-6 shadow-lg rounded-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="mt-4">Description of Project 1</p>
        </div>
        <div className="border p-6 shadow-lg rounded-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="mt-4">Description of Project 2</p>
        </div>
        <div className="border p-6 shadow-lg rounded-md">
          <h3 className="text-xl font-bold">Project 3</h3>
          <p className="mt-4">Description of Project 3</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
