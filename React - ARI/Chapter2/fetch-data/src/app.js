const Loading = () => {
  return (
    <p>
      <i>Loading Data...</i>
    </p>
  );
};

const Body = ({ newsData }) => {
  return (
    <>
      <ul>
        {newsData.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

const App = () => {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Side-effects
  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );
        setNews(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <>
      <h1>Fetch Data</h1>
      {loading ? <Loading /> : <Body newsData={news} />}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
