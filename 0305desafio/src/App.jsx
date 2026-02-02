import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";
import CleanBtn from "./CleanBtn";

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <CleanBtn />
    </GlobalStorage>
  );
};

export default App;
