import React from "react";

const Select = ({ value, setValue, options }) => {
  return (
    <select value={value} onChange={({ target }) => setValue(target.value)}>
      <option value="" disabled>
        selecione
      </option>
      {options.map((op) => (
        <option key={op} value={op}>
          {op}
        </option>
      ))}
    </select>
  );
};

export default Select;
