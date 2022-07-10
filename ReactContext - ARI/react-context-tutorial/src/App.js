import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import AppContext from "./context/app-context";

const App = () => {
  const [user, setUser] = useState({});

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
  };

  return (
    <div className="App">
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <br />
        <Setting />
      </AppContext.Provider>
    </div>
  );
};

export default App;
