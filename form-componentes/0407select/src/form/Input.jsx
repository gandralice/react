import React from "react";

const Input = ({ id, label, type, setValue, ...props }) => {
  return (
    <>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
