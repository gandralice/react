import React from "react";
import { GlobalContext } from "./GlobalContext";

const CleanBtn = () => {
  const global = React.useContext(GlobalContext);
  return <button onClick={() => global.clean()}>limpar dados</button>;
};

export default CleanBtn;
