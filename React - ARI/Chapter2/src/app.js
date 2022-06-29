const root = ReactDOM.createRoot(document.getElementById("root"));

const time = () => {
  const element = (
    <>
      <h1>Jam Sekarang</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  );

  root.render(element);
};

setInterval(time, 1000);
