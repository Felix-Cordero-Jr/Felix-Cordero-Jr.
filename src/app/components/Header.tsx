'use client';

import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white bg-opacity-80 shadow-md z-50">
      <Navbar />
    </header>
  );
};

export default Header;
