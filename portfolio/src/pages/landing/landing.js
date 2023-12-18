import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from '../../contexts/themeContext';
import { getThemeStyles } from '../../utils/themeStyles';
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { GiArchiveResearch } from "react-icons/gi";







import "./landing.css";

const LandingPage = () => {

  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor, boxColor } = getThemeStyles(theme);

  const timeline = [
    { year: 2016, event: 'Started high school', label: 'school' },
    { year: 2020, event: 'Graduated high school', label: 'graduation' },
    { year: 2020, event: 'Moved to Toronto', label: 'city' },
    { year: 2020, event: 'Started university', label: 'school' },
    { year: 2022, event: 'Started working at Pardee Lab', label: 'lab' },
    { year: 2023, event: 'Published Paper', label: 'research' },
    { year: 2025, event: 'Graduated University', label: 'graduation' },
    // Add more events...
  ];

  const [currentIndex, setCurrentIndex] = useState(timeline.length - 1);
  const [displayedEvents, setDisplayedEvents] = useState([]);


  const handlePrev = () => {
    if (currentIndex > 0 && currentIndex > displayedEvents.length - 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < timeline.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {

    const updateDisplayedEvents = () => {
      const windowWidth = window.innerWidth;
      let numDisplayedEvents = 5;

      if (windowWidth < 768) {
        numDisplayedEvents = 3;
      } else if (windowWidth < 1024) {
        numDisplayedEvents = 4;
      }

      const startIndex = Math.max(0, currentIndex - numDisplayedEvents + 1);
      const endIndex = currentIndex + 1;
      const events = timeline.slice(startIndex, endIndex).reverse();
      setDisplayedEvents(events);
    };

    updateDisplayedEvents();

    window.addEventListener("resize", updateDisplayedEvents);
    return () => {
      window.removeEventListener("resize", updateDisplayedEvents);
    };
  }, [currentIndex, timeline]);

  
  const handleScrollDown = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Auto-scroll down the length of the page
    window.scrollTo({
      top: documentHeight - windowHeight - 100,
      behavior: "smooth",
    });

  };

  return (
    <body className={`${backgroundColor}`}>
    <div className={`${backgroundColor} overflow-hidden`}>
      <div className={`${backgroundColor} ${textColor} min-h-screen flex justify-center font-mono border-b border-gray-500`}>
        
        <div className="text-centermax-w-2xl mx-auto  mt-32">
          
          <p className="text-4xl font-bold animate-fade-in-down">Hi There</p>
          <p
            className="text-2xl opacity-0 animate-fade-in-down mt-6 pb-32"
            style={{ animationDelay: "1.5s" }}
          >
            I'm Spencer
          </p>

          {/* Scroll down indicator */}
          {(
            <div
              className={`${backgroundColor} animate-bounce mt-32 ml-12 p-2 w-10 h-10 ring-2 ${theme === 'light' ? 'ring-gray-800' : 'ring-slate-200/20'} shadow-lg rounded-full flex items-center justify-center`}
              onClick={handleScrollDown}
            >
              <svg
                class="w-6 h-6 text-violet-500 "
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className={`${backgroundColor} min-h-full flex justify-center font-mono`}>
        <div className={`${boxColor} w-3/4 p-8 mt-24 mb-24 mx-auto ${textColor} overflow-y-auto`}>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            <p className="text-lg">
              Education: 
              <br />
              <span className="font-bold">Computer science student at the University of Toronto.</span>
              <br /><br />
              My field interests:
              <br /><br />
              <span className="font-bold">Software Engineering:</span> I'm a fullstack developer, primarily interested in work with backend architecture and databases, shipping real-world, useful applications to clients.
              <br /><br />
              <span className="font-bold">Machine Learning:</span> I'm interested in the applications of machine learning to various fields, and have worked as a researcher in the field of computational biology.
              <br /><br />
              My hobbies:
              <br /><br />
              <span className="font-bold">Music:</span> I am a lifetime musician, and have played the piano for 16 years. I play the drums, and a bit of guitar and clarinet. I spend much of my time listening to, playing, and writing music. I love exploring new genres and styles and feel lucky to have music as a regular part of my life. 
              <br /><br />
              <span className="font-bold">Cooking:</span> I love to cook, both for myself and others. I love sharing the results of my work, and I'm currently working on a recipe website as a side project.
            </p>

          </p>
        </div>

        
      </div>
      <div className={`${backgroundColor} ${textColor} w-3/4 mx-auto mb-5 font-mono`}>
        <div className="flex justify-between items-center">
          <button onClick={handleNext}>
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          {displayedEvents.map((event, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <h2 className="ml-2 mr-2 text-center animate-hover">{event.year}</h2>
              <p className="ml-2 mr-2 text-center">{event.event}</p>
              {event.label === 'school' && <FaSchool className="mt-2"/>}
              {event.label === 'city' && <FaCity className="mt-2"/>}
              {event.label === 'graduation' && <FaGraduationCap className="mt-2"/>}
              {event.label === 'university' && <FaSchool className="mt-2"/>}
              {event.label === 'lab' && <ImLab className="mt-2"/>}
              {event.label === 'research' && <GiArchiveResearch className="mt-2"/>}
            </div>
          ))}
          <button onClick={handlePrev}>
            <svg
              className="w-6 h-6 text-violet-500"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
    </body>
  );
};

export default LandingPage;
