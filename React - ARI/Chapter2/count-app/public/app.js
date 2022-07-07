const MinusBtn = ({
  onClickMinus
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onClickMinus()
  }, "-");
};

const ContentCount = ({
  value
}) => {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      margin: "0 1rem"
    }
  }, value);
};

const PlusBtn = ({
  onClickPlus
}) => {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onClickPlus()
  }, "+");
};

const App = () => {
  const [count, setCount] = React.useState(0);

  const onClickMinusHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }

    return 0;
  };

  const onClickPlusHandler = () => {
    setCount(count + 1);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MinusBtn, {
    onClickMinus: onClickMinusHandler
  }), /*#__PURE__*/React.createElement(ContentCount, {
    value: count
  }), /*#__PURE__*/React.createElement(PlusBtn, {
    onClickPlus: onClickPlusHandler
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));