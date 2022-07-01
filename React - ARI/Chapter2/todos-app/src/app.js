const App = () => {
  const [activity, setActivity] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onSubmitFormHandler = (e) => {
    e.preventDefault();

    setTodos([...todos, activity]);
    setActivity("");
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
          return <li key={todo}>{todo}</li>;
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
