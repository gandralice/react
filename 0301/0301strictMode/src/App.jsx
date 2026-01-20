import React from "react";

const App = () => {
  const [count, setCount] = React.useState(1);
  const [itens, setItens] = React.useState(["item1"]);

  const handleClick = () => {
    setCount(count + 1);
    setItens([...itens, "item " + (count + 1)]);
  };
  return (
    <>
      <ul>
        {itens.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={handleClick}>{count}</button>
    </>
  );
};

export default App;
