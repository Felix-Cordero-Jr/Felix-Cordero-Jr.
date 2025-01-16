'use client';

import { useState } from 'react';
import TimeDisplay from './TimeDisplay';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 rounded-[25px]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="text-xl font-bold">Felix Cordero Jr.</div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white md:static md:flex md:w-auto md:space-x-4`}
        >
          <a
            href="#home"
            className="block px-4 py-2 md:inline-block hover:text-blue-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 md:inline-block hover:text-blue-500"
          >
            About
          </a>
          <a
            href="#portfolio"
            className="block px-4 py-2 md:inline-block hover:text-blue-500"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 md:inline-block hover:text-blue-500"
          >
            Contact
          </a>
        </div>

        {/* Time Display */}
        <div className="hidden md:block text-sm text-gray-600">
          <TimeDisplay timeZone="Asia/Manila" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

