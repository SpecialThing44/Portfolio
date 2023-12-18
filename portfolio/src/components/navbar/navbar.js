import { Link, useNavigate } from 'react-router-dom';
import ThemeToggleButton from '../themeToggleButton/themeToggleButton';
import { ThemeContext } from '../../contexts/themeContext';
import React, { useContext } from 'react';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };



  return (
    <nav className="bg-gray-900 z-10 text-slate-300 p-4 fixed w-full border-b border-gray-500">
      <div className="container mx-auto flex justify-between items-center font-mono">
        <Link to="/" className="text-2xl font-bold hover:text-slate-200">
          Spencer Perkins
        </Link>

        <div className="text-lg space-x-7">
          <span className="text-slate-200">Theme: {theme}</span>
          <ThemeToggleButton/>
          <button className="hover:text-slate-200" onClick={() => viewNavigate("/")}>
            Home
          </button>
          <button className="hover:text-slate-200" onClick={() => viewNavigate("/projects")}>
            Projects
          </button>
          <button className="hover:text-slate-200" onClick={() => viewNavigate("/contact")}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
