import React from "react";
import formFields from "./formFields";

const App = () => {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: "",
      };
    }, {}),
  );

  const [data, setData] = React.useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );
      const json = await response.json();
      setData(json);
      if (!response.ok) console.log("erro api:", json);
    } catch (erro) {
      console.error(erro);
    }
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map(({ id, label, type }) => (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button>send</button>
      </form>

      {/* mensagem: */}

      {data && (data.id || data.ID) && (
        <div>Enviado! ID: {data.id || data.ID}</div>
      )}

      {data && !data.id && !data.ID && (
        <div style={{ color: "red" }}>
          Erro: {data.message || "Falha no cadastro"}
        </div>
      )}
    </>
  );
};

export default App;
