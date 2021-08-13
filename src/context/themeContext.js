import React, { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const themes = {
    green: "#2B9264",
    blue: "#59A4EA",
    purple: "#8065DC",
    red: "#F24C38",
    orange: "#E96F1E",
    violet: "#5F6BE1",
    yellow: "#DE9C22",
  };

  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
