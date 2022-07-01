const App = () => {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);

  const generateId = () => {
    return Date.now();
  };

  const onSubmitFormHandler = e => {
    e.preventDefault();

    if (edit.id) {
      // Menampung data yang akan diupdate
      const updatedTodo = {
        id: edit.id,
        activity
      }; // Mencari index todo yang akan diupdate

      const todoEditIndex = todos.findIndex(todo => todo.id === edit.id);
      const updatedTodos = [...todos]; // Mengganti todo yang akan diupdate

      updatedTodos[todoEditIndex] = updatedTodo; // Menyimpan todo yang baru

      return setTodos(updatedTodos);
    }

    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity("");
  };

  const onDeleteActivityHandler = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  const onEditActivityHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
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
  }), /*#__PURE__*/React.createElement("button", null, edit.id ? "Simpan Perubahan" : "Tambah")), /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, todo.activity, " ", /*#__PURE__*/React.createElement("button", {
      onClick: () => onEditActivityHandler(todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onDeleteActivityHandler(todo.id)
    }, "Hapus"));
  })));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));