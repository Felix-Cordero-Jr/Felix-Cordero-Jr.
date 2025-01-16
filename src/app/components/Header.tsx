'use client';

import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header className="fixed top-7 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white bg-opacity-80 shadow-md z-50 rounded-[25px] px-4 py-2">
      <Navbar />
    </header>
  );
};

export default Header;
