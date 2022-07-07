const App = () => {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState({});
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState("");

  const generateId = () => {
    return Date.now();
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    if (!activity) return setMessage("Kolom aktivitas jangan kosong!");

    if (edit.id) {
      // Menampung data yang akan diupdate
      const updatedTodo = {
        ...edit,
        activity,
      };

      // Mencari index todo yang akan diupdate
      const todoEditIndex = todos.findIndex((todo) => todo.id === edit.id);
      const updatedTodos = [...todos];

      // Mengganti todo yang akan diupdate
      updatedTodos[todoEditIndex] = updatedTodo;

      // Menyimpan todo yang baru
      setTodos(updatedTodos);
      message && setMessage("");
      return onCancelEditHandler();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity,
        done: false,
      },
    ]);
    message && setMessage("");
    setActivity("");
  };

  const onDeleteActivityHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
    edit.id && onCancelEditHandler();
  };

  const onEditActivityHandler = (todo) => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const onCancelEditHandler = () => {
    console.log("cancel edit");
    setEdit([]);
    setActivity("");
  };

  const onDoneActivityHandler = (todo) => {
    // Menampung data yang akan diupdate
    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    // Mencari index todo yang akan diupdate
    const todoEditIndex = todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );
    const updatedTodos = [...todos];

    // Mengganti todo yang akan diupdate
    updatedTodos[todoEditIndex] = updatedTodo;

    // Menyimpan todo yang baru
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Simple Todo List</h1>
      {message && (
        <div
          style={{
            color: "red",
            marginBottom: "1rem",
          }}
        >
          {message}
        </div>
      )}
      <form onSubmit={onSubmitFormHandler}>
        <input
          type="text"
          placeholder="Nama Aktifitas"
          name="activity"
          value={activity}
          onChange={(e) => {
            setActivity(e.target.value);
          }}
        />
        <button>{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
        {edit.id && <button onClick={onCancelEditHandler}>Cancel Edit</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => onDoneActivityHandler(todo)}
                  disabled={edit.id ? true : false}
                ></input>
                {todo.activity}
                {todo.done ? " (Selesai) " : " (Belum Selesai) "}
                <button onClick={() => onEditActivityHandler(todo)}>
                  Edit
                </button>
                <button onClick={() => onDeleteActivityHandler(todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>Tidak ada data aktivitas</i>
        </p>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
