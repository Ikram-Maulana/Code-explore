const Loading = () => {
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Loading Data..."));
};

const Body = ({
  newsData
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", null, newsData.map(item => {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
};

const App = () => {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // Side-effects

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.spaceflightnewsapi.net/v3/blogs");
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Fetch Data"), loading ? /*#__PURE__*/React.createElement(Loading, null) : /*#__PURE__*/React.createElement(Body, {
    newsData: news
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));