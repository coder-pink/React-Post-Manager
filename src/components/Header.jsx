import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <Link to="/" className="text-2xl font-bold text-[#0c2c4d]">
          React Post Manager
        </Link>

        {/* Navigation */}

        
        <nav className="space-x-6 text-sm font-medium text-[#0c2c4d]">

          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link to="/create" className="hover:text-blue-600 transition-colors">
            Create Post
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
