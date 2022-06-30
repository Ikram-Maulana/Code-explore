const App = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    });
    return () => clearInterval(interval);
  }, []);

  const tick = () => {
    setTime(new Date());
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, world!"), /*#__PURE__*/React.createElement("h2", null, "It is ", time.toLocaleTimeString(), "."));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));