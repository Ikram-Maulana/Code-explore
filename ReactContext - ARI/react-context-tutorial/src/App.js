import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    setUser(user);
  }, []);

  return (
    <div className="App">
      <Navbar user={user} />
    </div>
  );
};

export default App;
