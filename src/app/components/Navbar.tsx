'use client';

import TimeDisplay from './TimeDisplay';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#portfolio" className="hover:text-blue-500">Portfolio</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
      <div className="text-sm text-gray-600">
        <TimeDisplay timeZone="Asia/Manila" />
      </div>
    </nav>
  );
};

export default Navbar;
