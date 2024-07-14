// components/ThemeProvider.js
"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

const toggleTheme = () => {
  setTheme((prevTheme) => {
    const newTheme = prevTheme === "light" ? "dark" : "light";

    document.body.classList.remove(prevTheme);
    document.body.classList.add(newTheme);

    return newTheme;
  });
};


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
