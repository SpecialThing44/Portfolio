import { Link, useNavigate } from "react-router-dom";
import ThemeToggleButton from "../themeToggleButton/themeToggleButton";
import { ThemeContext } from "../../contexts/themeContext";
import React, { useState, useContext } from "react";
import "./navbar.css";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
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
    <nav className="bg-gray-900 z-10 text-slate-300 fixed p-2 w-full border-b top-0 start-0 border-gray-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="text-2xl font-bold hover:text-slate-200">
          Spencer Perkins
        </Link>

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`text-lg space-x-7 items-end justify-between ${isMenuOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1" `}
          id="navbar-sticky"
        >
          <ul class="flex flex-col items-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <span className={`theme-text pl-3 pr-3`}>
                Theme: {theme}
              </span>
              <ThemeToggleButton />
            </li>
            <li>
              <button
                className={` block hover:text-slate-200 `}
                onClick={() => viewNavigate("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`block hover:text-slate-200 `}
                onClick={() => viewNavigate("/projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`hover:text-slate-200 `}
                onClick={() => viewNavigate("/resume")}
              >
                Resume
              </button>
            </li>
            <li>
              <button
                className={`hover:text-slate-200 `}
                onClick={() => viewNavigate("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
