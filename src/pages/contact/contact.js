import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import { getThemeStyles } from "../../utils/themeStyles";

function Contact() {
  const { theme } = useContext(ThemeContext);
  const { backgroundColor, textColor } = getThemeStyles(theme);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendEmail = () => {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    window.location.href = `mailto:spencer.perkins44sp@gmail.com?subject=${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen py-2 ${backgroundColor} ${textColor} font-mono`}
    >
      <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSendEmail}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
