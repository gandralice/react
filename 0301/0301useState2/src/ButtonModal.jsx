import React from "react";

const ButtonModal = ({ setModal }) => {
  const handleClick = () => {
    setModal((active) => !active);
  };
  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
