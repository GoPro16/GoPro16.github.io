import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo
} from "react";

const themeConfig = isDark => ({
  "bg-color": isDark ? "bg-dark" : "bg-light",
  "text-color": isDark ? "text-white" : "text-dark"
});

const defaultTheme = "dark";

const ThemeContext = createContext([
  defaultTheme,
  themeConfig(defaultTheme === "dark")
]);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("browser-theme");
    } catch (err) {
      return "dark";
    }
  });


  const cssModule = useMemo(() => themeConfig(theme === "dark"), [theme]);

  return (
    <ThemeContext.Provider
      value={[
        theme,
        cssModule,
        () =>
          setTheme(t => {
            const nextState = t === "dark" ? "light" : "dark";

            localStorage.setItem("browser-theme", nextState);

            return nextState;
          })
      ]}
    >
      {typeof children === "function"
        ? children({
            theme,
            cssModule,
            changeTheme: () =>
              setTheme(t => {
                const nextState = t === "dark" ? "light" : "dark";

                localStorage.setItem("browser-theme", nextState);

                return nextState;
              })
          })
        : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
