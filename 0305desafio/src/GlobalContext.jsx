import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  async function getDados() {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/`,
    );
    const json = await response.json();
    setDados(json);
  }

  function clean() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ getDados, dados, clean }}>
      {children}
    </GlobalContext.Provider>
  );
};
