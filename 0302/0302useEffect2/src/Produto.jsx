import React from "react";

const Produto = () => {
  React.useEffect(() => {
    function handleScroll(e) {
      console.log(e);
    }
    window.addEventListener("scroll", handleScroll);
    // limpa o evento qndo o elemento e removido do DOM
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <p style={{ height: "200vh" }}>Produto</p>;
};

export default Produto;
