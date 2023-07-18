import { useContext, createContext, useEffect, useReducer } from "react";
import themeReducer from "../theme/themeReducer";

export const ThemeContext = createContext();

const initialThemeState = JSON.parse(localStorage.getItem("themeSetting")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(
    themeReducer,
    initialThemeState
  );

  const themeHandler = (btnClassName) => {
    dispatchTheme({ type: btnClassName });
  };

  // save in local storage
  useEffect(() => {
    localStorage.setItem("themeSetting", JSON.stringify(themeState));
  }, [themeState]);

  console.log({ themeState });
  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
