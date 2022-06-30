const App = () => {
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return <h1>Fetch Data</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
