import { Link, useNavigate } from "react-router-dom";
import ThemeToggleButton from "../themeToggleButton/themeToggleButton";
import { ThemeContext } from "../../contexts/themeContext";
import React, { useContext, useState, useEffect  } from "react";
import "./navbar.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsDropdownOpen(window.innerWidth > 900);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-gray-900 z-10 text-slate-300 p-4 fixed w-full border-b border-gray-500">
      <div className="container mx-auto flex justify-between items-center font-mono">
        <Link to="/" className="text-2xl font-bold hover:text-slate-200">
          Spencer Perkins
        </Link>

        <div
          className={`text-lg space-x-7 flex flex-row`}
        >
          <span className={`text-slate-200 theme-text ${isDropdownOpen ? "block" : "hidden"}`}>Theme: {theme}</span>
          <ThemeToggleButton/>
          <button
            className={`hover:text-slate-200 ${isDropdownOpen ? "block" : "hidden"}`}
            onClick={() => viewNavigate("/")}
          >
            Home
          </button>
          <button
            className={`hover:text-slate-200 ${isDropdownOpen ? "block" : "hidden"}`}
            onClick={() => viewNavigate("/projects")}
          >
            Projects
          </button>
          <button
            className={`hover:text-slate-200 ${isDropdownOpen ? "block" : "hidden"}`}
            onClick={() => viewNavigate("/resume")}
          >
            Resume
          </button>
          <button
            className={`hover:text-slate-200 ${isDropdownOpen ? "block" : "hidden"}`}
            onClick={() => viewNavigate("/contact")}
          >
            Contact
          </button>
          <button
            className="text-right lg:hidden "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
