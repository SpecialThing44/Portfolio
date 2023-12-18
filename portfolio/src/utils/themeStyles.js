// src/utils/themeStyles.js
export function getThemeStyles(theme) {
    const backgroundColor = theme === 'light' ? 'bg-gray-200' : 'bg-gray-900';
    const textColor = theme === 'light' ? 'text-black' : 'text-white';
    const boxColor = theme === 'light' ? 'bg-slate-300' : 'bg-slate-800';
  
    return { backgroundColor, textColor, boxColor };
  }