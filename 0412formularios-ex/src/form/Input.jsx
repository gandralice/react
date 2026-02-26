import React from "react";

const Input = ({
  id,
  label,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id} style={{ textTransform: "capitalize" }}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
