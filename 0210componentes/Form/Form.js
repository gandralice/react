import React from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  return (
    <form>
      <label htmlFor="nome">nome</label>
      <Input />
      <label htmlFor="email">email</label>
      <Input />
      <Button />
    </form>
  );
};

export default Form;
