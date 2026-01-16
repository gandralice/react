import React from "react";
import Title from "./Text/Title";
const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];

const Produtos = () => {
  return (
    <section>
      <Title content="Produtos" color="green" />
      {produtos.map((produto) => (
        <div
          key={produto.nome}
          style={{
            border: "2px solid black",
            margin: "10px",
            padding: "20px",
          }}
        >
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
