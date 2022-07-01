const App = () => {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const generateId = () => {
    return Date.now();
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity("");
  };

  const onDeleteActivityHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  };

  return (
    <>
      <h1>Simple Todo List</h1>
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
        <button>Tambah</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.activity}{" "}
              <button onClick={() => onDeleteActivityHandler(todo.id)}>
                Hapus
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
