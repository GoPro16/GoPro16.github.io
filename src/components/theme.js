import React, { createContext, useState, useContext, useEffect, useMemo } from "react";

const themeConfig = isDark => ({
  "bg-color": isDark ? "bg-dark" : "bg-light",
  "text-color": isDark ? 'text-white' : 'text-dark'
});

const defaultTheme = localStorage.getItem("browser-theme") || 'dark'

const ThemeContext = createContext([
  defaultTheme,
  themeConfig(defaultTheme === 'dark')
]);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    if (localStorage.getItem("browser-theme") !== theme) {
      localStorage.setItem("browser-theme", theme);
    }
  }, [theme]);

  const cssModule = useMemo(() => themeConfig(theme === "dark"), [theme]);

  return (
    <ThemeContext.Provider
      value={[
        theme,
        cssModule,
        () => setTheme(t => (t === "dark" ? "light" : "dark"))
      ]}
    >
      {typeof children === "function"
        ? children({
            theme,
            cssModule,
            changeTheme: () => setTheme(t => (t === "dark" ? "light" : "dark"))
          })
        : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
