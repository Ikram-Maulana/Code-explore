const App = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, fruits.map(fruit => {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  })));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));