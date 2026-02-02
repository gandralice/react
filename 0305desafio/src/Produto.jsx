import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <p>produto: {global.dados ? global.dados[3].nome : "null"}</p>

      <button style={{ marginRight: "20px" }} onClick={() => global.getDados()}>
        carregar dados
      </button>
      {/* <CleanBtn /> */}
    </div>
  );
};

export default Produto;
