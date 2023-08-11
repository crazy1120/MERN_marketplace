import { classNamesContext } from "@/contexts";
import React, { useContext } from "react";

const Input = ({
  name,
  type = "text",
  value,
  onChange,
  errors,
  placeholder = `Input your ${name}`,
}) => {
  const { state: classNameState } = useContext(classNamesContext);

  return (
    <>
      <input
        type={type}
        name={name}
        id={name}
        className={classNameState.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errors
        ? errors[name] && (
            <span className={classNameState.error}>{errors[name]}</span>
          )
        : ""}
    </>
  );
};

export default Input;
