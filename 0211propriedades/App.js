import React from "react";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} {children}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <Titulo cor="red" texto="title1">
        children
      </Titulo>
      <Titulo cor="green" texto="title2" />
    </>
  );
};

export default App;
