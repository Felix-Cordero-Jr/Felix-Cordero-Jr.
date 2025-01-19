'use client';

import { useState, useEffect } from 'react';
import TimeDisplay from './TimeDisplay';
import VisitorCount from './VisitorCount';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Determine which section is in the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const adjustedTop = top + window.scrollY;
          const adjustedBottom = bottom + window.scrollY;
          if (scrollPosition >= adjustedTop && scrollPosition <= adjustedBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-black shadow-lg shadow-gray-500/70 shadow-md fixed top-1 left-50% z-50 rounded-[25px] text-white border-2 border-gray-700 flex items-center justify-center h-16 w-[90%] sm:w-[90%] lg:w-[50%]">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Subtext */}
        <div className="flex flex-col items-center text-center py-[5px] max-w-full pr-[25px]">
          <div className="text-lg md:text-xl font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
            Felix Cordero Jr.
          </div>
          <div className="text-xs md:text-sm text-gray-400 -mt-2 whitespace-nowrap">
            Full Stack Developer
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-black md:static md:flex md:w-auto md:space-x-4`}
        >
          <a
            href="#home"
            className={`block px-4 py-2 md:inline-block ${
              activeSection === 'home' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`block px-4 py-2 md:inline-block ${
              activeSection === 'about' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          >
            About
          </a>
          <a
            href="#portfolio"
            className={`block px-4 py-2 md:inline-block ${
              activeSection === 'portfolio' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className={`block px-4 py-2 md:inline-block ${
              activeSection === 'contact' ? 'text-red-500' : 'hover:text-red-500'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Time Display */}
        <div className="hidden md:block text-xs md:text-sm text-gray-400 pl-[5px] whitespace-nowrap">
          <TimeDisplay timeZone="Asia/Manila" cityName="Taguig City" />
        </div>
        <div className="visitor-count text-xs hidden md:block text-xs md:text-sm whitespace-nowrap">
          <VisitorCount />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
