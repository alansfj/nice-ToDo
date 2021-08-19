import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("defaultBlue");

  const themes = {
    defaultBlue: "#294168",
    green: "#2B9264",
    blue: "#59A4EA",
    purple: "#8065DC",
    red: "#F24C38",
    orange: "#E96F1E",
    violet: "#5F6BE1",
    yellow: "#DE9C22",
  };

  const data = {
    themes,
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
export { ThemeContext };
