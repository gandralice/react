import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      total: {global.count} <button onClick={global.addDois}>adicionar</button>
    </div>
  );
};

export default Produto;
