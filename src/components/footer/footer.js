import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { getThemeStyles } from "../../utils/themeStyles";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor } = getThemeStyles(theme);

  return (
    <footer className={`${backgroundColor}`}>
      <div
        className={`${backgroundColor} ${textColor} min-h-full p-6 flex justify-center font-mono border-t border-gray-500 text-center`}
      >
        <a
          href="https://github.com/SpecialThing44"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <FaGithubSquare style={{ fontSize: "24px" }} />
          <span className="ml-2">See my code!</span>
        </a>
        <a
          className="ml-4 flex items-center"
          href="https://www.linkedin.com/in/spencer-j-perkins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin style={{ fontSize: "24px" }} />
          <span className="ml-2">Connect with Me!</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
