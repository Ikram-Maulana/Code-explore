const App = () => {
  const namaRef = React.useRef(null);

  const onSubmitHandler = e => {
    e.preventDefault();
    const nama = namaRef.current.value;
    console.log(`Hello, ${nama}`);
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama"), /*#__PURE__*/React.createElement("input", {
    name: "nama",
    type: "text",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", null, "Submit"));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));