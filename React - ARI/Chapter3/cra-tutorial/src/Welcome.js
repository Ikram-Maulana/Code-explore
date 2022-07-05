import React, { memo } from "react";

const Welcome = () => {
  return <h1>Welcome, Ikram!</h1>;
};

const Welcomeh2 = () => {
  return <h2>Welcome, Ikram!</h2>;
};

const Welcomeh3 = () => {
  return <h3>Welcome, Ikram!</h3>;
};

export default memo(Welcome);
export { Welcomeh2, Welcomeh3 };
