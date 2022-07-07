const App = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => {
          return <li key={fruit}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
