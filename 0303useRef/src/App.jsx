// import React from "react";

// const App = () => {
//   const video = React.useRef();
//   React.useEffect(() => {
//     console.log(video.current.muted);
//   });
//   return <video ref={video} />;
// };

// export default App;
import React from "react";

const App = () => {
  const [comment, setComment] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef();

  function handleClick() {
    setComment([...comment, input]);
    setInput("");
  }

  React.useEffect(() => inputRef.current.focus(), [comment]);

  return (
    <>
      <ul>
        {comment.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>enviar</button>
    </>
  );
};

export default App;
