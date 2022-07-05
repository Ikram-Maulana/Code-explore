import React from "react";
import Welcome from "./Welcome";

// Styling
import "./App.css";

function App() {
  return (
    <div className="App">
      <Welcome nama="Ikram" />
      <Welcome nama="Maulana">Selamat Datang Brodi</Welcome>
    </div>
  );
}

export default App;
