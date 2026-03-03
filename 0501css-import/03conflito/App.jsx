import React from "react";
import Produto from "./Components/Produto.jsx";
import Title from "./Title.jsx";
import "./App.css";
// Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.
const App = () => {
  return (
    <>
      <div>
        {console.log("alice")}
        <Title text="Meu título" />
        <Produto />
      </div>
    </>
  );
};

export default App;
