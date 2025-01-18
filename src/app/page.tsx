// src/app/page.tsx
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
