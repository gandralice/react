import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <button>send</button>
      </form>
    </>
  );
};

export default App;
