import React, { memo } from "react";

const Welcome = (props) => {
  console.log(props);

  return (
    <>
      <h1>Welcome, {props.nama}</h1>
      {props ? <p>{props.children}</p> : null}
    </>
  );
};

// const Welcomeh2 = () => {
//   return <h2>Welcome, Ikram!</h2>;
// };

// const Welcomeh3 = () => {
//   return <h3>Welcome, Ikram!</h3>;
// };

export default memo(Welcome);
// export { Welcomeh2, Welcomeh3 };
