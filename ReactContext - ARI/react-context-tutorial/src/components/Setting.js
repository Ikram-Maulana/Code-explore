import React, { useContext } from "react";
import AppContext from "../context/app-context";

// Context Client
const Setting = () => {
  const { user, setUser } = useContext(AppContext);
  return (
    <input
      type="text"
      name="changeName"
      placeholder="Change Name..."
      onChange={(e) => setUser({ ...user, name: e.target.value })}
      value={user.name ?? ""}
    />
  );
};

export default Setting;
