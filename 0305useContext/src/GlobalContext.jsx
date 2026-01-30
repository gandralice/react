import React from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);

  function addUm() {
    setCount((count) => count + 1);
  }
  function addDois() {
    setCount((count) => count + 2);
  }

  return (
    <GlobalContext.Provider value={{ count, addUm, addDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
