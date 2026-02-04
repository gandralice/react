import React from "react";
import useFetch from "./useFetch";

const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/",
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;

  if (loading) return <p>carregando</p>;
  if (data)
    return (
      <>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </>
    );
  else return error;
};

export default App;
