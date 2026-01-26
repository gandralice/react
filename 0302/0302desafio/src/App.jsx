import React from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = React.useState(null);
  // co

  async function handleClick(e) {
    const produto = e.target.innerText;
    window.localStorage.setItem("produto", produto); // salva a preferencia

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`,
    );
    const json = await response.json();
    setDados(json);
  }

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal) {
      async function fetchLocal() {
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${produtoLocal}`,
        );
        const json = await response.json();
        setDados(json);
      }
      fetchLocal();
    }
  }, []);
  return (
    <>
      <h1>Preferência: {window.localStorage.getItem("produto")}</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={handleClick} style={{ background: "lightBlue" }}>
          notebook
        </button>
        <button onClick={handleClick} style={{ background: "lightBlue" }}>
          smartphone
        </button>
      </div>
      {dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
