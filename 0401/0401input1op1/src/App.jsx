import React from "react";

const App = () => {
  const [nm, setNm] = React.useState("");
  const [em, setEm] = React.useState("");
  const [ag, setAg] = React.useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(nm, em, ag);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameArea">Name</label>
        <input
          id="nameArea"
          type="text"
          value={nm}
          onChange={(e) => setNm(e.target.value)}
        />
        <label htmlFor="emailArea">E-mail</label>
        <input
          id="emailArea"
          type="email"
          value={em}
          onChange={(e) => setEm(e.target.value)}
        />
        <label htmlFor="ageArea">Age</label>
        <input
          id="ageArea"
          type="number"
          value={ag}
          onChange={(e) => setAg(e.target.value)}
          style={{ marginBottom: "2rem" }}
        />
        <button>send</button>
      </form>
    </>
  );
};

export default App;
