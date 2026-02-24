import React from "react";
import useForm from "./hooks/useForm";
import Input from "./form/Input";

const App = () => {
  const nome = useForm();
  const sobrenome = useForm(false);
  const cep = useForm("cep");
  const email = useForm("email");

  function handleSubmit(event) {
    event.preventDefault();
    if (nome.validate() && cep.validate() && email.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="nome" id="nome" type="text" {...nome} />{" "}
      <Input label="sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <Input
        label="cep"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="email"
        id="email"
        type="email"
        placeholder="email@email.com"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
