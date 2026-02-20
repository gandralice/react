import React from "react";

const Checkbox = ({ options, value, setValue, ...props }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }
  return (
    <>
      {options.map((op) => (
        <label key={op}>
          <input
            type="checkbox"
            value={op}
            checked={value.includes(op)}
            onChange={handleChange}
            {...props}
          />
          {op}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
