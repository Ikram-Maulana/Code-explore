import React, { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext({
  empty: true,
});

const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  user: {},
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: action.payload };
    case "toggleTheme":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Unexpected action");
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    dispatch({ type: "updateUser", payload: user });
  }, []);

  // Context Service
  const appContextValue = [state, dispatch];

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
