import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";
import "./themeToggleButton.css";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle-button">
      <input
        type="checkbox"
        id="theme-toggle"
        className="toggle-checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <span className="toggle-ball"></span>
      </label>
    </div>
  );
}

export default ThemeToggleButton;
