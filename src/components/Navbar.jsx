import React from 'react';
import Button from './Button';

const Navbar = ({ onThemeToggle, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Task Management System
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={onThemeToggle}
              className="flex items-center"
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 