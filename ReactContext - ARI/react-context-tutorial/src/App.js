import React from "react";
import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import DisplayToggleTheme from "./components/DisplayToggleTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import { AppProvider } from "./context/app-context";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <DisplayToggleTheme />
      </AppProvider>
    </div>
  );
};

export default App;
