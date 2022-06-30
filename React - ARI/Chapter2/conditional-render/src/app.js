const App = () => {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <h1>Application</h1>
      {/* Jika tidak ingin menggunakan else */}
      <h2>{!login && "Login Dulu, Bang!"}</h2>
      {/* Ternary if else */}
      <p>{login ? <b>Kamu sudah login</b> : <i>Kamu belum login</i>}</p>
      <button onClick={() => (login ? setLogin(false) : setLogin(true))}>
        {login ? "Logout" : "Login"}
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
