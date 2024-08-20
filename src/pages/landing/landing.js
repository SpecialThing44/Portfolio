import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { getThemeStyles } from "../../utils/themeStyles";
import Skills from "../../components/skills/skills";
import Projects from "../../components/projects/projects";
import Experience from "../../components/experience/experience";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { MdEmail, MdWork } from "react-icons/md";

import "./landing.css";

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor, boxColor } = getThemeStyles(theme);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${backgroundColor} overflow-hidden `}>
      <div
        className={`${backgroundColor} ${textColor} flex justify-start font-mono border-b border-gray-500`}
      >
        <div className="w-3/4 mx-auto mt-32 flex flex-col lg:flex-row space-x-4 pb-12 max-w-screen-xl">
          <div>
            <h1
              className="text-4xl text-left font-bold pe-12 whitespace-nowrap ms-5"
              id="home"
            >
              Spencer Perkins
            </h1>
            <div className="mt-4 ms-5">
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                spencer.perkins@example.com
              </div>
              <div className="flex items-center">
                <FaCity className="mr-2" />
                Toronto, Ontario
              </div>
              <div className="flex items-center">
                <FaGraduationCap className="mr-2" />
                University of Toronto
              </div>
              <div className="flex items-center">
                <MdWork className="mr-2" />
                Garner Distributed Workflow
              </div>
              <div className="flex justify-left items-center mt-4 ">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-2 text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-110 text-white">
                    See Resume
                  </button>
                </a>
              </div>
            </div>
          </div>

          <p className="text-lg mt-4">
            I'm a computer science specialist at the University of Toronto. I
            work as a fulltime software engineer writing production code for
            fortune 10 companies, and part-time as an ML researcher for a
            computational biology lab. On the side, I create small projects to
            solve problems that matter to me, and outside of work, I'm an avid
            musician, and I've been playing the piano for 16 years. I'm also big
            cooking, and I'm working on my own recipe website.
          </p>
        </div>
      </div>
      <div
        className={`${boxColor} ${textColor} flex flex-col justify-center font-mono min-h-fit w-3/4 items-center mx-auto text-center p-8 pb-16 mb-12 my-8`}
        id="skills"
      >
        <Skills />
      </div>

      <div
        className={`${boxColor} ${textColor} flex flex-col justify-center font-mono min-h-fit w-3/4 items-center mx-auto text-center p-8 pb-16 mb-12`}
        id="experience"
      >
        <Experience />
      </div>

      <div
        className={`${boxColor} ${textColor} flex flex-col justify-center font-mono min-h-fit w-3/4 items-center mx-auto text-center p-8 pb-16 mb-12 my-8`}
        id="projects"
      >
        <Projects />
      </div>
    </div>
  );
};

export default LandingPage;
