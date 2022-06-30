const App = () => {
  const [nama, setNama] = React.useState("");

  const onNameChangeHandler = e => {
    setNama(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(`Hello, ${nama} from Controlled Form`);
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitHandler
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama"), /*#__PURE__*/React.createElement("input", {
    name: "nama",
    type: "text",
    value: nama,
    onChange: onNameChangeHandler
  })), /*#__PURE__*/React.createElement("button", null, "Submit"));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));