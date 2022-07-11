import React from "react";
import "./App.css";
// import DisplayTheme from "./components/DisplayTheme";
// import DisplayToggleTheme from "./components/DisplayToggleTheme";
// import Navbar from "./components/Navbar";
// import Setting from "./components/Setting";
// import { AppProvider } from "./context/app-context";
import Reducer from "./components/Reducer";

const App = () => {
  return (
    <div className="App">
      <Reducer />
      {/* <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <DisplayToggleTheme />
      </AppProvider> */}
    </div>
  );
};

export default App;
