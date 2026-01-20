import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function handleClick(e) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }
  return (
    <>
      <div style={{ display: "flex", gap: "40px", margin: "20px 0px" }}>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>
      </div>
      {loading && <p>loading...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
