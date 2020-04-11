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
  const [theme, setTheme] = useState(window.__theme);

  useEffect(() => {
    window._onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  const cssModule = useMemo(() => themeConfig(theme === "dark"), [theme]);

  return (
    <ThemeContext.Provider
      value={[
        theme,
        cssModule,
        () =>
          setTheme(t => {
            const nextState = t === "dark" ? "light" : "dark";

            window.__setPreferredTheme(nextState);

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

                window.__setPreferredTheme(nextState);

                return nextState;
              })
          })
        : children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
