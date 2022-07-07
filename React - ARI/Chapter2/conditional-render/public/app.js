const App = () => {
  const [login, setLogin] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Application"), /*#__PURE__*/React.createElement("h2", null, !login && "Login Dulu, Bang!"), /*#__PURE__*/React.createElement("p", null, login ? /*#__PURE__*/React.createElement("b", null, "Kamu sudah login") : /*#__PURE__*/React.createElement("i", null, "Kamu belum login")), /*#__PURE__*/React.createElement("button", {
    onClick: () => login ? setLogin(false) : setLogin(true)
  }, login ? "Logout" : "Login"));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));