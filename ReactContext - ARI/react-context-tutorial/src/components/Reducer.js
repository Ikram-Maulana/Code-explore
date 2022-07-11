import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state === 0 ? 0 : state - action.payload;
    default:
      throw new Error("Unexpected action");
  }
};

const Reducer = () => {
  const [count, setCount] = useReducer(reducer, 0);

  return (
    <>
      <h1>Tutorial Reducer</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => setCount({ type: "decrement", payload: 2 })}>
          - 2
        </button>
        <span>{count}</span>
        <button onClick={() => setCount({ type: "increment", payload: 2 })}>
          + 2
        </button>
      </div>
    </>
  );
};

export default Reducer;
