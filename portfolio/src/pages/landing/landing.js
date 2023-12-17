import React, { useState, useEffect } from "react";
import "./landing.css";

const LandingPage = () => {


  const handleScrollDown = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Auto-scroll down the length of the page
    window.scrollTo({
      top: documentHeight - windowHeight,
      behavior: "smooth",
    });

  };

  return (
    <body>
    <div className="overflow-hidden poggers">
      <div className="bg-gray-900 min-h-screen flex justify-center font-mono border-b border-gray-500 ">
        
        <div className="text-center text-white max-w-2xl mx-auto  mt-32">
          
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
              className="animate-bounce bg-white dark:bg-slate-800 mt-32 ml-12 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"
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
      <div className="bg-gray-900 min-h-screen flex justify-center font-mono">
        <div className="bg-white dark:bg-slate-800 w-3/4 p-8 mt-24 mx-auto text-gray-800 max-h-96 dark:text-white overflow-y-auto">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            Welcome to my personal space! I'm passionate about [your interests].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
      
    </div>
    </body>
  );
};

export default LandingPage;
