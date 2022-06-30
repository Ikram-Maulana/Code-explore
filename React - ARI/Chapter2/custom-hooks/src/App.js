import { useState } from "react";
import { useForm } from "./useForm";
import "./App.css";

const App = () => {
  const [title] = useState("Belajar React Hooks");
  const [username, changeUsername] = useForm("");
  const [password, changePassword] = useForm("");

  return (
    <div className="App">
      <h1>{title}</h1>
      <input
        type="text"
        value={username}
        onChange={changeUsername}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={changePassword}
        placeholder="Password"
      />
    </div>
  );
};

export default App;
