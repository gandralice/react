import React from "react";
import Produto from "./Produto";

const App = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <button onClick={() => setActive(!active)}>ativar</button>
      {active && <Produto />}
    </div>
  );
};

export default App;
