import React from "react";
import { useAppContext } from "../context/app-context";

// Context Client
const Setting = () => {
  const [{ user }, dispatch] = useAppContext();
  return (
    <input
      type="text"
      name="changeName"
      placeholder="Change Name..."
      onChange={(e) => dispatch({type: "updateUser", payload: { ...user, name: e.target.value }})}
      value={user.name ?? ""}
    />
  );
};

export default Setting;
