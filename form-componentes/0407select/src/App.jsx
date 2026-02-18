import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cor, setCor] = React.useState("");
  return (
    <form>
      <Input
        id={"nome"}
        label={"nome"}
        type={"text"}
        value={nome}
        setValue={setNome}
      />
      <Input
        id={"email"}
        label={"email"}
        type={"text"}
        value={email}
        setValue={setEmail}
        required
      />
      <Input
        id={"senha"}
        label={"senha"}
        type={"password"}
        value={senha}
        setValue={setSenha}
        required
      />
      <Select
        value={cor}
        setValue={setCor}
        options={["Azul", "Verde", "Cinza"]}
      />
      <button>send</button>
    </form>
  );
};

export default App;
