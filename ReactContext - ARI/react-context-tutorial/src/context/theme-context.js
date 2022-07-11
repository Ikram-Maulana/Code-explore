import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext({});

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const initialState = {
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Unexpected action");
  }
};

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Context Service
  const ThemeContextValue = [state, dispatch];

  return (
    <ThemeContext.Provider value={ThemeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, useThemeContext };
