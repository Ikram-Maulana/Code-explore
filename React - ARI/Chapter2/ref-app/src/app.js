const App = () => {
  const judulRef = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi Baru";
    }, 1000);
  }, []);

  return (
    <>
      <h1 ref={judulRef}>Application</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
