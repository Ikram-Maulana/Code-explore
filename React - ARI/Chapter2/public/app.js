const clickEventHandler = msg => {
  alert(msg);
};

const element = /*#__PURE__*/React.createElement("button", {
  onClick: () => clickEventHandler("Hello World")
}, "Click Me");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);