const App = () => {
  const namaRef = React.useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const nama = namaRef.current.value;

    console.log(`Hello, ${nama}`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Nama</label>
        <input name="nama" type="text" ref={namaRef}></input>
      </div>
      <button>Submit</button>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
