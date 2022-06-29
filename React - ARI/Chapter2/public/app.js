const root = ReactDOM.createRoot(document.getElementById("root"));

const time = () => {
  const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang"), /*#__PURE__*/React.createElement("p", null, new Date().toLocaleTimeString()));
  root.render(element);
};

setInterval(time, 1000);