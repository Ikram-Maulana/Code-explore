const App = () => {
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v3/blogs");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Fetch Data");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));