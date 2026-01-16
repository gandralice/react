import React from "react";
import Home from "./Home";
import Produtos from "./Produtos";
import Header from "./Header";

const App = () => {
  const { pathname } = window.location;
  let Page;
  if (pathname === "/Produtos") {
    Page = Produtos;
  } else {
    Page = Home;
  }
  return (
    <section>
      <Header />
      <Page />
    </section>
  );
};

export default App;
