import React from "react";
import Input from "./form/Input";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
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
      <button>send</button>
    </form>
  );
};

export default App;
