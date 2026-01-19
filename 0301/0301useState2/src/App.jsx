import React from "react";
import ButtonModal from "./ButtonModal";

const App = () => {
  const [modal, setModal] = React.useState(true);
  const [itens, setItens] = React.useState("teste");

  const handleClick = () => {
    return setItens("outro");
  };
  return (
    <>
      <p>{itens}</p>
      <button onClick={handleClick}>clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
