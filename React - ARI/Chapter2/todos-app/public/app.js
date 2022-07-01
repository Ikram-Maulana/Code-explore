const App = () => {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onSubmitFormHandler = e => {
    e.preventDefault();
    setTodos([...todos, activity]);
    setActivity("");
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitFormHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    name: "activity",
    value: activity,
    onChange: e => {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));