import React from "react";
import useLocalStorage from "./useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };
  return (
    <>
      <p>Produto: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>tablet</button>
    </>
  );
};

export default App;
