const clickEventHandler = (msg) => {
  alert(msg);
};

const element = (
  <button onClick={() => clickEventHandler("Hello World")}>Click Me</button>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
