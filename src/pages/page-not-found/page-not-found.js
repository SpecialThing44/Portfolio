import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { getThemeStyles } from "../../utils/themeStyles";
const PageNotFound = () => {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor } = getThemeStyles(theme);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-hidden ">
      <div
        className={`${backgroundColor} ${textColor} min-h-screen flex justify-center font-mono border-b border-gray-500`}
      >
        <div className="text-center max-w-2xl mx-auto  mt-32">
          <p className="text-4xl font-bold animate-fade-in-down">
            The page you are looking for does not exist
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
