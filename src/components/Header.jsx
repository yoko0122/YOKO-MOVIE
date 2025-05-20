import React from 'react';
import { FaFilm, FaMoon } from 'react-icons/fa';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
   <header className="h-9 px-4 mt-4">
  <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">

    {/* Logo */}
    <div className="flex items-center gap-2 text-indigo-700">
      <FaFilm className="text-xl" />
      <span className="font-bold italic text-lg">Movie Z</span>
    </div>

    {/* Dropdown & Search */}
    <div className="flex items-center gap-4">
      <button className="flex items-center justify-between gap-2 w-[97px] h-9 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100">
        <FiChevronDown />
        <span>Genre</span>
      </button>

      <div className="relative w-[379px] h-9">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div>
    </div>

    {/* Theme toggle */}
    <button className="p-2 rounded-lg hover:bg-gray-100 border">
      <FaMoon />
    </button>
    
  </div>
</header>

  );
};

export default Header;
