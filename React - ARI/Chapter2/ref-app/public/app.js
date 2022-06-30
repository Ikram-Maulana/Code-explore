const App = () => {
  const judulRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi Baru";
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: judulRef
  }, "Application"));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));