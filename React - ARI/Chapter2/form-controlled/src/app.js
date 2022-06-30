const App = () => {
  const [nama, setNama] = React.useState("");

  const onNameChangeHandler = (e) => {
    setNama(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(`Hello, ${nama} from Controlled Form`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Nama</label>
        <input
          name="nama"
          type="text"
          value={nama}
          onChange={onNameChangeHandler}
        ></input>
      </div>
      <button>Submit</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
