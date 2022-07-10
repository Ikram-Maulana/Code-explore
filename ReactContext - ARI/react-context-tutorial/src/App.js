import React, { useEffect, useState } from "react";
import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import DisplayToggleTheme from "./components/DisplayToggleTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import AppContext from "./context/app-context";

const App = () => {
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
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <DisplayToggleTheme />
      </AppContext.Provider>
    </div>
  );
};

export default App;
