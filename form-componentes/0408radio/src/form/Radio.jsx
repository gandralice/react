import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((op) => (
        <label key={op}>
          {op}
          <input
            type="radio"
            value={op}
            checked={value === op}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
        </label>
      ))}
    </>
  );
};

export default Radio;
