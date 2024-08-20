export function getThemeStyles(theme) {
  const backgroundColor =
    theme === "light"
      ? "bg-gray-200 transition duration-500"
      : "bg-gray-900 transition duration-500";
  const textColor =
    theme === "light"
      ? "text-black transition duration-500"
      : "text-white transition duration-500";
  const boxColor =
    theme === "light"
      ? "bg-slate-300 transition duration-500"
      : "bg-slate-800 transition duration-500";
  const borderColor =
    theme === "light" ? "border-gray-300" : "border-indigo-700";

  return { backgroundColor, textColor, boxColor, borderColor };
}
