import React from "react";
import Input from "./form/Input";
import Select from "./form/Select";
import Radio from "./form/Radio";
import Checkbox from "./form/Checkbox";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [cor, setCor] = React.useState("");
  const [entrega, setEntrega] = React.useState("");
  const [termo, setTermo] = React.useState([]);

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
        options={["Azul", "Verde", "Cinza"]}
        value={cor}
        setValue={setCor}
      />
      <p>Entrega:</p>
      <Radio
        options={["Full", "Padrão"]}
        value={entrega}
        setValue={setEntrega}
      />
      <p>Declaro que li os termos:</p>
      <Checkbox
        options={["privacidade", "segurança", "lorem"]}
        value={termo}
        setValue={setTermo}
      />
      <button>send</button>
    </form>
  );
};

export default App;
