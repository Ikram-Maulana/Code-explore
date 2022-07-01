const App = () => {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const generateId = () => {
    return Date.now();
  };

  const onSubmitFormHandler = e => {
    e.preventDefault();
    if (!activity) return setMessage("Kolom aktivitas jangan kosong!");

    if (edit.id) {
      // Menampung data yang akan diupdate
      const updatedTodo = { ...edit,
        activity
      }; // Mencari index todo yang akan diupdate

      const todoEditIndex = todos.findIndex(todo => todo.id === edit.id);
      const updatedTodos = [...todos]; // Mengganti todo yang akan diupdate

      updatedTodos[todoEditIndex] = updatedTodo; // Menyimpan todo yang baru

      setTodos(updatedTodos);
      message && setMessage("");
      return onCancelEditHandler();
    }

    setTodos([...todos, {
      id: generateId(),
      activity,
      done: false
    }]);
    message && setMessage("");
    setActivity("");
  };

  const onDeleteActivityHandler = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
    edit.id && onCancelEditHandler();
  };

  const onEditActivityHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const onCancelEditHandler = () => {
    console.log("cancel edit");
    setEdit([]);
    setActivity("");
  };

  const onDoneActivityHandler = todo => {
    // Menampung data yang akan diupdate
    const updatedTodo = { ...todo,
      done: !todo.done
    }; // Mencari index todo yang akan diupdate

    const todoEditIndex = todos.findIndex(currentTodo => currentTodo.id === todo.id);
    const updatedTodos = [...todos]; // Mengganti todo yang akan diupdate

    updatedTodos[todoEditIndex] = updatedTodo; // Menyimpan todo yang baru

    setTodos(updatedTodos);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red",
      marginBottom: "1rem"
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: onSubmitFormHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Nama Aktifitas",
    name: "activity",
    value: activity,
    onChange: e => {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, edit.id ? "Simpan Perubahan" : "Tambah"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: onCancelEditHandler
  }, "Cancel Edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: todo.done,
      onChange: () => onDoneActivityHandler(todo),
      disabled: edit.id ? true : false
    }), todo.activity, todo.done ? " (Selesai) " : " (Belum Selesai) ", /*#__PURE__*/React.createElement("button", {
      onClick: () => onEditActivityHandler(todo)
    }, "Edit"), /*#__PURE__*/React.createElement("button", {
      onClick: () => onDeleteActivityHandler(todo.id)
    }, "Hapus"));
  })) : /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Tidak ada data aktivitas")));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)));