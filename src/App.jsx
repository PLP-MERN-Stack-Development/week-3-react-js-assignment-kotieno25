import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar onThemeToggle={toggleTheme} isDarkMode={isDarkMode} />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Task Manager Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Task Management</h2>
            <TaskManager />
          </section>

          {/* API Data Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Sample Posts</h2>
            <ApiData />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App; 