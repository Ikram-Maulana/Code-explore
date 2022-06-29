const MinusBtn = ({ onClickMinus }) => {
  return <button onClick={() => onClickMinus()}>-</button>;
};

const ContentCount = ({ value }) => {
  return (
    <span
      style={{
        margin: "0 1rem",
      }}
    >
      {value}
    </span>
  );
};

const PlusBtn = ({ onClickPlus }) => {
  return <button onClick={() => onClickPlus()}>+</button>;
};

const App = () => {
  const [count, setCount] = React.useState(0);

  const onClickMinusHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    return 0;
  };

  const onClickPlusHandler = () => {
    setCount(count + 1);
  };

  return (
    <>
      <MinusBtn onClickMinus={onClickMinusHandler} />
      <ContentCount value={count} />
      <PlusBtn onClickPlus={onClickPlusHandler} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
