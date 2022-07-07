const App = () => {
  const [click, setClick] = React.useState(false);
  const [count, setCount] = React.useState(0);

  // Penggunaan useEffect() seperti di bawah akan dijalankan baik di awal atau ketika render ulang
  // Hal ini sama saja seperti componentDidUpdate() di class component
  // Banyak digunakan untuk fetch realtime data dari API
  // React.useEffect(() => {
  //   console.log(document.getElementById("judul"));
  // });

  // Penggunaan useEffect() seperti di bawah hanya akan dijalankan saat render pertama kali
  // Hal ini sama saja seperti componentDidMount() di class component
  // Banyak digunakan ketika fetch data dari API yang tidak perlu diulang setiap render
  // React.useEffect(() => {
  //   console.log("Fetch data");
  // }, []);

  // Ketika initialize library, harus destroy dulu agar tidak init ulang
  React.useEffect(() => {
    console.log("Initialize library");

    // Clean up function | componentUnmount
    return () => {
      console.log("Destroy library");
    };
  }, []);

  // Parameter kedua berfungsi untuk menentukan state mana yang akan kita pantau saat render ulang
  // React.useEffect(() => {
  //   console.log(document.getElementById("judul"));
  // }, [count]);

  return (
    <>
      <h1 id="judul">Hello World</h1>
      <button onClick={() => setClick(true)}>Click Me</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
