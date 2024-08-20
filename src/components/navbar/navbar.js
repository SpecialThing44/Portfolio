import { Link, useNavigate } from "react-router-dom";
import ThemeToggleButton from "../themeToggleButton/themeToggleButton";
import { ThemeContext } from "../../contexts/themeContext";
import React, { useState, useContext } from "react";
import "./navbar.css";

const NavbarItem = ({ text, route, navigateFunction }) => {
  return (
    <li className="pt-2 pb-2 ">
      <button
        className={`hover:text-slate-200 `}
        onClick={() => navigateFunction(route)}
      >
        {text}
      </button>
    </li>
  );
};

const MenuItem = (toggleMenuFunction) => {
  return (
    <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        onClick={toggleMenuFunction}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const viewNavigate = (newRoute, section) => {
    if (!document.startViewTransition) {
      navigate(newRoute);
    } else {
      document.startViewTransition(() => {
        navigate(newRoute);
      });

      setTimeout(() => {
        if (section) {
          console.log(section);
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            const rect = sectionElement.getBoundingClientRect();
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const top = rect.top + scrollTop - 100;
            console.log("top", top);
            window.scrollTo({
              top: top,
              behavior: "smooth",
            });
          }
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-gray-900 z-10 text-slate-300 fixed p-2 w-full border-b top-0 start-0 border-gray-500 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 w-3/4">
        <Link to="/" className="">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.ico`}
            alt="Spencer Perkins Logo"
            className="h-16 rounded-full"
          />
        </Link>
        {MenuItem(toggleMenu)}

        <div
          className={`text-lg space-x-7 items-end justify-between ${
            isMenuOpen ? "" : "hidden"
          } w-full lg:flex lg:w-auto lg:order-1" `}
          id="navbar-sticky"
        >
          <ul className="flex flex-col items-end p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
            <li className="pt-2 pb-2">
              <span className={`theme-text pl-3 pr-3`}>
                Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </span>
              <ThemeToggleButton />
            </li>
            <NavbarItem
              text="Home"
              route="/"
              navigateFunction={() => viewNavigate("/", "home")}
            />
            <NavbarItem
              text="Skills"
              route="/"
              navigateFunction={() => viewNavigate("/", "skills")}
            />
            <NavbarItem
              text="Experience"
              route="/experience"
              navigateFunction={() => viewNavigate("/", "experience")}
            />
            <NavbarItem
              text="Projects"
              route="/projects"
              navigateFunction={() => viewNavigate("/", "projects")}
            />
            <NavbarItem
              text="Contact"
              route="/contact"
              navigateFunction={() => viewNavigate("/contact")}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
