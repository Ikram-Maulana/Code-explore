import React from "react";
import { useAppContext } from "../context/app-context";

// Context Client
const Setting = () => {
  const { user, setUser } = useAppContext();
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
