import React from "react";

const Produto = ({ dados }) => {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
      <span>{dados.descricao}</span>
      <p style={{ color: dados.vendido === "true" ? "red" : "green" }}>
        {dados.vendido === "true" ? "indisponivel" : "disponivel"}
      </p>
      <img
        src={dados.fotos[0].src}
        alt={dados.fotos[0].titulo}
        style={{ maxWidth: "50%" }}
      />
    </div>
  );
};

export default Produto;
