import React from "react";

const Radio = ({ pergunta, options, id, onChange, value, active }) => {
  if (active == false) return null;
  return (
    <fieldset>
      <legend style={{ fontWeight: "bold" }}>{pergunta}</legend>
      {options.map((op) => (
        <label key={op} style={{ margin: "20px 8px" }}>
          <input
            type="radio"
            id={id}
            checked={value === op}
            value={op}
            onChange={onChange}
          />
          {op}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
