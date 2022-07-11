import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  empty: true,
});

const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    setUser(user);
  }, []);

  // Context Service
  const appContextValue = {
    user,
    setUser,
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useAppContext };
