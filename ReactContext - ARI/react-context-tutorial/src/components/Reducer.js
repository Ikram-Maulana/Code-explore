import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return {
        ...state,
        count: state.count === 0 ? 0 : state.count - action.payload,
      };
    case "toggleTheme":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      throw new Error("Unexpected action");
  }
};

const initialValue = {
  count: 0,
  theme: "light",
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <h1>Tutorial Reducer</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
          - 2
        </button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          + 2
        </button>
      </div>
      <div
        style={{
          margin: "1.67rem 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {state.theme === "light" ? (
          <div
            style={{
              width: 50,
              height: 50,
              border: "1px solid black",
              borderRadius: "100%",
              marginBottom: "1rem",
            }}
          ></div>
        ) : (
          <div
            style={{
              width: 50,
              height: 50,
              border: "1px solid black",
              borderRadius: "100%",
              marginBottom: "1rem",
              backgroundColor: "#000",
            }}
          ></div>
        )}
        <button onClick={() => dispatch({ type: "toggleTheme" })}>
          Toggle Theme
        </button>
      </div>
    </>
  );
};

export default Reducer;
