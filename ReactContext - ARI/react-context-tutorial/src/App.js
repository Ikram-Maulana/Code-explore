import React from "react";
import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import DisplayToggleTheme from "./components/DisplayToggleTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import { AppProvider } from "./context/app-context";
import { ThemeProvider } from "./context/theme-context";

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider>
          <Navbar />
          <hr />
          <Setting />
          <hr />
          <DisplayTheme />
          <DisplayToggleTheme />
        </ThemeProvider>
      </AppProvider>
    </div>
  );
};

export default App;
