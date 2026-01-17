import React from "react";

const App = () => {
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return <button onClick={handleClick}>{active ? "ativo" : "inativo"}</button>;
};

export default App;
